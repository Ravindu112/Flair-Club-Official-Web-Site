import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import TeamCard from '../components/ui/TeamCard';
import { boardMembers, boardTiers } from '../data/board';

export default function Board() {
  const getTierMembers = (tierId) => boardMembers.filter((m) => m.tier === tierId);

  return (
    <div className="pt-24">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4">
          <SectionTitle
            subtitle="Executive Board"
            title="Meet Our Leadership"
            description="The dedicated team driving Flair Club's vision forward with passion and commitment."
          />

          {boardTiers.map((tier) => {
            const members = getTierMembers(tier.id);
            if (members.length === 0) return null;

            return (
              <div key={tier.id} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-heading font-bold text-white inline-flex items-center gap-3">
                    <span className={`w-8 h-1 rounded-full bg-gradient-to-r ${tier.color}`} />
                    {tier.label}
                  </h3>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {members.map((member, i) => (
                    <TeamCard key={member.id} member={member} index={i} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Faculty Coordinators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <h3 className="text-xl font-heading font-bold text-white mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600" />
              Faculty Coordinators
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Humanities & Social Sciences',
                'Management Studies & Commerce',
                'Applied Sciences',
                'Engineering',
                'Computing',
                'Medical Sciences',
                'Allied Health Sciences',
                'Aquatic & Urban Bio Resources',
                'Technology',
                'Dental Sciences',
              ].map((faculty, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl glass glass-hover text-center"
                >
                  <p className="text-white font-medium text-sm">{faculty}</p>
                  <p className="text-gray-500 text-xs mt-1">Faculty Coordinator</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
