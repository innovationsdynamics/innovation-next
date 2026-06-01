import { createHandler } from '@/lib/api/adapter';
import { getSearchSuggestions } from '@/lib/controllers/productController';

export const GET = createHandler(getSearchSuggestions);
