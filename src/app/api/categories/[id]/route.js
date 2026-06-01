import { createHandler } from '@/lib/api/adapter';
import {
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '@/lib/controllers/categoryController';

export const GET = createHandler(getCategoryById);
export const PUT = createHandler(updateCategory, { requireAuth: true, requireAdmin: true });
export const DELETE = createHandler(deleteCategory, { requireAuth: true, requireAdmin: true });
