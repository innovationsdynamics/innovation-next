import { createHandler } from '@/lib/api/adapter';
import { getProducts, createProduct } from '@/lib/controllers/productController';

export const GET = createHandler(getProducts);
export const POST = createHandler(createProduct, { requireAuth: true, requireAdmin: true });
