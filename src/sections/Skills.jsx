import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';

// All skills flat for the marquee
const allSkills = skills.flatMap(s => s.items);
// Duplicate for seamless loop
const marqueeItems = [...allSkills, ...allSkills];

const FU = { hidden:{opacity:0,y:20}, visible:(d=0)=>({opacity:1,y:0,transition:{duration:0.55,delay:d,ease:[0.22,0.61,0.36,1]}}) };

function CategoryCard({ category, color, items }) {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, ease:[0.22,0.61,0.36,1] }}
      whileHover={{ y:-4 }}
      style={{ padding:'1.375rem', borderRadius:16, background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', backdropFilter:'blur(12px)', transition:'all 0.25s cubic-bezier(0.4,0,0.2,1)', position:'relative', overflow:'hidden' }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor=`${color}40`;e.currentTarget.style.boxShadow=`0 0 30px ${color}12`;}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.07)';e.currentTarget.style.boxShadow='none';}}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, borderRadius:'16px 16px 0 0', background:`linear-gradient(90deg,${color},transparent)`, opacity:0.7 }} />
      <div style={{ width:8, height:8, borderRadius:'50%', background:color, boxShadow:`0 0 10px ${color}`, marginBottom:'0.875rem' }} />
      <h3 className="font-display" style={{ color:'#EEEEF2', fontWeight:600, fontSize:'0.9375rem', marginBottom:'0.875rem' }}>{category}</h3>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem' }}>
        {items.map(name=>(
          <span key={name} style={{ padding:'0.3rem 0.7rem', borderRadius:9999, fontSize:'0.75rem', fontWeight:500, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)', color:'#888896' }}>
            {name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.06 });

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="wrap">
        <motion.div custom={0} variants={FU} initial="hidden" animate={inView?'visible':'hidden'} style={{ marginBottom:'3rem' }}>
          <p className="sec-num">02 — Skills</p>
          <h2 className="font-display" style={{ fontSize:'clamp(2rem,5vw,3rem)', fontWeight:700, letterSpacing:'-0.035em', color:'#EEEEF2', lineHeight:1.18 }}>
            Technologies I{' '}
            <span style={{ background:'linear-gradient(135deg,#818CF8,#C084FC)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>work with</span>
          </h2>
        </motion.div>

        {/* ── Marquee ticker ── */}
        <motion.div custom={0.15} variants={FU} initial="hidden" animate={inView?'visible':'hidden'}
          style={{ marginBottom:'3rem' }}>
          <div className="marquee-wrap">
            <div className="marquee-track" style={{ gap:'0.625rem' }}>
              {marqueeItems.map((name, i) => (
                <span key={i} className="skill-badge" style={{ marginRight:'0.5rem' }}>{name}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Category cards ── */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(256px,1fr))', gap:'1rem', position:'relative' }}>
          {skills.map(s => <CategoryCard key={s.category} {...s} />)}
        </div>
      </div>
    </section>
  );
}
