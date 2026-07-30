import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Download, Code2, Briefcase, Send, ArrowRight, Copy, Check } from 'lucide-react';
import { personal, social } from '../data/portfolio';
import Toast from '../components/Toast';

const IC = { Code2, Briefcase, Mail };
const smeta = {
  Code2:    { label: 'GitHub',   desc: 'Open source & projects', color: '#818CF8' },
  Briefcase:{ label: 'LinkedIn', desc: 'Professional network',    color: '#0A66C2' },
  Mail:     { label: 'Email',    desc: 'Direct message',          color: '#10B981' },
};

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.07 });
  const [toastMsg, setToastMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setToastMsg('Email address copied to clipboard!');
    setTimeout(() => {
      setCopied(false);
      setToastMsg('');
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(99,102,241,0.07) 0%,transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} style={{ marginBottom: '3rem' }}>
          <p className="sec-num">08 — Contact</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.035em', color: '#EEEEF2', lineHeight: 1.18 }}>
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg,#818CF8,#C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>work together</span>
          </h2>
          <p style={{ color: '#888896', marginTop: '0.75rem', maxWidth: 480, fontSize: '0.9375rem', lineHeight: 1.75 }}>
            Open to full-time roles, internships, and freelance projects. Have an idea? Let's talk.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* CTA card */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1, duration: 0.55 }}>
            <div style={{ padding: 'clamp(1.25rem, 5vw, 2rem)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(16px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#6366F1,#A78BFA,#06B6D4)' }} />
              
              <div style={{ marginBottom: '1.25rem', marginTop: '0.375rem' }}>
                <div className="font-display" style={{ color: '#EEEEF2', fontWeight: 700, fontSize: '1.125rem', marginBottom: 4 }}>Get in touch</div>
                <div style={{ color: '#44444F', fontSize: '0.8rem' }}>Usually responds within 24 hours</div>
              </div>

              <p style={{ color: '#888896', fontSize: '0.875rem', lineHeight: 1.78, marginBottom: '1.5rem' }}>
                Looking for a full-stack developer who cares about clean code and great user experiences? I'd love to hear from you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <motion.a href={`mailto:${personal.email}`} className="btn btn-fill"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  style={{ justifyContent: 'center', borderRadius: 12 }}>
                  <Send size={17} /> Send Email
                </motion.a>
                <motion.a href={personal.resume} download className="btn btn-outline"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  style={{ justifyContent: 'center', borderRadius: 12 }}>
                  <Download size={17} /> Download Resume
                </motion.a>
              </div>

              {/* Copyable Email Box */}
              <div
                onClick={copyEmail}
                style={{
                  marginTop: '1.25rem', padding: '0.75rem 1rem', borderRadius: 10,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Mail size={14} color="#6366F1" />
                  <span style={{ color: '#eeeef2', fontSize: '0.85rem', fontFamily: 'monospace' }}>{personal.email}</span>
                </div>
                <div style={{ color: copied ? '#10b981' : '#888896', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem' }}>
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.55 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <p style={{ color: '#44444F', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Find me on</p>
            {social.map(({ name, href, icon }, i) => {
              const Icon = IC[icon] || Mail;
              const m = smeta[icon] || smeta.Mail;
              return (
                <motion.a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
                  whileHover={{ x: 4 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '1rem 1.125rem', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(12px)', textDecoration: 'none', transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${m.color}35`; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4),0 0 20px ${m.color}12`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${m.color}12`, border: `1px solid ${m.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={m.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#EEEEF2', fontWeight: 600, fontSize: '0.875rem' }}>{m.label}</div>
                    <div style={{ color: '#44444F', fontSize: '0.75rem', marginTop: 1 }}>{m.desc}</div>
                  </div>
                  <ArrowRight size={14} color="#44444F" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <Toast message={toastMsg} onClose={() => setToastMsg('')} />
    </section>
  );
}
