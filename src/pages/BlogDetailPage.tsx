import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { blogPosts } from '../data/blogs';

export function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((blog) => blog.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-navy-dark text-white">
        <Header />
        <main className="pt-32 pb-20 px-6 flex flex-col items-center text-center gap-6">
          <p className="text-lg text-gray-300">We couldn&apos;t find that article.</p>
          <button
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-hot-pink text-white font-semibold"
          >
            Back to Blogs
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-dark text-white">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyber-cyan">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
            <p className="text-gray-400 text-sm">
              {post.date} • {post.readTime}
            </p>
          </div>

          <motion.div
            className="overflow-hidden rounded-3xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" />
          </motion.div>

          {post.contentMarkdown ? (
            <div className="markdown-content text-lg text-gray-200 leading-relaxed">
              <ReactMarkdown>{post.contentMarkdown}</ReactMarkdown>
            </div>
          ) : (
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              {post.content?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center pt-8 border-t border-white/5">
            <button
              onClick={() => navigate('/blogs')}
              className="text-sm font-semibold text-cyber-cyan hover:text-electric-blue transition-colors"
            >
              ← Back to all blogs
            </button>
            <span className="text-sm text-gray-400">pieops.io insights</span>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

