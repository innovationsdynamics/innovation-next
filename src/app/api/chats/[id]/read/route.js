import { createHandler } from '@/lib/api/adapter';
import { markAsRead } from '@/lib/controllers/chatController';

export const PUT = createHandler(markAsRead, { requireAuth: true, requireAdmin: true });
