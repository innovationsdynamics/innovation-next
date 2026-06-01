import { routeHandlers } from '@/lib/api/adapter';
import { getUsers } from '@/lib/controllers/authController';

export const { GET } = routeHandlers({ GET: getUsers }, { requireAuth: true, requireAdmin: true });
