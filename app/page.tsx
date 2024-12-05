import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';

import React from 'react';

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
