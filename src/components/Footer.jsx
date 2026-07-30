import React from 'react';
import { Code2, Briefcase, Mail } from 'lucide-react';
import { social } from '../data/portfolio';

const IC = { Code2, Briefcase, Mail };

export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem 0', background: '#07070B' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="font-display" style={{ color: '#EEEEF2', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.025em' }}>
            Muhammed <span style={{ color: '#818CF8' }}>Yasin</span> K.
          </span>
        </div>

        <p style={{ color: '#44444F', fontSize: '0.78rem' }}>
          © {y} Muhammed Yasin K
        </p>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {social.map(({ name, href, icon }) => {
            const Icon = IC[icon] || Code2;
            return (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                style={{ width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: '#44444F', textDecoration: 'none', transition: 'all 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#818CF8'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.background = 'rgba(99,102,241,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#44444F'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
