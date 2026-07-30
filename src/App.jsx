import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import Navbar              from './components/Navbar';
import Footer              from './components/Footer';
import Hero                from './sections/Hero';
import About               from './sections/About';
import Skills              from './sections/Skills';

import Experience          from './sections/Experience';
import Projects            from './sections/Projects';
import Certifications      from './sections/Certifications';
import Achievements        from './sections/Achievements';
import Education           from './sections/Education';
import Contact             from './sections/Contact';

function Div() {
  return <div className="wrap"><hr className="divider" /></div>;
}

export default function App() {
  useLenis();

  // Cursor spotlight effect
  useEffect(() => {
    const h = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      style={{ background: '#07070B', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Hero />
        <Div /><About />
        <Div /><Skills />

        <Div /><Experience />
        <Div /><Projects />
        <Div /><Certifications />
        <Div /><Achievements />
        <Div /><Education />
        <Div /><Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
