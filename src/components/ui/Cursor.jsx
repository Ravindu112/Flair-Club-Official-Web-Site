import { useState, useEffect, useRef } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(visible);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visibleRef.current) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"], input, select, textarea').forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`rounded-full transition-all duration-200 ${
          hovering
            ? 'w-12 h-12 bg-white/10 border border-white/30'
            : 'w-4 h-4 bg-primary-light shadow-[0_0_12px_rgba(233,30,99,0.6)]'
        }`}
      />
    </div>
  );
}
