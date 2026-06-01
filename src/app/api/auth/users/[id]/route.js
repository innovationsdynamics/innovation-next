import { routeHandlers } from '@/lib/api/adapter';
import { deleteUser } from '@/lib/controllers/authController';

export const { DELETE } = routeHandlers({ DELETE: deleteUser }, { requireAuth: true, requireAdmin: true });
