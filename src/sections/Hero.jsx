import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, Code2, Briefcase, Mail } from 'lucide-react';
import { personal, social } from '../data/portfolio';

const FU = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const STATS_BAR = [
  { num: '#01', label: 'Full-Stack Web Systems' },
  { num: '#02', label: 'Machine Learning & AI' },
  { num: '#03', label: 'REST API Architecture' },
  { num: '#04', label: 'Database Engineering' },
];

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 30, damping: 18 });
  const sy = useSpring(my, { stiffness: 30, damping: 18 });
  const ox = useTransform(sx, v => `${v}px`);
  const oy = useTransform(sy, v => `${v}px`);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect(); if (!r) return;
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 35);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 35);
      }}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#07060a',
        paddingTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* ── Ambient Crimson & Purple Cinematic Backlighting ── */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 550, borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.22) 0%, rgba(225, 29, 72, 0.15) 45%, transparent 70%)',
        filter: 'blur(90px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '20%',
        width: 450, height: 450, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <motion.div style={{
        position: 'absolute', width: 650, height: 650, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(225, 29, 72, 0.08) 0%, transparent 65%)',
        x: ox, y: oy, pointerEvents: 'none', top: '40%', left: '50%', marginTop: -325, marginLeft: -325,
      }} />

      {/* Main Hero Container */}
      <div className="wrap" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '4rem', // Increased gap for less crowding
          alignItems: 'center',
          width: '100%',
        }} className="cinematic-hero-grid">

          {/* ── LEFT COLUMN: Giant Headline ── */}
          <div style={{ zIndex: 2 }}>
            <motion.div custom={0} variants={FU} initial="hidden" animate="visible" style={{ marginBottom: '0.875rem' }}>
              <span style={{
                color: '#f97316', fontWeight: 600, fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
                letterSpacing: '0.02em',
              }}>
                Hey, I'm Yasin
              </span>
            </motion.div>

            <motion.h1
              custom={0.12} variants={FU} initial="hidden" animate="visible"
              className="font-display"
              style={{
                fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                color: '#ffffff',
                marginBottom: '1.25rem',
              }}
            >
              Software<br />
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Developer
              </span>
            </motion.h1>

            {/* Quick Location & Availability */}
            <motion.div custom={0.22} variants={FU} initial="hidden" animate="visible"
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px rgba(16,185,129,0.8)' }} />
              <span style={{ color: '#a1a1aa', fontSize: '0.875rem', fontWeight: 500 }}>
                Kannur, Kerala · Open to opportunities
              </span>
            </motion.div>
          </div>

          {/* ── CENTER COLUMN: Cinematic Portrait ── */}
          <motion.div
            custom={0.25} variants={FU} initial="hidden" animate="visible"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Ambient Lighting Glow Behind Image */}
            <div style={{
              position: 'absolute', inset: -15, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(225,29,72,0.18) 0%, rgba(147,51,234,0.10) 50%, transparent 75%)',
              filter: 'blur(25px)', zIndex: 0,
            }} />

            {/* Portrait Frame */}
            <div style={{
              position: 'relative', zIndex: 1,
              width: 'clamp(220px, 65vw, 380px)', // Improved mobile scaling
              aspectRatio: '3/4',
              borderRadius: 24,
              overflow: 'hidden',
              background: 'radial-gradient(circle at 50% 60%, rgba(139,92,246,0.2) 0%, rgba(7,6,10,1) 75%)', // Subtle inner depth
              border: '1px solid rgba(255,255,255,0.20)', // Increased border opacity
              boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(147,51,234,0.12)', // Softer glow
            }}>
              <img
                src="/avatar_nobg.png"
                alt="Muhammed Yasin K"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'drop-shadow(0 -2px 8px rgba(255,255,255,0.05))', // Extremely faint, feathered rim light
                  transform: 'translateY(22px) scale(1.03)', // Shifted down further for centered framing
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(7,6,10,0.7) 100%)',
                pointerEvents: 'none',
              }} />
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Statement & Bio ── */}
          <div style={{ zIndex: 2 }}>
            <motion.h2
              custom={0.2} variants={FU} initial="hidden" animate="visible"
              className="font-display"
              style={{
                fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              Great code should feel{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f43f5e 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                effortless.
              </span>
            </motion.h2>

            <motion.p
              custom={0.32} variants={FU} initial="hidden" animate="visible"
              style={{
                color: '#a1a1aa',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                lineHeight: 1.8,
                maxWidth: 420,
                marginBottom: '2rem',
              }}
            >
              From scalable full-stack web applications to predictive machine learning models, I build efficient solutions that solve real-world problems.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={0.42} variants={FU} initial="hidden" animate="visible"
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-fill" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                style={{ fontSize: '0.9375rem', padding: '0.8rem 1.6rem', borderRadius: 9999, background: '#ffffff', color: '#07060a', fontWeight: 600 }}>
                View Projects <ArrowRight size={16} />
              </motion.button>
              <motion.a href={personal.resume} download className="btn btn-outline"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                style={{ fontSize: '0.9375rem', padding: '0.8rem 1.6rem', borderRadius: 9999, borderColor: 'rgba(255,255,255,0.2)' }}>
                <Download size={16} /> Resume
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM NUMBERED TICKER STRIP (#01, #02, #03, #04) ── */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(7,6,10,0.85)',
        backdropFilter: 'blur(16px)',
        padding: '1.25rem 0',
        marginTop: 'clamp(1.5rem, 5vw, 3rem)',
        position: 'relative', zIndex: 3,
      }}>
        <div className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
          }}>
            {STATS_BAR.map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: '#f97316', fontWeight: 700, fontSize: '0.875rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.num}
                </span>
                <span style={{ color: '#eeeeef', fontSize: '0.85rem', fontWeight: 500 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .cinematic-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
          }
          .cinematic-hero-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
