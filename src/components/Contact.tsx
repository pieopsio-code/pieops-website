import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
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

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
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
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
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
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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
              {status === 'success' ? (
                <>
                  <MessageSquare size={20} className="relative z-10" />
                  <span className="relative z-10">Message Sent!</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <Send
                    size={20}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
            <a
              href="mailto:contact@pieops.io"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-electric-blue to-cyber-cyan group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-white" />
              </div>
              contact@pieops.io
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
