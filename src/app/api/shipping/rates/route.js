import { createHandler } from '@/lib/api/adapter';
import { getShippingRates } from '@/lib/controllers/shippingController';

export const POST = createHandler(getShippingRates);
