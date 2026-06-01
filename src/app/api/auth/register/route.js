import { routeHandlers } from '@/lib/api/adapter';
import {
  authUser,
  sendRegistrationOTP,
  verifyRegistrationOTP,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  blockUser,
  unblockUser,
  registerUser,
} from '@/lib/controllers/authController';

export const { POST } = routeHandlers({
  POST: registerUser,
});
