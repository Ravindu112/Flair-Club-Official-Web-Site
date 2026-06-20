import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/circles', label: 'Circles' },
  { to: '/board', label: 'Board' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const prevLocRef = useRef(location);

  useEffect(() => {
    if (prevLocRef.current !== location) {
      setMobileOpen(false);
      window.scrollTo(0, 0);
      prevLocRef.current = location;
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-dark/80 backdrop-blur-xl border-b border-white/10 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.webp"
            alt="Flair Club"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/50 group-hover:ring-primary transition-all"
          />
          <span className="text-xl font-heading font-bold gradient-text hidden sm:block">
            Flair Club
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.to
                ? 'text-white bg-primary/20'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2 bg-dark/95 backdrop-blur-xl border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${location.pathname === link.to
                ? 'text-white bg-primary/20'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
