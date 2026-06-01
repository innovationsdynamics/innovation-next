import { createHandler } from '@/lib/api/adapter';
import { checkReviewEligibility } from '@/lib/controllers/orderController';

export const GET = createHandler(checkReviewEligibility, { requireAuth: true });
