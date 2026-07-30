import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../utils/animations';

/**
 * SectionWrapper — provides scroll-triggered reveal + consistent layout for every section.
 */
export default function SectionWrapper({ id, className = '', children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id={id} ref={ref} className={`section-padding ${className}`}>
      <motion.div
        className="container-custom"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </section>
  );
}
