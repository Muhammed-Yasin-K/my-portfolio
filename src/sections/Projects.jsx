import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { projects } from '../data/portfolio';
import ProjectModal from '../components/ProjectModal';

const bgMap = {
  'from-indigo': 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(167,139,250,0.08))',
  'from-purple': 'linear-gradient(135deg,rgba(139,92,246,0.15),rgba(6,182,212,0.08))',
  'from-cyan':   'linear-gradient(135deg,rgba(6,182,212,0.15),rgba(16,185,129,0.08))',
};

function ProjectCard({ project, index, large, onSelect }) {
  const [h, setH] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      onHoverStart={() => setH(true)}
      onHoverEnd={() => setH(false)}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(project)}
      style={{
        borderRadius: 20, overflow: 'hidden', cursor: 'pointer',
        border: `1px solid ${h ? project.accent + '45' : 'rgba(255,255,255,0.07)'}`,
        background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(12px)',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: h ? `0 32px 70px rgba(0,0,0,0.6), 0 0 50px ${project.accent}18` : '0 4px 20px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: large ? 'var(--card-dir, row)' : 'column',
      }}
      className={large ? 'featured-project-card' : ''}
    >
      {/* Preview Header */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: bgMap[project.gradient] || bgMap['from-indigo'],
        flexShrink: 0,
        ...(large ? { width: 'var(--preview-w, 50%)', minHeight: 280 } : { height: 190 }),
      }} className={large ? 'featured-preview' : ''}>
        {/* Browser Top Bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 30, background: 'rgba(7,7,11,0.65)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 5 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.75 }} />)}
          <div style={{ flex: 1, textAlign: 'center', color: '#52525b', fontSize: '0.65rem', fontFamily: 'monospace' }}>
            {project.title.toLowerCase()}.yasin.dev
          </div>
        </div>

        {/* Background Grid Pattern or Image */}
        {project.image ? (
          <div style={{ position: 'absolute', inset: 0, marginTop: 30 }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        ) : (
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle,${project.accent}30 1px,transparent 1px)`, backgroundSize: '24px 24px', marginTop: 30 }} />
        )}

        {/* Center Title Badge (Only show if no image) */}
        {!project.image && (
          <div style={{ position: 'absolute', inset: 0, marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '1rem' }}>
            <span style={{ padding: '0.25rem 0.75rem', borderRadius: 9999, background: `${project.accent}20`, border: `1px solid ${project.accent}35`, color: project.accent, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              {project.badge}
            </span>
            <div className="font-display" style={{ fontSize: large ? '1.75rem' : '1.15rem', fontWeight: 700, color: '#EEEEF2', letterSpacing: '-0.03em', textAlign: 'center' }}>
              {project.title}
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div animate={{ opacity: h ? 1 : 0 }} style={{ position: 'absolute', inset: 0, background: 'rgba(7,7,11,0.78)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: 30 }}>
          <button
            onClick={(e) => { e.stopPropagation(); onSelect(project); }}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0.5rem 1rem', borderRadius: 9, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.16)', color: '#EEEEF2', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>
            <Layers size={14} /> System Details
          </button>
          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0.5rem 1rem', borderRadius: 9, background: '#6366f1', color: '#fff', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 14px rgba(99,102,241,0.45)' }}>
            <Code2 size={14} /> View Code
          </a>
        </motion.div>
      </div>

      {/* Content Body */}
      <div style={{ padding: large ? '2rem' : '1.375rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 3, height: 18, borderRadius: 4, background: project.accent, flexShrink: 0 }} />
            <h3 className="font-display" style={{ color: '#EEEEF2', fontWeight: 700, fontSize: large ? '1.375rem' : '1.0625rem', letterSpacing: '-0.025em' }}>
              {project.title}
            </h3>
          </div>
          <p style={{ color: project.accent, fontSize: '0.8rem', fontWeight: 500 }}>{project.subtitle}</p>
        </div>

        <p style={{ color: '#888896', fontSize: '0.875rem', lineHeight: 1.78, flex: 1 }}>{project.description}</p>

        {/* Tech Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {project.tech.map((t) => (
            <span key={t} style={{ padding: '0.2rem 0.6rem', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#888896', fontSize: '0.72rem', fontWeight: 500 }}>
              {t}
            </span>
          ))}
        </div>

        {/* Card Actions */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.25rem' }}>
          <a
            href={project.github} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn btn-fill"
            style={{ flex: 1, maxWidth: 300, justifyContent: 'center', padding: '0.5rem', borderRadius: 9, fontSize: '0.8rem', background: '#6366f1', border: 'none', color: '#fff', boxShadow: '0 4px 14px rgba(99,102,241,0.45)' }}>
            <Code2 size={13} /> View Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.04 });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
          <p className="sec-num">04 — Projects</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.035em', color: '#EEEEF2', lineHeight: 1.18 }}>
            Things I've{' '}
            <span style={{ background: 'linear-gradient(135deg,#818CF8,#C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>built</span>
          </h2>
          <p style={{ color: '#888896', marginTop: '0.5rem', maxWidth: 520, fontSize: '0.9375rem' }}>
            Click on any project to view its system architecture and full technical breakdown.
          </p>
        </motion.div>

        {/* Grid for All Projects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} large={false} onSelect={setSelectedProject} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} style={{ textAlign: 'center' }}>
          <a href="https://github.com/Muhammed-Yasin-K" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex' }}>
            All Projects on GitHub <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Project Modal Inspector */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        .featured-project-card {
          --card-dir: row;
        }
        .featured-preview {
          --preview-w: 50%;
        }
        @media (max-width: 768px) {
          .featured-project-card {
            flex-direction: column !important;
          }
          .featured-preview {
            width: 100% !important;
            min-height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
