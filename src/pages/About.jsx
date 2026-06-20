import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Quote, Target, Eye, Handshake } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide a dynamic platform for students to explore, develop, and showcase their creative talents while fostering personal growth, teamwork, and cultural appreciation.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the premier entertainment and aesthetic society in Sri Lankan universities, known for nurturing holistic talent and creating unforgettable artistic experiences.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'In collaboration with the Career Guidance Unit of USJ, Flair Club bridges creative expression with professional development, preparing students for well-rounded careers.',
  },
];

export default function About() {
  return (
    <div className="pt-24">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <SectionTitle
            subtitle="About Flair Club"
            title="The Story Behind the Stage"
            description="Discover the heart and soul of the University of Sri Jayewardenepura's Entertainment & Aesthetic society."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/university-logo.png"
                alt="University of Sri Jayewardenepura"
                className="rounded-2xl w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Flair Club was founded as a vibrant hub for entertainment and aesthetics at the University of Sri Jayewardenepura, bringing together students from all faculties who share a passion for the arts.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From humble beginnings, Flair Club has grown into one of the most active and recognized societies on campus, known for organizing spectacular events, workshops, and competitions that engage the entire university community.
              </p>
              <div className="glass rounded-xl p-5 flex items-center gap-4">
                <img src="/images/logo.png" alt="Flair Club" className="h-14 w-14 rounded-full ring-2 ring-primary/50" />
                <div>
                  <p className="text-white font-heading font-semibold">Advisor</p>
                  <p className="text-primary-light font-medium">Mrs. Chathurangani Thennakoon</p>
                  <p className="text-gray-500 text-sm">Career Guidance Unit, USJ</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl glass glass-hover"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 rounded-2xl glass text-center"
          >
            <Quote size={32} className="text-primary/30 mx-auto mb-4" />
            <p className="text-xl text-gray-200 italic max-w-3xl mx-auto leading-relaxed">
              "Flair Club is where talent meets opportunity. We don't just organize events — we create experiences that inspire, empower, and transform."
            </p>
            <div className="mt-4">
              <p className="text-white font-medium">— Flair Club Executive Board</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
