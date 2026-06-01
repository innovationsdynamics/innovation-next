import { routeHandlers } from '@/lib/api/adapter';
import { verifyRegistrationOTP } from '@/lib/controllers/authController';

export const { POST } = routeHandlers({ POST: verifyRegistrationOTP });
