import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles } from 'lucide-react';

const taglines = [
  'Inspired  Create  Succeed ',
  'Where Creativity Meets Passion',
  'Entertainment. Aesthetics. Excellence.',
  'Unleash Your Artistic Potential',
  'Colors of Expression, Rhythms of Life',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const isMobile = useRef(false);
  const gradientRef = useRef(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const hasGyro = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
    if (isMobile.current) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMobile.current) return;

    const updateTilt = () => {
      frameRef.current = null;
      const { x, y } = tiltRef.current;
      if (gradientRef.current) {
        const gx = 50 + x * 40;
        const gy = 50 + y * 40;
        gradientRef.current.style.backgroundPosition = `${gx}% ${gy}%`;
      }
    };

    const scheduleUpdate = () => {
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateTilt);
      }
    };

    const handleOrientation = (e) => {
      const gamma = e.gamma || 0;
      const beta = e.beta || 0;
      tiltRef.current = {
        x: Math.max(-1, Math.min(1, gamma / 45)),
        y: Math.max(-1, Math.min(1, beta / 45)),
      };
      hasGyro.current = true;
      scheduleUpdate();
    };

    const handleTouchMove = (e) => {
      if (hasGyro.current) return;
      const touch = e.touches[0];
      const rect = gradientRef.current?.getBoundingClientRect();
      if (!rect) return;
      tiltRef.current = {
        x: ((touch.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((touch.clientY - rect.top) / rect.height - 0.5) * 2,
      };
      scheduleUpdate();
    };

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS && typeof DeviceOrientationEvent !== 'undefined' && DeviceOrientationEvent.requestPermission) {
      DeviceOrientationEvent.requestPermission().then((state) => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation, { passive: true });
        } else {
          window.addEventListener('touchmove', handleTouchMove, { passive: true });
        }
      });
    } else {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-dark-3" />
        <div
          ref={gradientRef}
          className="absolute inset-0 md:hidden transition-none pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at 50% 50%, rgba(233,30,99,0.12), rgba(63,81,181,0.08), transparent 70%)',
            backgroundSize: '200% 200%',
            willChange: 'background-position',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[60px] sm:blur-[120px] sm:animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[50px] sm:blur-[100px] sm:animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[40px] sm:blur-[80px] sm:animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
            <Sparkles size={14} className="text-primary-light" />
            <span>University of Sri Jayewardenepura</span>
          </div>
        </div>

        <h1 className="animate-fade-in-up text-5xl sm:text-7xl lg:text-8xl font-heading font-black mb-6" style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text">Flair Club</span>
        </h1>

        <div className="h-16 sm:h-20 flex items-center justify-center mb-8 overflow-hidden">
          <p
            key={isMobile.current ? 0 : index}
            className="animate-fade-in-up text-xl sm:text-2xl lg:text-3xl text-gray-300 font-body font-light"
            style={{ animationDelay: '0.3s' }}
          >
            {isMobile.current ? taglines[0] : taglines[index]}
          </p>
        </div>

        <p
          className="animate-fade-in-up text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10"
          style={{ animationDelay: '0.4s' }}
        >
          The Entertainment & Aesthetic Club — collaborating with the Career Guidance Unit to bring creativity, talent, and opportunity together.
        </p>

        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: '0.6s' }}
        >
          <Link
            to="/about"
            className="px-8 py-3.5 rounded-xl gradient-bg hover:gradient-bg-hover text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            Explore Our Story
          </Link>
          <Link
            to="/circles"
            className="px-8 py-3.5 rounded-xl glass glass-hover text-white font-medium transition-all duration-300"
          >
            Our Circles
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <ChevronDown size={24} className="text-gray-500 animate-bounce" />
      </div>
    </section>
  );
}
