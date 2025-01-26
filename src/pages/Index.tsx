import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#1A1F2C';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;