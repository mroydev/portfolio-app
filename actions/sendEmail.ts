'use server';

import ContactFormEmail from '@/email/contactFormEmail';
import { contactSchema } from '@/lib/validation';
import React from 'react';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // Convert FormData to an object for validation
  const formDataObj = {
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  // Validate form data
  const validatedFormData = contactSchema.safeParse(formDataObj);

  if (!validatedFormData.success) {
    console.error('Validation failed:', validatedFormData.error);

    return {
      message: 'Validation failed',
      errors: validatedFormData.error.formErrors.fieldErrors,
    };
  }

  try {
    const { email, message } = validatedFormData.data;

    // Create a React element for the email content
    const emailContent = React.createElement(ContactFormEmail, {
      message,
      email,
    });

    // Send email
    await resend.emails.send({
      from: 'Contact Form : <onboarding@resend.dev>', // Sender's email or a verified domain email
      to: 'mroydev24@gmail.com', // Your recipient email
      subject: 'New message from your website',
      replyTo: email,
      react: emailContent,
    });

    console.log('Email sent successfully:');
    return { message: 'Email sent successfully' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { message: 'Failed to send email', error };
  }
}
