import { routeHandlers } from '@/lib/api/adapter';
import { unblockUser } from '@/lib/controllers/authController';

export const { PUT } = routeHandlers({ PUT: unblockUser }, { requireAuth: true, requireAdmin: true });
