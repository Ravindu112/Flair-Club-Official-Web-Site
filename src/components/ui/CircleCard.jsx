import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Tilt from './Tilt';

export default function CircleCard({ circle, index }) {
  const Icon = circle.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to="/circles"
        className="group block h-full"
      >
        <Tilt max={6}>
          <div className="relative h-full p-6 rounded-2xl glass glass-hover transition-all duration-500 group-hover:translate-y-[-4px] overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${circle.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${circle.color} p-3 mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
              <Icon size={28} className="text-white" />
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:gradient-text transition-all">
              {circle.name}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {circle.description}
            </p>

            <div className="flex items-center text-primary-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Learn more</span>
              <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
}
