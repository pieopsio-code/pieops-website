import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTarget = location.state && (location.state as { scrollTo?: string }).scrollTo;
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      }
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-navy-dark">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
