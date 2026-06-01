import { createHandler } from '@/lib/api/adapter';
import { getAnalytics } from '@/lib/controllers/dashboardController';

export const GET = createHandler(getAnalytics, { requireAuth: true, requireAdmin: true });
