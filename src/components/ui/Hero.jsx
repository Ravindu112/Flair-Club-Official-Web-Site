import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-dark-3" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[80px] animate-pulse animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-6">
            <Sparkles size={14} className="text-primary-light" />
            <span>University of Sri Jayewardenepura</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black mb-6"
        >
          <span className="gradient-text">Flair Club</span>
        </motion.h1>

        <div className="h-16 sm:h-20 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-body font-light"
            >
              {taglines[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          The Entertainment & Aesthetic Club — collaborating with the Career Guidance Unit to bring creativity, talent, and opportunity together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
