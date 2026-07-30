import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap, Briefcase, Mail } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.1, 
        delayChildren: shouldReduceMotion ? 0 : 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const gradientTextVariants = {
    hidden: { opacity: 0, backgroundPosition: '200% center' },
    visible: { 
      opacity: 1, 
      backgroundPosition: '0% center', 
      transition: { duration: 1.2, delay: 0.3, ease: 'easeOut' } 
    }
  };

  return (
    <section id="about" ref={ref} className="section-padding" style={{ position: 'relative', paddingBottom: '2rem' }}>
      
      {/* Subtle background glow for heading */}
      <div style={{ position: 'absolute', top: '5%', left: '5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.03) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem', alignItems: 'flex-start' }}>
          
          {/* Left Column: Main Content */}
          <div style={{ flex: '1 1 min(100%, 500px)', maxWidth: 800 }}>
            <motion.p variants={itemVariants} className="sec-num" style={{ marginBottom: '2.5rem' }}>01 — ABOUT</motion.p>
            
            <motion.h2 variants={itemVariants} className="font-display" 
              style={{ fontSize: 'clamp(3rem, 6vw, 5.25rem)', fontWeight: 800, letterSpacing: '-0.035em', color: '#FAFAFA', lineHeight: 1.1, marginBottom: '3rem' }}>
              Turning ideas into <br />
              <motion.span variants={gradientTextVariants} style={{ 
                  background: 'linear-gradient(135deg, #E9D5FF 0%, #A855F7 100%)', 
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text',
                  display: 'inline-block',
                  paddingRight: '0.1em'
                }}>
                intelligent software.
              </motion.span>
            </motion.h2>

            <motion.div variants={itemVariants} style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#A1A1AA', maxWidth: 600, marginBottom: '4rem' }}>
              I'm an MCA graduate passionate about building scalable backend systems and AI-powered applications. I specialize in developing modern web applications, REST APIs, and intelligent software using Python, FastAPI, React, and machine learning technologies. My focus is creating clean, efficient, and maintainable solutions that solve real-world problems.
            </motion.div>
          </div>

          {/* Right Column: Context & Metadata */}
          <div style={{ flex: '1 1 280px', position: 'sticky', top: '120px', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <motion.div variants={itemVariants} whileHover={shouldReduceMotion ? {} : { y: -2, filter: 'brightness(1.1)' }} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 0 20px rgba(168,85,247,0.06)', transition: 'all 0.3s' }}>
                  <MapPin size={18} color="#C084FC" />
                </span>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', color: '#71717A', marginBottom: 4 }}>LOCATION</div>
                  <div style={{ color: '#E4E4E7', fontSize: '0.95rem', fontWeight: 500 }}>Kannur, Kerala</div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={shouldReduceMotion ? {} : { y: -2, filter: 'brightness(1.1)' }} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 0 20px rgba(168,85,247,0.06)', transition: 'all 0.3s' }}>
                  <GraduationCap size={18} color="#C084FC" />
                </span>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', color: '#71717A', marginBottom: 4 }}>EDUCATION</div>
                  <div style={{ color: '#E4E4E7', fontSize: '0.95rem', fontWeight: 500 }}>MCA Graduate</div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={shouldReduceMotion ? {} : { y: -2, filter: 'brightness(1.1)' }} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 0 20px rgba(168,85,247,0.06)', transition: 'all 0.3s' }}>
                  <Briefcase size={18} color="#C084FC" />
                </span>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', color: '#71717A', marginBottom: 4 }}>STATUS</div>
                  <div style={{ color: '#E4E4E7', fontSize: '0.95rem', fontWeight: 500 }}>Available for Full-Time</div>
                </div>
              </motion.div>

              <motion.a href="mailto:muhammedyasin786@gmail.com" variants={itemVariants} 
                whileHover={shouldReduceMotion ? {} : { y: -2, filter: 'brightness(1.1)' }}
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', textDecoration: 'none' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 0 20px rgba(168,85,247,0.06)', transition: 'all 0.3s' }}>
                  <Mail size={18} color="#C084FC" />
                </span>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', color: '#71717A', marginBottom: 4 }}>EMAIL</div>
                  <div style={{ color: '#E4E4E7', fontSize: '0.95rem', fontWeight: 500 }}>muhammedyasin786@gmail.com</div>
                </div>
              </motion.a>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
