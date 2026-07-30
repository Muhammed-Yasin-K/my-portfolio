import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen } from 'lucide-react';
import { education } from '../data/portfolio';

const IC = { GraduationCap, BookOpen };

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.07 });
  return (
    <section id="education" ref={ref} className="section-padding">
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }} style={{ marginBottom:'3rem' }}>
          <p className="sec-num">07 — Education</p>
          <h2 className="font-display" style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:700, letterSpacing:'-0.035em', color:'#EEEEF2', lineHeight:1.18 }}>
            Academic{' '}
            <span style={{ background:'linear-gradient(135deg,#818CF8,#C084FC)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>background</span>
          </h2>
        </motion.div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: 22, top: 44, bottom: 44, width: 1, background: 'linear-gradient(180deg,rgba(99,102,241,0.5),rgba(99,102,241,0.1))', pointerEvents: 'none' }}/>

          {education.map((edu,i)=>{
            const Icon = IC[edu.icon]||GraduationCap;
            const accent = i===0?'#818CF8':'#10B981';
            return (
              <motion.div key={edu.degree}
                initial={{ opacity:0,y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.15,duration:0.55 }}
                style={{ display:'flex', gap:'1.25rem', alignItems:'flex-start' }}>
                <motion.div
                  initial={{ scale:0 }} animate={inView?{scale:1}:{}} transition={{ delay:i*0.15+0.2,type:'spring',stiffness:280,damping:20 }}
                  style={{ width:44,height:44,borderRadius:12,background:`${accent}12`,border:`1px solid ${accent}30`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,zIndex:1 }}>
                  <Icon size={20} color={accent}/>
                </motion.div>
                <motion.div whileHover={{ x:4 }}
                  style={{ flex:1,padding:'1.25rem 1.5rem',borderRadius:16,background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.07)',backdropFilter:'blur(12px)',transition:'all 0.22s cubic-bezier(0.4,0,0.2,1)' }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=`${accent}35`;e.currentTarget.style.boxShadow=`0 6px 24px rgba(0,0,0,0.4),0 0 20px ${accent}10`;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.07)';e.currentTarget.style.boxShadow='none';}}>
                  <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:10 }}>
                    <div>
                      <h3 className="font-display" style={{ color:'#EEEEF2',fontWeight:700,fontSize:'0.9375rem',letterSpacing:'-0.02em',marginBottom:3,lineHeight:1.3 }}>{edu.degree}</h3>
                      <p style={{ color:'#888896',fontSize:'0.875rem' }}>{edu.school}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: '#44444F', fontSize: '0.75rem' }}>{edu.period}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
