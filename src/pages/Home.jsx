import Hero from '../components/ui/Hero';
import StatsCounter from '../components/ui/StatsCounter';
import SectionTitle from '../components/ui/SectionTitle';
import CircleCard from '../components/ui/CircleCard';
import EventCard from '../components/ui/EventCard';
import Particles from '../components/ui/Particles';
import { circles } from '../data/circles';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const revealLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <div className="relative">
      <Particles count={20} />

      <Hero />
      <StatsCounter />

      {/* About Preview */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-2000" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={revealLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <SectionTitle
                subtitle="About Us"
                title="Where Creativity Finds Its Voice"
                description=""
                align="left"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 leading-relaxed mb-6"
              >
                Flair Club is the official Entertainment & Aesthetic society of the University of Sri Jayewardenepura,
                proudly collaborating with the Career Guidance Unit. We provide a vibrant platform for students to
                explore their creative potential across music, dance, drama, art, and literary arts.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                Under the guidance of our advisor, <span className="text-primary-light">Mrs. Chathurangani Thennakoon</span>,
                Flair Club has grown into a thriving community of artists, performers, and creators.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg hover:gradient-bg-hover text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                >
                  Read Our Story
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={revealRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glass p-8 group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Quote size={40} className="text-primary/20 mb-4 relative z-10" />
                <p className="text-lg text-gray-300 italic leading-relaxed mb-4 relative z-10 group-hover:text-white transition-colors duration-500">
                  "Flair Club is more than a society — it's a family where every student discovers their hidden talents, builds confidence, and creates memories that last a lifetime."
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    CT
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Mrs. Chathurangani Thennakoon</p>
                    <p className="text-gray-500 text-xs">Club Advisor</p>
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-700" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] group-hover:bg-secondary/20 transition-all duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <Sparkles size={14} className="text-primary-light" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>

      {/* Circles Preview */}
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

      {/* Section Divider */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-secondary/50" />
          <Sparkles size={14} className="text-secondary-light" />
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-secondary/50" />
        </div>
      </div>

      {/* Projects Preview */}
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
    </div>
  );
}
