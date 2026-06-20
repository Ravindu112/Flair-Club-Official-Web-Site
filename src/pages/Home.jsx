import { lazy, Suspense, useRef, useState, useEffect } from 'react';
import Hero from '../components/ui/Hero';
import StatsCounter from '../components/ui/StatsCounter';
import Particles from '../components/ui/Particles';
import LazySection from '../components/ui/LazySection';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';

const CirclesSection = lazy(() => import('../components/sections/CirclesSection'));
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection'));

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-50px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

export default function Home() {
  const [aboutRef, aboutInView] = useInView();

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
            <div
              ref={aboutRef}
              className={`transition-all duration-700 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary-light border border-primary/20">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-4">
                  Where Creativity Finds Its Voice
                </h2>
                <div className="w-20 h-1 gradient-bg rounded-full" />
              </div>
              <p className={`text-gray-300 leading-relaxed mb-6 transition-all duration-700 delay-200 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Flair Club is the official Entertainment & Aesthetic society of the University of Sri Jayewardenepura,
                proudly collaborating with the Career Guidance Unit. We provide a vibrant platform for students to
                explore their creative potential across music, dance, drama, art, and literary arts.
              </p>
              <p className={`text-gray-400 leading-relaxed mb-8 transition-all duration-700 delay-300 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Under the guidance of our advisor, <span className="text-primary-light">Mrs. Chathurangani Thennakoon</span>,
                Flair Club has grown into a thriving community of artists, performers, and creators.
              </p>
              <div className={`transition-all duration-700 delay-400 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg hover:gradient-bg-hover text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
                >
                  Read Our Story
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 delay-200 ${aboutInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
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
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-700" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] group-hover:bg-secondary/20 transition-all duration-700" />
              </div>
            </div>
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
      <LazySection>
        <Suspense fallback={<div className="h-64" />}>
          <CirclesSection />
        </Suspense>
      </LazySection>

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
      <LazySection>
        <Suspense fallback={<div className="h-64" />}>
          <ProjectsSection />
        </Suspense>
      </LazySection>
    </div>
  );
}
