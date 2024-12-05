'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.5);

  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['0 1', '0.8 0.2'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative mx-auto mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-60 xl:scroll-mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>

      {/* Experience Content */}
      <motion.div
        ref={itemRef}
        style={{ scale, opacity }}
        className="relative flex flex-col items-center"
      >
        <div
          className="w-full max-w-[95%] rounded-lg border border-gray-200 bg-gray-100 
            p-6 shadow-lg transition-colors dark:border-gray-600 dark:bg-gray-800 sm:max-w-[80%]"
        >
          <h3 className="mb-2 text-center text-lg font-semibold sm:text-xl">
            Self-Taught Full Stack Developer
          </h3>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            2020 - Present
          </p>
          <p className="mt-3 text-justify text-gray-700 dark:text-gray-300">
            As a self-taught full-stack web developer from India, I have spent
            the last four years honing my skills in modern web technologies,
            including JavaScript, TypeScript, React, Next.js, Tailwind CSS,
            Node.js, Express.js, and databases like MongoDB, MySQL, and
            PostgreSQL. I have built and deployed several web applications using
            Prisma, Git, and GitHub, with Vercel as my primary hosting platform.
          </p>
          <p className="mt-3 text-justify text-gray-700 dark:text-gray-300">
            My journey began in 2020, and since then, I have continuously
            expanded my knowledge and expertise by working on personal projects
            and learning from real-world challenges. Though I have no formal job
            or freelancing experience, my passion for software development
            drives me to improve and keep up with the latest industry trends.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
