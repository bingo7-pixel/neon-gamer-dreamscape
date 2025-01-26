import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
              Welcome to the future of web design
            </span>
          </motion.div>
          
          <motion.h1
            className="mt-8 text-5xl md:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We Create
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
              {" "}Digital Experiences
            </span>
          </motion.h1>
          
          <motion.p
            className="mt-6 text-xl text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your vision into reality with cutting-edge web solutions
          </motion.p>
          
          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-neon-purple text-white font-medium hover:bg-neon-purple/90 transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;