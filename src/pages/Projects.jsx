import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { projects } from '../data/projects';
import { ImageIcon } from 'lucide-react';

export default function Projects() {
  return (
    <div className="pt-24">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <SectionTitle
            subtitle="Our Projects"
            title="Flagship Events & Initiatives"
            description="From electrifying competitions to creative workshops — explore the projects that define Flair Club's calendar."
          />

          <div className="space-y-20">
            {projects.map((project, i) => {
              const isReversed = i % 2 === 1;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid md:grid-cols-2 gap-10 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}
                    style={{ direction: isReversed ? 'rtl' : 'ltr' }}
                  >
                    <div style={{ direction: 'ltr' }}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white mb-4`}>
                        {project.highlight}
                      </span>
                      <h2 className="text-3xl font-heading font-bold text-white mb-1">
                        {project.id === 'dhaara' ? (
                          <a href="https://www.dhaara.online/" target="_blank" rel="noopener noreferrer" className="hover:gradient-text transition-all">
                            {project.name}
                          </a>
                        ) : (
                          project.name
                        )}
                      </h2>
                      <p className="text-primary-light font-medium mb-4">{project.subtitle}</p>
                      <p className="text-gray-400 leading-relaxed mb-2 text-lg italic">"{project.tagline}"</p>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                    <div style={{ direction: 'ltr' }}>
                      {project.image ? (
                        <div className="relative rounded-2xl overflow-hidden group">
                          {project.id === 'dhaara' ? (
                            <a href="https://www.dhaara.online/" target="_blank" rel="noopener noreferrer">
                              <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                              />
                            </a>
                          ) : (
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ) : (
                        <div className={`h-72 rounded-2xl bg-gradient-to-br ${project.color} flex flex-col items-center justify-center`}>
                          <ImageIcon size={48} className="text-white/20 mb-3" />
                          <span className="text-5xl font-heading font-black text-white/20">{project.name[0]}</span>
                          <p className="text-white/40 text-sm mt-3">Gallery photos coming soon</p>
                        </div>
                      )}
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
