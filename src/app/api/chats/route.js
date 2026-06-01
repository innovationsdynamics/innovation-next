import { createHandler } from '@/lib/api/adapter';
import { getAllChats } from '@/lib/controllers/chatController';

export const GET = createHandler(getAllChats, { requireAuth: true, requireAdmin: true });
