import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import issuetrackerImg from '@/public/issuetracker.png';
import petsoftImg from '@/public/petsoft.png';
import devflowImg from '@/public/devflow.png';
import amazonImg from '@/public/amazon.png';

export const navLinks = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Petsoft',
    description:
      'Petsoft serves as a pet daycare service where pet owners can trust the PetSoft team to take care of their pets for a specified period.  ',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Postgresql',
      'Prisma',
    ],
    imageUrl: petsoftImg,
    url: 'https://petsoft-mroy.vercel.app',
  },
  {
    title: 'Stack-Overflow',
    description:
      'This Stack Overflow clone is a modern web application and it features a user-friendly interface, robust data handling, and dynamic content delivery.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Mongodb'],
    imageUrl: devflowImg,
    url: 'https://stack-overflow-lac-alpha.vercel.app',
  },

  {
    title: 'Issue Tracker',
    description:
      'The Issue Tracker app  offers features like creating, updating, and monitoring issues, providing a user-friendly interface and robust database integration.',
    tags: ['React', 'Next.js', 'Tailwind', 'MySQL', 'Prisma'],
    imageUrl: issuetrackerImg,
    url: 'https://issue-tracker-mroy.vercel.app',
  },
  {
    title: 'Amazon',
    description:
      ' Amazon clone is a modern e-commerce platform that offers a wide range of products, user-friendly interface, and secure payment options. ',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: amazonImg,
    url: 'https://amazon-js-three.vercel.app',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'MySQL',
  'Express',
  'PostgreSQL',
  'Framer Motion',
  'Clerk',
  'Next-auth',
  'Shadcn',
  'React-hook-form',
  'Tanstack-React-query',
  'Material-UI',
  'Radix-UI',
  'Appwrite',
] as const;
