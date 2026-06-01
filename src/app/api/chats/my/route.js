import { createHandler } from '@/lib/api/adapter';
import { getMyChat } from '@/lib/controllers/chatController';

export const GET = createHandler(getMyChat, { requireAuth: true });
