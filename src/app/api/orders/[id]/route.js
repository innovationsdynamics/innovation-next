import { createHandler } from '@/lib/api/adapter';
import { getOrderById, deleteOrder } from '@/lib/controllers/orderController';

export const GET = createHandler(getOrderById);
export const DELETE = createHandler(deleteOrder, { requireAuth: true });
