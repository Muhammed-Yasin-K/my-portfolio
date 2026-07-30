import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, personal } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cb = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', cb, { passive: true });
    return () => window.removeEventListener('scroll', cb);
  }, []);

  const go = (href) => {
    setOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(7,7,11,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Style Option: Gradient Highlight Name Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.025em' }}>
              <span style={{ color: '#EEEEF2' }}>Muhammed </span>
              <span style={{
                background: 'linear-gradient(135deg, #818CF8 0%, #C084FC 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}>
                Yasin
              </span>
              <span style={{ color: '#EEEEF2' }}> K.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-nav">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.45rem 0.95rem', borderRadius: 8,
                  color: '#a1a1aa', fontSize: '0.875rem', fontWeight: 500,
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#EEEEF2'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#a1a1aa'; e.currentTarget.style.background = 'none'; }}>
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <motion.a
              href={`mailto:${personal.email}`}
              className="btn btn-fill hire-btn"
              style={{ padding: '0.45rem 1.125rem', fontSize: '0.875rem', borderRadius: 9 }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              Hire Me <ArrowRight size={14} />
            </motion.a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              className="mobile-menu-btn"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '0.4rem', cursor: 'pointer', color: '#EEEEF2', display: 'flex', alignItems: 'center' }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mob"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            style={{ position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99, background: 'rgba(7,7,11,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1rem 1.5rem 1.5rem' }}>
            {navLinks.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                onClick={() => go(l.href)}
                style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '0.75rem 0', color: '#a1a1aa', fontSize: '1rem', fontWeight: 500, fontFamily: 'Inter, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                {l.label}
              </motion.button>
            ))}
            <a href={`mailto:${personal.email}`} className="btn btn-fill" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center', borderRadius: 10, display: 'flex' }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hire-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
