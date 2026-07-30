import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Terminal, GraduationCap, ArrowRight, X, Download } from 'lucide-react';
import { achievements } from '../data/portfolio';

const IC = { Trophy, Terminal, GraduationCap };

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.07 });
  const [selectedProof, setSelectedProof] = useState(null);

  // Helper to trigger download
  const handleDownload = (e, url) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'certificate';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const featured = achievements[0];
  const rest = achievements.slice(1);

  const FeaturedIcon = IC[featured.icon] || Trophy;

  return (
    <section id="achievements" ref={ref} className="section-padding">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} style={{ marginBottom: '4rem' }}>
          <p className="sec-num">06 — ACHIEVEMENTS</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, letterSpacing: '-0.035em', color: '#EEEEF2', lineHeight: 1.18 }}>
            Recognition &{' '}
            <span style={{ background: 'linear-gradient(135deg,#818CF8,#C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Honours</span>
          </h2>
        </motion.div>

        <div className="achievements-grid">
          {/* FEATURED CARD */}
          <motion.div 
            className="achievement-card featured-card"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            style={{ 
              display: 'flex', flexDirection: 'column', padding: 'clamp(1.5rem, 5vw, 2.5rem)', borderRadius: 24, 
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', 
              position: 'relative', overflow: 'hidden', transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)' 
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${featured.color}40`; e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4),0 0 40px ${featured.color}15`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at top right, ${featured.color}10 0%, transparent 60%)`, pointerEvents: 'none' }} />
            
            <div style={{ width: 56, height: 56, borderRadius: 16, background: `${featured.color}15`, border: `1px solid ${featured.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: `0 0 20px ${featured.color}20` }}>
              <FeaturedIcon size={28} color={featured.color} />
            </div>

            <h3 className="font-display" style={{ color: '#EEEEF2', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.125rem)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '0.5rem' }}>{featured.title}</h3>
            <p style={{ color: featured.color, fontSize: '1.125rem', fontWeight: 500, marginBottom: '1.5rem' }}>{featured.subtitle}</p>
            
            {(featured.institution || featured.period) && (
              <div style={{ marginBottom: '1.25rem', color: '#A0A0AB', fontSize: '0.9375rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#EEEEF2' }}>{featured.institution}</span>
                {featured.period && <span>• {featured.period}</span>}
              </div>
            )}
            
            <p style={{ color: '#888896', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>{featured.description}</p>
            
            {featured.metadata && featured.metadata.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', flex: 1 }}>
                {featured.metadata.map((meta, i) => (
                  <div key={i} style={{ color: '#A0A0AB', fontSize: '0.875rem', lineHeight: 1.5, paddingLeft: '1rem', borderLeft: `2px solid ${featured.color}40` }}>
                    {meta.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br/></React.Fragment>)}
                  </div>
                ))}
              </div>
            )}

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ color: '#52525B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{featured.footer}</span>
              
              {featured.proof && (
                featured.proof.toLowerCase().endsWith('.pdf') ? (
                  <a href={featured.proof} target="_blank" rel="noopener noreferrer" className="proof-btn" style={{ color: featured.color }}>
                    View Certificate <ArrowRight size={14} />
                  </a>
                ) : (
                  <button onClick={() => setSelectedProof(featured)} className="proof-btn" style={{ color: featured.color }}>
                    View Certificate <ArrowRight size={14} />
                  </button>
                )
              )}
            </div>
          </motion.div>

          {/* SECONDARY CARDS */}
          {rest.map((a, i) => {
            const Icon = IC[a.icon] || Trophy;
            return (
              <motion.div key={a.title} className="achievement-card secondary-card"
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                whileHover={{ y: -6 }}
                style={{ 
                  display: 'flex', flexDirection: 'column', padding: 'clamp(1.25rem, 4vw, 1.75rem)', borderRadius: 24, 
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', 
                  position: 'relative', overflow: 'hidden', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' 
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${a.color}30`; e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3),0 0 30px ${a.color}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at top right, ${a.color}08 0%, transparent 70%)`, pointerEvents: 'none' }} />
                
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${a.color}12`, border: `1px solid ${a.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Icon size={20} color={a.color} />
                </div>
                
                <h3 className="font-display" style={{ color: '#EEEEF2', fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.02em', lineHeight: 1.35, marginBottom: '0.25rem' }}>{a.title}</h3>
                <p style={{ color: a.color, fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' }}>{a.subtitle}</p>
                
                {a.institution && (
                  <p style={{ color: '#EEEEF2', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>{a.institution}</p>
                )}
                
                <p style={{ color: '#888896', fontSize: '0.9375rem', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{a.description}</p>
                
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#52525B', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{a.footer}</span>
                  
                  {a.proof && (
                    a.proof.toLowerCase().endsWith('.pdf') ? (
                      <a href={a.proof} target="_blank" rel="noopener noreferrer" className="proof-btn" style={{ color: a.color }}>
                        View Details <ArrowRight size={14} />
                      </a>
                    ) : (
                      <button onClick={() => setSelectedProof(a)} className="proof-btn" style={{ color: a.color }}>
                        View Details <ArrowRight size={14} />
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* NEW DETAILED CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProof(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <motion.div 
              className="modal-container"
              initial={{ scale: 0.96, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0, y: 20 }} 
              onClick={e => e.stopPropagation()} 
              style={{ position: 'relative', maxWidth: '1000px', width: '100%', maxHeight: '90vh', background: '#09090b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, display: 'flex', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
            >
              {/* Image Side */}
              <div style={{ flex: '1.5', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                <img src={selectedProof.proof} alt={selectedProof.title} style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 8 }} />
              </div>

              {/* Details Side */}
              <div style={{ flex: '1', padding: '3rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${selectedProof.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {(() => { const MI = IC[selectedProof.icon] || Trophy; return <MI size={20} color={selectedProof.color} />; })()}
                  </div>
                  <span style={{ color: selectedProof.color, fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{selectedProof.subtitle}</span>
                </div>
                
                <h3 className="font-display" style={{ color: '#EEEEF2', fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>{selectedProof.title}</h3>
                
                {selectedProof.institution && (
                  <p style={{ color: '#EEEEF2', fontWeight: 600, marginBottom: '1.5rem' }}>{selectedProof.institution}</p>
                )}
                
                <p style={{ color: '#A0A0AB', lineHeight: 1.7, marginBottom: '2rem' }}>{selectedProof.description}</p>
                
                {selectedProof.metadata && selectedProof.metadata.length > 0 && (
                  <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {selectedProof.metadata.map((meta, i) => (
                      <div key={i} style={{ color: '#888896', fontSize: '0.875rem', paddingLeft: '1rem', borderLeft: `2px solid ${selectedProof.color}40` }}>
                        {meta.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br/></React.Fragment>)}
                      </div>
                    ))}
                  </div>
                )}
                
                <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                  <button onClick={(e) => handleDownload(e, selectedProof.proof)} className="btn btn-fill" style={{ flex: 1, background: selectedProof.color, padding: '0.75rem', borderRadius: 12, justifyContent: 'center' }}>
                    <Download size={16} /> Download
                  </button>
                  <button onClick={() => setSelectedProof(null)} className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: 12 }}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .proof-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          background: transparent;
          border: none;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          padding: 0;
        }
        .proof-btn::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        .proof-btn:hover::after {
          width: 100%;
        }
        
        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr 1fr;
          }
          .featured-card {
            grid-column: 1 / -1;
          }
        }
        @media (min-width: 1024px) {
          .achievements-grid {
            grid-template-columns: 1.6fr 1fr;
          }
          .featured-card {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
          }
          .secondary-card {
            grid-column: 2;
          }
        }
        @media (max-width: 768px) {
          .modal-container {
            flex-direction: column !important;
            max-height: 95vh !important;
            overflow-y: auto !important;
          }
          .modal-container > div {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
