import { createHandler } from '@/lib/api/adapter';
import { bulkUploadProducts } from '@/lib/controllers/productController';

export const POST = createHandler(bulkUploadProducts, { requireAuth: true, requireAdmin: true });
