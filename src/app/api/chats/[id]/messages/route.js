import { createHandler } from '@/lib/api/adapter';
import { sendMessage } from '@/lib/controllers/chatController';

export const POST = createHandler(sendMessage, { requireAuth: true });
