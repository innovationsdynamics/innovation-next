import { createHandler } from '@/lib/api/adapter';
import {
  getCategories,
  createCategory,
} from '@/lib/controllers/categoryController';

export const GET = createHandler(getCategories);
export const POST = createHandler(createCategory, { requireAuth: true, requireAdmin: true });
