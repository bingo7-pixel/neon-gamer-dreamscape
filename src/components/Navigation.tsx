import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gaming-dark/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-neon-purple rounded-lg animate-glow" />
            PIXEL
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Portfolio', 'Services', 'Blog', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: '#9b87f5' }}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;