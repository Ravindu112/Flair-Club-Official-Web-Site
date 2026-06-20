import { useState, useRef, useEffect } from 'react';

export default function LazySection({ children, className = '', style = {}, placeholderHeight = 400 }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {inView ? children : <div style={{ height: placeholderHeight }} />}
    </div>
  );
}
