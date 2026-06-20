import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Music, Camera, MessageCircle, Video, AtSign } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-dark-2 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.webp" alt="Flair Club" className="h-10 w-10 rounded-full ring-2 ring-primary/50" loading="lazy" />
              <span className="text-xl font-heading font-bold gradient-text">Flair Club</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Entertainment & Aesthetic Club of the University of Sri Jayewardenepura. Where creativity meets passion.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Camera, label: 'Photography' },
                { icon: MessageCircle, label: 'Messaging' },
                { icon: Video, label: 'Video' },
                { icon: AtSign, label: 'Social Media' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/circles', label: 'Circles' },
                { to: '/board', label: 'Executive Board' },
                { to: '/projects', label: 'Projects' },
                { to: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-primary-light text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Our Circles</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <span>Music Circle</span>
              <span>Dancing Circle</span>
              <span>Drama Circle</span>
              <span>Art & Creative Writing</span>
              <span>Event Management</span>
              <span>IT & Marketing Crew</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-heading font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-primary-light shrink-0" />
                <span>University of Sri Jayewardenepura, Gangodawila, Nugegoda</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary-light shrink-0" />
                <span>flairclub@sjp.ac.lk</span>
              </div>
              <div className="flex items-center gap-3">
                <Music size={16} className="text-primary-light shrink-0" />
                <span>Collaborated with Career Guidance Unit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Flair Club. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-primary" /> by Flair IT & Marketing Crew
          </p>
        </div>
      </div>
    </footer>
  );
}
