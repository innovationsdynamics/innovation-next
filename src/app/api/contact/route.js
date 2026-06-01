import { createHandler } from '@/lib/api/adapter';
import { sendContactEmail } from '@/lib/controllers/contactController';

export const POST = createHandler(sendContactEmail);
