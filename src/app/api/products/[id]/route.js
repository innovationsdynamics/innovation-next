import { createHandler } from '@/lib/api/adapter';
import {
  getProductById,
  updateProduct,
  deleteProduct,
} from '@/lib/controllers/productController';

export const GET = createHandler(getProductById);
export const PUT = createHandler(updateProduct, { requireAuth: true, requireAdmin: true });
export const DELETE = createHandler(deleteProduct, { requireAuth: true, requireAdmin: true });
