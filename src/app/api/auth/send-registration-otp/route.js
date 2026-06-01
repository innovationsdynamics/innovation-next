import { routeHandlers } from '@/lib/api/adapter';
import { sendRegistrationOTP } from '@/lib/controllers/authController';

export const { POST } = routeHandlers({ POST: sendRegistrationOTP });
