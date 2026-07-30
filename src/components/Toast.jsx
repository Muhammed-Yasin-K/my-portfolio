import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
          padding: '0.75rem 1.25rem', borderRadius: 14,
          background: '#0d0d13', border: '1.5px solid rgba(99,102,241,0.4)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.6), 0 0 30px rgba(99,102,241,0.2)',
          color: '#eeeef2', fontSize: '0.875rem', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: 10,
          backdropFilter: 'blur(16px)',
        }}
      >
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <CheckCircle size={14} color="#10b981" />
        </div>
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
}
