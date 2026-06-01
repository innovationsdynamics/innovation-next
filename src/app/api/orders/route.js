import { createHandler } from '@/lib/api/adapter';
import { addOrderItems, getOrders } from '@/lib/controllers/orderController';

export const POST = createHandler(addOrderItems, { requireAuth: true });
export const GET = createHandler(getOrders, { requireAuth: true, requireAdmin: true });
