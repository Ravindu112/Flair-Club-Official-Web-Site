import { motion } from 'framer-motion';

export default function SectionTitle({ 
  subtitle, 
  title, 
  description, 
  light = false,
  align = 'center' 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-14`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary-light border border-primary/20 mb-4">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      <div className="w-20 h-1 gradient-bg rounded-full mt-4 mb-6 mx-auto" />
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-400'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
