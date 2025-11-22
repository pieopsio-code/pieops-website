import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { blogPosts } from '../data/blogs';

export function BlogsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark text-white">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <section className="max-w-6xl mx-auto mb-16 text-center">
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-cyber-cyan mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Insights
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Stories from the PieOps team
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Deep dives on platform engineering, observability, AI copilots, and the delivery
            playbooks we use with high-growth clients.
          </motion.p>
        </section>

        <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-electric-blue/60 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/blogs/${post.slug}`} className="flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-gray-200 bg-black/40 px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {post.date} • {post.readTime}
                  </div>
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p className="text-gray-300 flex-1">{post.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-cyber-cyan font-semibold">
                    Continue reading →
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

