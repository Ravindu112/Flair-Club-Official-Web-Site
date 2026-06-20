import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import { projects } from '../data/projects';
import { X, ChevronLeft, ChevronRight, ImageIcon, ArrowLeft } from 'lucide-react';

const galleryProjects = projects.filter((p) => p.image);

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const projectImages = selectedProject
    ? selectedProject.images.map((src) => ({ src, project: selectedProject.name, id: selectedProject.id }))
    : [];

  const openLightbox = (i) => setSelectedIndex(i);
  const closeLightbox = () => setSelectedIndex(null);
  const navigate = (dir) => {
    const newIdx = (selectedIndex + dir + projectImages.length) % projectImages.length;
    setSelectedIndex(newIdx);
  };

  const selectProject = (project) => {
    setSelectedProject(project);
    setSelectedIndex(null);
  };

  const backToGallery = () => {
    setSelectedProject(null);
    setSelectedIndex(null);
  };

  return (
    <div className="pt-24">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          {selectedProject ? (
            <>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={backToGallery}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Gallery</span>
                </button>
              </div>
              <SectionTitle
                subtitle={selectedProject.subtitle}
                title={selectedProject.name}
                description={`${selectedProject.images.length} photos`}
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group relative rounded-2xl overflow-hidden glass glass-hover cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={img.src}
                        alt={`${img.project} photo ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-60" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <>
              <SectionTitle
                subtitle="Gallery"
                title="Moments That Matter"
                description="A visual journey through Flair Club's most memorable events and celebrations."
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative rounded-2xl overflow-hidden glass glass-hover"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white mb-2`}>
                        {project.subtitle}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-white">{project.name}</h3>
                    </div>
                    <button
                      onClick={() => selectProject(project)}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      aria-label={`View ${project.name} photos`}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12 p-8 rounded-2xl glass"
              >
                <ImageIcon size={32} className="text-primary/30 mx-auto mb-4" />
                <p className="text-gray-300 text-lg mb-4">
                  Want to see more event photos?
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg hover:gradient-bg-hover text-white font-medium transition-all duration-300"
                >
                  Explore All Projects
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2">
              <X size={28} />
            </button>
            {projectImages.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 text-white/70 hover:text-white p-2">
                  <ChevronLeft size={32} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 text-white/70 hover:text-white p-2">
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            {projectImages[selectedIndex] && (
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-4xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={projectImages[selectedIndex].src}
                  alt={projectImages[selectedIndex].project}
                  className="w-full h-full object-contain rounded-2xl"
                />
                <p className="text-white/70 text-center mt-3 text-sm">
                  {projectImages[selectedIndex].project} — {selectedIndex + 1} / {projectImages.length}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
