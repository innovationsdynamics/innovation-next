import { createHandler } from '@/lib/api/adapter';
import { getChatById } from '@/lib/controllers/chatController';

export const GET = createHandler(getChatById, { requireAuth: true });
