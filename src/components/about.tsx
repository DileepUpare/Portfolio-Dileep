'use client';

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <Tilt
        className="tilt-container w-full max-w-2xl p-6"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="lightblue"
        glarePosition="bottom"
      >
        <div className="rounded-lg border border-white/10 p-6 leading-7 shadow-lg backdrop-blur-lg">
          <p className="mb-4 text-center">
            Hi, I'm Dileep Upare, a passionate full-stack developer skilled in
            React, Next.js, TypeScript, Node.js, and Tailwind CSS. With hands-on
            experience in Prisma and MongoDB, I specialize in building
            efficient, scalable, and visually appealing solutions.
          </p>
          <p className="mb-4 text-center">
            I also have a strong foundation in machine learning and research,
            with my work presented at international conferences on topics like
            traffic optimization and deep learning-based image segmentation.
          </p>
          <p className="text-center">
            I'm always looking for opportunities to contribute, grow, and
            collaborate on impactful projects. Let's connect!
          </p>
        </div>
      </Tilt>
      <Skills />
    </motion.section>
  );
};
