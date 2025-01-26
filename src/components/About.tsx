import { motion } from 'framer-motion';
import { Code, Cpu, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '150+', label: 'Projects Completed' },
    { icon: Globe, value: '50+', label: 'Global Clients' },
    { icon: Cpu, value: '10+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
              Future-Forward
            </span> Design Agency
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Pushing the boundaries of digital experiences with cutting-edge technology and innovative design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(155, 135, 245, 0.2)', '0 0 20px 10px rgba(155, 135, 245, 0.2)', '0 0 0 0 rgba(155, 135, 245, 0.2)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
                >
                  <stat.icon className="w-8 h-8 text-neon-purple mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;