import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
    setIsMenuOpen(false);
  };

  const goToBlogs = () => {
    if (location.pathname !== '/blogs') {
      navigate('/blogs');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-neon-purple/5'
          : 'bg-navy-dark/50 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold tracking-tight cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="bg-gradient-to-r from-electric-blue to-cyber-cyan bg-clip-text text-transparent">
              pieops
            </span>
            <span className="text-white">.io</span>
          </motion.div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors text-sm relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-cyan group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors text-sm relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-hot-pink to-orange-bright group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors text-sm relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-bright to-neon-purple group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={goToBlogs}
              className="text-gray-300 hover:text-white transition-colors text-sm relative group"
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-hot-pink group-hover:w-full transition-all duration-300"></span>
            </button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative bg-gradient-to-r from-neon-purple to-hot-pink text-white px-6 py-2 rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-hot-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 text-sm font-medium">Get Started</span>
            </motion.button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors text-sm text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors text-sm text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors text-sm text-left"
            >
              Contact
            </button>
            <button
              onClick={goToBlogs}
              className="text-gray-300 hover:text-white transition-colors text-sm text-left"
            >
              Blogs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-neon-purple to-hot-pink text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-hot-pink/30 transition-all text-sm w-full font-medium"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
