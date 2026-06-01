import { createHandler } from '@/lib/api/adapter';
import { updateOrderStatus } from '@/lib/controllers/orderController';

export const PUT = createHandler(updateOrderStatus, { requireAuth: true, requireAdmin: true });
