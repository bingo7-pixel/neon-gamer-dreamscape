import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '250+', label: 'Projects Completed', description: 'Cutting-edge digital solutions' },
    { icon: Globe, value: '80+', label: 'Global Clients', description: 'Worldwide partnerships' },
    { icon: Cpu, value: '15+', label: 'Years Experience', description: 'Industry expertise' },
    { icon: Users, value: '50+', label: 'Team Members', description: 'Talented professionals' },
    { icon: Award, value: '30+', label: 'Industry Awards', description: 'Recognition for excellence' },
    { icon: Zap, value: '99%', label: 'Client Satisfaction', description: 'Happy customers' }
  ];

  return (
    <section id="about" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <motion.span
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: '100% 50%' }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue"
            >
              Future-Forward
            </motion.span>{' '}
            Design Agency
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Pushing the boundaries of digital experiences with cutting-edge technology and innovative design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl opacity-20 group-hover:opacity-100 transition-opacity blur" />
              <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <motion.div
                  animate={{ 
                    boxShadow: ['0 0 0 0 rgba(155, 135, 245, 0)', '0 0 20px 10px rgba(155, 135, 245, 0.2)', '0 0 0 0 rgba(155, 135, 245, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center justify-center"
                >
                  <stat.icon className="w-12 h-12 text-neon-purple mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.h3>
                <h4 className="text-xl font-semibold text-neon-purple mb-2">{stat.label}</h4>
                <p className="text-white/60">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;