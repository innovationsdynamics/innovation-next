import { routeHandlers } from '@/lib/api/adapter';
import { resetPassword } from '@/lib/controllers/authController';

export const { POST } = routeHandlers({ POST: resetPassword });
