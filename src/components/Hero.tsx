import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, color: 'from-neon-purple to-hot-pink' },
    { Icon: Zap, delay: 0.5, color: 'from-electric-blue to-cyber-cyan' },
    { Icon: Rocket, delay: 1, color: 'from-teal-bright to-orange-bright' },
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-gradient-xy"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {floatingIcons.map(({ Icon, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute hidden lg:block bg-gradient-to-br ${color} p-4 rounded-2xl shadow-2xl`}
          style={{
            top: `${20 + index * 30}%`,
            left: index % 2 === 0 ? '10%' : 'auto',
            right: index % 2 === 1 ? '10%' : 'auto',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="text-white" size={32} />
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-purple via-electric-blue to-cyber-cyan bg-clip-text text-transparent animate-gradient-x">
              Powering Smarter Businesses Through Technology
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          End-to-end digital transformation and product engineering.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={scrollToContact}
            className="group relative bg-gradient-to-r from-neon-purple to-hot-pink text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-hot-pink/50 transition-all text-base flex items-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-hot-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative z-10">Book a Free Consultation</span>
            <ArrowRight
              size={20}
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative text-white px-8 py-4 rounded-full border-2 border-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-lg hover:shadow-cyber-cyan/30 transition-all text-base backdrop-blur-sm"
          >
            Explore Services
          </button>
        </motion.div>

      </div>
    </section>
  );
}
