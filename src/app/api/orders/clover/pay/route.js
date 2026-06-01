import { createHandler } from '@/lib/api/adapter';
import { createCloverPayment } from '@/lib/controllers/orderController';

export const POST = createHandler(createCloverPayment, { requireAuth: true });
