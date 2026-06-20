import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative p-5 rounded-xl glass glass-hover transition-all duration-500 text-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <User size={28} className="text-gray-400 group-hover:text-primary-light transition-colors" />
        </div>

        <h4 className="text-white font-heading font-semibold text-base">
          {member.title}
        </h4>
        {member.subtitle && (
          <p className="text-primary-light text-xs font-medium mt-1 uppercase tracking-wider">
            {member.subtitle}
          </p>
        )}
        {member.name && (
          <p className="text-gray-400 text-sm mt-2">{member.name}</p>
        )}
      </div>
    </motion.div>
  );
}
