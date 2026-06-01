import { createHandler } from '@/lib/api/adapter';
import { createReturnRequest, getReturnRequests } from '@/lib/controllers/returnController';

export const POST = createHandler(createReturnRequest);
export const GET = createHandler(getReturnRequests);
