import { createHandler } from '@/lib/api/adapter';
import { getMyOrders } from '@/lib/controllers/orderController';

export const GET = createHandler(getMyOrders, { requireAuth: true });
