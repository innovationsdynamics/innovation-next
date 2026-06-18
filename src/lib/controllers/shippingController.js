const asyncHandler = require('express-async-handler');

// @desc    Calculate shipping rates
// @route   POST /api/shipping/rates
// @access  Private/Public
const getShippingRates = asyncHandler(async (req, res) => {
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

  // 2. Always return free shipping (since all items are over $50)
  return res.json([
    {
      id: 'free-shipping',
      service: 'Free Shipping',
      carrier: 'Standard Shipping',
      rate: 0,
      est_delivery_days: 'Standard Shipping'
    }
  ]);
});

module.exports = { getShippingRates };
