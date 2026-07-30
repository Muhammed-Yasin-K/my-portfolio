import { useEffect, useRef } from 'react';

/**
 * Tracks mouse position relative to a target element.
 * Returns a ref to attach to the element and the current mouse coords.
 */
export function useMousePosition() {
  const ref = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      posRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  return { ref, posRef };
}
