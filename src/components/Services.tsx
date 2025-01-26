import { motion } from 'framer-motion';
import { Code, Palette, Globe, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technology",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic solutions for online growth",
  },
  {
    icon: Rocket,
    title: "Brand Strategy",
    description: "Comprehensive brand development and positioning",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/60">Elevate your digital presence with our expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-gaming-dark/50 border border-white/10 backdrop-blur-lg hover:border-neon-purple/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;