const EasyPostClient = require('@easypost/api');
const asyncHandler = require('express-async-handler');

let client;

try {
  if (process.env.EASYPOST_API_KEY) {
    client = new EasyPostClient(process.env.EASYPOST_API_KEY);
  }
} catch (e) {
  console.error('EasyPost init failed:', e);
}

// @desc    Calculate shipping rates
// @route   POST /api/shipping/rates
// @access  Private/Public
const getShippingRates = asyncHandler(async (req, res) => {
  if (!client) {
    res.status(503);
    throw new Error('Shipping service not configured (API Key missing)');
  }

  const { shippingAddress, cartItems } = req.body;

  if (!shippingAddress || !cartItems || cartItems.length === 0) {
    res.status(400);
    throw new Error('Missing shipping address or cart items');
  }

  // 1. Check country first
  const country = (shippingAddress.country || 'US').toUpperCase();
  if (country !== 'US' && country !== 'UNITED STATES') {
    res.status(400);
    throw new Error('Sorry, we do not currently deliver to your location.');
  }

  // 2. Calculate subtotal to check if >= $50 (free shipping)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  if (subtotal >= 50) {
    // Return free shipping instead of calling EasyPost
    return res.json([
      {
        id: 'free-shipping',
        service: 'Free Shipping',
        carrier: 'Standard Shipping',
        rate: 0,
        est_delivery_days: 'Standard Shipping'
      }
    ]);
  }

  // Company Address
  const fromAddress = await client.Address.create({
    company: process.env.COMPANY_NAME || 'Innovation Dynamics Group LLC',
    street1: process.env.COMPANY_ADDRESS || '123 Business Rd',
    city: process.env.COMPANY_CITY || 'New York',
    state: process.env.COMPANY_STATE || 'NY',
    zip: process.env.COMPANY_ZIP || '10001',
    country: 'US',
    phone: process.env.COMPANY_PHONE || '+1-612-445-9132',
  });

  // Customer Address
  const toAddress = await client.Address.create({
    street1: shippingAddress.address,
    city: shippingAddress.city,
    state: shippingAddress.state || '',
    zip: shippingAddress.postalCode,
    country: 'US',
    phone: shippingAddress.phone,
  });

  // Calculate total parcel weight (ounces)
  const totalWeightOz = cartItems.reduce((acc, item) => {
    const itemWeight = item.weight ? parseFloat(item.weight) : 20;
    return acc + itemWeight * item.qty;
  }, 0);

  const parcel = await client.Parcel.create({
    weight: totalWeightOz,
  });

  const shipment = await client.Shipment.create({
    to_address: toAddress,
    from_address: fromAddress,
    parcel,
  });

  // Allowed carrier accounts (United States only)
  const allowedAccounts = [
    'ca_76d0939dc1ce4c99870bbc2844d8d02b', // FedEx
    'ca_c5f03a14c10d4fbab837e8a35b01c7df', // UPS
    'ca_b82a2962176446d09a48bc649977f467', // USPS
  ];

  const filteredRates = shipment.rates.filter(
    (rate) =>
      allowedAccounts.includes(rate.carrier_account_id) ||
      rate.carrier === 'UPSDAP' ||
      rate.carrier_account_id === '1399VH'
  );

  res.json(filteredRates);
});

module.exports = {
  getShippingRates,
};