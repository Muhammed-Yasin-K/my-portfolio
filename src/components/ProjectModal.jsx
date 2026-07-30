import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, ExternalLink, Cpu, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(5, 5, 8, 0.85)',
            backdropFilter: 'blur(16px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            position: 'relative', zIndex: 1,
            maxWidth: 720, width: '100%',
            maxHeight: '90vh', overflowY: 'auto',
            background: '#0d0d13',
            border: `1.5px solid ${project.accent}45`,
            borderRadius: 24,
            boxShadow: `0 32px 80px rgba(0,0,0,0.8), 0 0 60px ${project.accent}20`,
            padding: '2rem',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute', top: 20, right: 20,
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}>
            <X size={18} />
          </button>

          {/* Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '0.875rem' }}>
            <span style={{
              padding: '0.25rem 0.75rem', borderRadius: 9999,
              background: `${project.accent}20`, border: `1px solid ${project.accent}40`,
              color: project.accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em',
            }}>
              {project.badge} Architecture Breakdown
            </span>
          </div>

          <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 700, color: '#eeeef2', marginBottom: 4 }}>
            {project.title}
          </h2>
          <p style={{ color: project.accent, fontSize: '0.9375rem', fontWeight: 500, marginBottom: '1.25rem' }}>
            {project.subtitle}
          </p>

          <p style={{ color: '#888896', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.875rem', color: '#eeeef2', fontWeight: 600, fontSize: '0.9375rem' }}>
              <Layers size={16} color={project.accent} /> Key System Capabilities
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {(project.architecture || []).map((feat, i) => (
                <div key={i} style={{
                  padding: '0.75rem 1rem', borderRadius: 12,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', gap: 10, color: '#a1a1aa', fontSize: '0.8125rem',
                }}>
                  <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ color: '#52525b', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.625rem' }}>
              Technologies & Libraries
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  padding: '0.35rem 0.85rem', borderRadius: 8,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#eeeef2', fontSize: '0.8125rem', fontWeight: 500,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-fill" style={{ flex: 1, maxWidth: 300, justifyContent: 'center', background: '#6366f1', border: 'none', color: '#fff', boxShadow: '0 4px 14px rgba(99,102,241,0.45)' }}>
              <Code2 size={16} /> View Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
