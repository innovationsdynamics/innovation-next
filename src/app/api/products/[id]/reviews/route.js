import { createHandler } from '@/lib/api/adapter';
import {
  createProductReview,
  updateProductReview,
  deleteProductReview,
} from '@/lib/controllers/productController';

export const POST = createHandler(createProductReview, { requireAuth: true });
export const PUT = createHandler(updateProductReview, { requireAuth: true });
export const DELETE = createHandler(deleteProductReview, { requireAuth: true });
