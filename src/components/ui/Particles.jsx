import { useEffect, useRef } from 'react';

const COLORS = ['#C2185B', '#3F51B5', '#7B1FA2', '#E91E63'];

export default function Particles({ count = 15 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const size = Math.random() * 8 + 3;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const dur = Math.random() * 20 + 15;
      const delay = Math.random() * 10;

      el.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        opacity: ${Math.random() * 0.15 + 0.05};
        pointer-events: none;
        animation: float-particle ${dur}s ease-in-out ${delay}s infinite;
      `;
      container.appendChild(el);
      elements.push(el);
    }

    return () => elements.forEach((el) => el.remove());
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
