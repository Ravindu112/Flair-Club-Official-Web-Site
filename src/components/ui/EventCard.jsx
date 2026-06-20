import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Tilt from './Tilt';

export default function EventCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to="/projects"
        className="group block h-full"
      >
        <Tilt max={6}>
          <div className="relative h-full rounded-2xl overflow-hidden glass glass-hover transition-all duration-500 group-hover:translate-y-[-4px]">
          {project.image ? (
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
            </div>
          ) : (
            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <span className="text-4xl font-heading font-black text-white/30">{project.name[0]}</span>
            </div>
          )}

          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
              {project.highlight}
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
              <Calendar size={12} />
              <span>Annual Event</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:gradient-text transition-all">
              {project.name}
            </h3>
            <p className="text-primary-light text-sm font-medium mb-2">
              {project.subtitle}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center text-primary-light text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View details</span>
              <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
        </Tilt>
      </Link>
    </motion.div>
  );
}
