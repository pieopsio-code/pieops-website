import { Target, Users, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Client Focus',
      description: 'Your success is our priority',
      gradient: 'from-neon-purple to-hot-pink',
    },
    {
      icon: Users,
      title: 'Trusted Partnership',
      description: 'Building long-term relationships',
      gradient: 'from-electric-blue to-cyber-cyan',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Always evolving, always innovating',
      gradient: 'from-teal-bright to-orange-bright',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering quality at every step',
      gradient: 'from-hot-pink to-neon-purple',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6 bg-gradient-to-b from-navy-dark to-slate-900 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-hot-pink via-orange-bright to-cyber-cyan bg-clip-text text-transparent">
                pieops.io
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We empower businesses with agile, automation-driven cloud solutions
              and innovative engineering services. Our mission is to accelerate
              digital transformation through cutting-edge technology and expert
              consultation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a team of seasoned professionals and a commitment to
              excellence, we deliver solutions that drive measurable business
              outcomes.
            </p>

            <motion.div
              className="mt-8 flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-hot-pink bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-gray-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-cyber-cyan bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-400 mt-1">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-teal-bright to-orange-bright bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-sm text-gray-400 mt-1">Client Retention</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>

                <div className="relative z-10">
                  <div className={`inline-block p-2 rounded-lg bg-gradient-to-br ${value.gradient} mb-4`}>
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
