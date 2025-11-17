import {
  Cloud,
  Zap,
  Brain,
  Shield,
  Code,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Cloud,
    title: 'CloudOps',
    description:
      'Migration, Managed Cloud, Integration, Automation, Security, Monitoring.',
    outcome: 'Secure, scalable cloud transformation for rapid innovation.',
    gradient: 'from-neon-purple to-electric-blue',
    glowColor: 'group-hover:shadow-neon-purple/50',
  },
  {
    icon: Zap,
    title: 'DevOps & SRE',
    description:
      'Roadmap planning, containerization, CI/CD, config management, site reliability, security.',
    outcome: 'Accelerate delivery, enhance reliability, and reduce time-to-market.',
    gradient: 'from-electric-blue to-cyber-cyan',
    glowColor: 'group-hover:shadow-electric-blue/50',
  },
  {
    icon: Brain,
    title: 'AI/ML & Data Engineering',
    description: 'Data pipelines, MLOps, GenAI app development.',
    outcome: 'Transform data into actionable insights with AI/ML-powered solutions.',
    gradient: 'from-hot-pink to-orange-bright',
    glowColor: 'group-hover:shadow-hot-pink/50',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description:
      'Assessments, penetration testing, threat response, compliance.',
    outcome: 'Protect your business with next-gen cyber defense.',
    gradient: 'from-teal-bright to-cyber-cyan',
    glowColor: 'group-hover:shadow-teal-bright/50',
  },
  {
    icon: Code,
    title: 'Software/Product Engineering',
    description:
      'Modernization, new product builds, sustenance, support, security engineering.',
    outcome: 'Build and evolve products for future-ready enterprises.',
    gradient: 'from-cyber-cyan to-neon-purple',
    glowColor: 'group-hover:shadow-cyber-cyan/50',
  },
  {
    icon: CheckCircle,
    title: 'QA Automation & Testing',
    description: 'Manual & automated, API, performance, vulnerability testing.',
    outcome: 'Ensure quality and reliability at every stage.',
    gradient: 'from-orange-bright to-hot-pink',
    glowColor: 'group-hover:shadow-orange-bright/50',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 px-6 bg-navy-dark overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-electric-blue via-cyber-cyan to-teal-bright bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for modern digital challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:shadow-2xl ${service.glowColor} transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`mb-6 inline-block p-3 rounded-xl bg-gradient-to-br ${service.gradient}`}>
                  <service.icon
                    size={32}
                    className="text-white group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm font-medium text-white/80">
                  {service.outcome}
                </p>
              </div>

              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
