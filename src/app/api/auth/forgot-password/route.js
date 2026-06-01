import { routeHandlers } from '@/lib/api/adapter';
import { forgotPassword } from '@/lib/controllers/authController';

export const { POST } = routeHandlers({ POST: forgotPassword });
