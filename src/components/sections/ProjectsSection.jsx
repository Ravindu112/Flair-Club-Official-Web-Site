import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import EventCard from '../ui/EventCard';
import { projects } from '../../data/projects';
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

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <SectionTitle
            subtitle="Our Projects"
            title="Events That Define Us"
            description="Flagship projects and annual events that showcase the talent and creativity of our members."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(0, 6).map((project, i) => (
            <motion.div key={project.id} variants={reveal} custom={i}>
              <EventCard project={project} index={i} />
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
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg hover:gradient-bg-hover text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            Explore All Projects
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
