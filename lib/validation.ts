import { z } from 'zod';

export const contactSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' })
    .max(100, { message: 'Email cannot exceed 100 characters' }),

  message: z
    .string()
    .min(2, 'Message must be at least 2 characters')
    .max(5000, 'Message cannot exceed 5000 characters'),
});
