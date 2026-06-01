import { routeHandlers } from '@/lib/api/adapter';
import { authUser } from '@/lib/controllers/authController';

export const { POST } = routeHandlers({ POST: authUser });
