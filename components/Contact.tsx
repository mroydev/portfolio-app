'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import SubmitButton from './SubmitButton';
import Link from 'next/link';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/validation';
import { handleKeyPress } from '@/lib/handleKeyPress';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  const {
    register,
    trigger,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28 xl:scroll-mb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <Link className="underline" href="mailto:example@gmail.com">
          {' '}
          mroydev24@gmail.com
        </Link>{' '}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const result = await trigger();
          if (!result) return;

          const response = await sendEmail(formData);

          if (!response || response.message !== 'Email sent successfully') {
            toast.error('Failed to send email');
            return;
          }

          toast.success('Email sent successfully');
          reset();
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="borderBlack h-14 rounded-lg bg-white px-4 text-black transition-all dark:bg-gray-800 dark:text-white dark:outline-none dark:placeholder:text-gray-400"
          {...register('email')}
          type="email"
          placeholder="Your email"
          onKeyDown={handleKeyPress}
          onChange={() => clearErrors('email')}
        />
        {errors.email && (
          <span className="text-red-500">
            {errors.email?.message?.toString()}
          </span>
        )}

        <textarea
          className="borderBlack my-3 h-52 rounded-lg bg-white p-4 text-black transition-all dark:bg-gray-800 dark:text-white dark:outline-none dark:placeholder:text-gray-400"
          {...register('message')}
          placeholder="Your message"
          onChange={() => clearErrors('message')}
        />
        {errors.message && (
          <span className="text-red-500">
            {errors.message?.message?.toString()}
          </span>
        )}

        <SubmitButton />
      </form>
    </motion.section>
  );
}
