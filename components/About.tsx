'use client';

import React from 'react';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a{' '}
        <span className="font-medium">self-taught Indian programmer</span>{' '}
        driven by passion. My focus is on{' '}
        <span className="font-medium">
          React, Next.js, Prisma, MongoDB, NoSQL, PostgreSQL, and MySQL
        </span>
        . Beyond programming, I have a deep love for{' '}
        <span className="font-medium">reciting Bengali poems</span>, which
        connects me to my cultural roots.
      </p>

      <p className="mb-3">
        After exploring different paths, I chose to{' '}
        <span className="font-medium">follow my passion for programming</span>{' '}
        and dedicated myself to learning{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">Problem-solving</span> is the part of
        programming I enjoy the most—it’s immensely{' '}
        <span className="underline">rewarding</span> to crack challenging
        problems and create solutions that make a difference. My primary tech
        stack includes{' '}
        <span className="font-medium">React, Next.js, Node.js, MongoDB,</span>{' '}
        and <span className="font-medium">Prisma</span>. I am also proficient in{' '}
        <span className="font-medium">TypeScript</span> and constantly eager to
        explore and master new technologies. Currently, I am seeking a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I immerse
        myself in <span className="font-medium">Bengali poetry</span>, honing my
        skills in <span className="font-medium">recitation</span>. I’m also
        passionate about{' '}
        <span className="font-medium">continuous learning</span>, delving into
        topics like <span className="font-medium">history and philosophy</span>{' '}
        and staying updated with{' '}
        <span className="font-medium">new tech trends</span>.{' '}
        <span className="italic">These diverse interests</span> enrich my
        perspective and inspire my work as a programmer.
      </p>
    </motion.section>
  );
}
