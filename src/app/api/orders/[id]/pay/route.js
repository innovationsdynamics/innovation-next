import { createHandler } from '@/lib/api/adapter';
import { updateOrderToPaid } from '@/lib/controllers/orderController';

export const PUT = createHandler(updateOrderToPaid, { requireAuth: true });
