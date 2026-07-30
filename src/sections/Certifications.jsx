import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Database, Code2, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';

const IC = { Cloud, Database, Code2, Brain:Code2 };

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.05 });
  return (
    <section id="certifications" ref={ref} className="section-padding">
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55 }} style={{ marginBottom:'3rem' }}>
          <p className="sec-num">05 — Certifications</p>
          <h2 className="font-display" style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:700, letterSpacing:'-0.035em', color:'#EEEEF2', lineHeight:1.18 }}>
            Credentials &{' '}
            <span style={{ background:'linear-gradient(135deg,#818CF8,#C084FC)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>learning</span>
          </h2>
        </motion.div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:'0.875rem' }}>
          {certifications.map((c,i)=>{
            const Icon = IC[c.icon]||Code2;
            return (
              <motion.div key={c.title}
                initial={{ opacity:0,y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.07,duration:0.5 }}
                whileHover={{ y:-3,scale:1.01 }}
                style={{ padding:'1.125rem 1.25rem',borderRadius:14,background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.07)',backdropFilter:'blur(12px)',display:'flex',alignItems:'center',gap:'1rem',transition:'all 0.22s cubic-bezier(0.4,0,0.2,1)' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=`${c.color}35`;e.currentTarget.style.boxShadow=`0 8px 24px rgba(0,0,0,0.4),0 0 20px ${c.color}12`;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.07)';e.currentTarget.style.boxShadow='none';}}>
                <div style={{ width:44,height:44,borderRadius:11,background:`${c.color}12`,border:`1px solid ${c.color}25`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                  <Icon size={20} color={c.color}/>
                </div>
                <div style={{ flex:1,minWidth:0 }}>
                  <div style={{ color:'#EEEEF2',fontWeight:600,fontSize:'0.875rem',lineHeight:1.35,marginBottom:2 }}>{c.title}</div>
                  <div style={{ color:'#44444F',fontSize:'0.72rem' }}>{c.issuer} · {c.year}</div>
                </div>
                {c.credential&&<a href={c.credential} target="_blank" rel="noopener noreferrer"
                  style={{ color:'#44444F',flexShrink:0,transition:'color 0.15s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='#818CF8'}
                  onMouseLeave={e=>e.currentTarget.style.color='#44444F'}>
                  <ExternalLink size={14}/>
                </a>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
