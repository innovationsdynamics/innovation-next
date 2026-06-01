import { createHandler } from '@/lib/api/adapter';
import { getDashboardStats } from '@/lib/controllers/dashboardController';

export const GET = createHandler(getDashboardStats, { requireAuth: true, requireAdmin: true });
