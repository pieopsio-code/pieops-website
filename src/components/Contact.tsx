import { Mail, MessageSquare, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [copied, setCopied] = useState(false);
  const email = 'info@pieops.io';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-navy-dark overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-teal-bright via-electric-blue to-hot-pink bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Ready to transform your business? Let's talk.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple via-electric-blue to-cyber-cyan rounded-2xl opacity-20 blur"></div>

          <form action="https://formspree.io/f/mdkypzwb" method="POST" className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-neon-purple to-hot-pink text-white px-8 py-4 rounded-full overflow-hidden text-base font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-hot-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10">Send Message</span>
              <Send
                size={20}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-electric-blue to-cyber-cyan group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-white" />
              </div>
              <span>{email}</span>
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Copy size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
