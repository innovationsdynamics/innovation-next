import { routeHandlers } from '@/lib/api/adapter';
import { blockUser } from '@/lib/controllers/authController';

export const { PUT } = routeHandlers({ PUT: blockUser }, { requireAuth: true, requireAdmin: true });
