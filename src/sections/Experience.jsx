import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.08 });
  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }} style={{ marginBottom:'3rem' }}>
          <p className="sec-num">03 — Experience</p>
          <h2 className="font-display" style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:700, letterSpacing:'-0.035em', color:'#EEEEF2', lineHeight:1.18 }}>
            Professional{' '}
            <span style={{ background:'linear-gradient(135deg,#818CF8,#C084FC)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>journey</span>
          </h2>
        </motion.div>

        {experience.map((exp, i) => (
          <motion.div key={exp.company}
            initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.1+0.1, duration:0.55 }}
            whileHover={{ y:-4 }}
            style={{ padding:'2rem 2.5rem', borderRadius:20, background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', backdropFilter:'blur(16px)', position:'relative', overflow:'hidden', transition:'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=`${exp.color}40`;e.currentTarget.style.boxShadow=`0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${exp.color}12`;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.07)';e.currentTarget.style.boxShadow='none';}}>
            {/* Left accent bar */}
            <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:`linear-gradient(180deg,${exp.color},${exp.color}30)`, borderRadius:'20px 0 0 20px' }} />
            {/* Ambient glow */}
            <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:`${exp.color}08`, filter:'blur(40px)', pointerEvents:'none' }} />

            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:16, marginBottom:'1.25rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                <div style={{ width:50, height:50, borderRadius:14, background:`${exp.color}12`, border:`1px solid ${exp.color}25`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <Briefcase size={22} color={exp.color} />
                </div>
                <div>
                  <h3 className="font-display" style={{ color:'#EEEEF2', fontWeight:700, fontSize:'1.25rem', letterSpacing:'-0.025em', marginBottom:3 }}>{exp.role}</h3>
                  <p style={{ color:'#888896', fontWeight:500, fontSize:'0.9375rem' }}>{exp.company}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                <span style={{ padding: '0.25rem 0.8rem', borderRadius: 9999, background: `${exp.color}18`, border: `1px solid ${exp.color}35`, color: exp.color, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                  6 Months Internship
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#888896', fontSize: '0.8125rem' }}>
                  <Calendar size={13} /> {exp.period}
                </div>
              </div>
            </div>

            <p style={{ color:'#888896', fontSize:'0.9375rem', lineHeight:1.78, marginBottom:'1.25rem' }}>{exp.description}</p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
              {exp.skills.map(s=>(
                <span key={s} style={{ padding:'0.25rem 0.7rem', borderRadius:8, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)', color:'#888896', fontSize:'0.75rem', fontWeight:500 }}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
