import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import CircleCard from '../ui/CircleCard';
import { circles } from '../../data/circles';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export default function CirclesSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <SectionTitle
            subtitle="Our Circles"
            title="Discover Your Creative Home"
            description="From music to management, art to events — there's a circle for every passion."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {circles.slice(0, 6).map((circle, i) => (
            <motion.div key={circle.id} variants={reveal} custom={i}>
              <CircleCard circle={circle} index={i} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/circles"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-white font-medium transition-all duration-300"
          >
            View All Circles
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
