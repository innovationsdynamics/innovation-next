import { routeHandlers } from '@/lib/api/adapter';
import { getUserProfile, updateUserProfile } from '@/lib/controllers/authController';

export const { GET, PUT } = routeHandlers(
  {
    GET: getUserProfile,
    PUT: updateUserProfile,
  },
  { requireAuth: true }
);
