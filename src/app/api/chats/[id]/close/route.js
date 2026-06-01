import { createHandler } from '@/lib/api/adapter';
import { closeChat } from '@/lib/controllers/chatController';

export const PUT = createHandler(closeChat, { requireAuth: true, requireAdmin: true });
