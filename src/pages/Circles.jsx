import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { circles } from '../data/circles';

export default function Circles() {
  return (
    <div className="pt-24">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <SectionTitle
            subtitle="Our Circles & Crews"
            title="Seven Pillars of Creativity"
            description="Each circle and crew is a specialized unit led by dedicated directors and executives, working together to make Flair Club a powerhouse of talent."
          />

          <div className="space-y-24">
            {circles.map((circle, i) => {
              const Icon = circle.icon;
              const isReversed = i % 2 === 1;

              return (
                <motion.div
                  key={circle.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-10 items-center ${isReversed ? 'md:direction-rtl' : ''}`}
                  style={{ direction: isReversed ? 'rtl' : 'ltr' }}
                >
                  <div style={{ direction: 'ltr' }}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${circle.color} p-4 mb-6`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">{circle.name}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">{circle.description}</p>
                    <p className="text-gray-400 leading-relaxed">{circle.details}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {circle.directors.map((dir, j) => (
                        <span
                          key={j}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${circle.color} text-white`}
                        >
                          {dir}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative" style={{ direction: 'ltr' }}>
                    <div className="relative rounded-2xl overflow-hidden glass p-1">
                      <div className={`rounded-xl h-64 bg-gradient-to-br ${circle.color} opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={80} className="text-white/30" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
