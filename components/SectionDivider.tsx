'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsBlurred(entry.isIntersecting); // Set blur if 'About' is in view
      },
      { threshold: 0.5 } // Trigger when 50% of 'About' is visible
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <motion.div
      className={`my-24 hidden h-16 w-1 rounded-full bg-gray-300 dark:bg-gray-300/20 sm:block ${
        isBlurred ? 'blur-3xl' : ''
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
