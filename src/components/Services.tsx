import { motion } from 'framer-motion';
import { Code, Palette, Globe, Rocket, Cpu, Gamepad, Shield, Terminal } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Advanced Web Development",
    description: "Pushing the boundaries of web technology",
    features: ["Next.js/React", "WebGL/Three.js", "Web3 Integration", "Custom APIs"]
  },
  {
    icon: Gamepad,
    title: "Gaming Solutions",
    description: "Immersive gaming experiences",
    features: ["Game UI/UX", "Unity Integration", "VR/AR Development", "Mobile Gaming"]
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Next-gen artificial intelligence",
    features: ["Machine Learning", "Neural Networks", "AI Chatbots", "Data Analysis"]
  },
  {
    icon: Terminal,
    title: "Blockchain Development",
    description: "Decentralized solutions for the future",
    features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Crypto Integration"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security protocols",
    features: ["Penetration Testing", "Security Audits", "Encryption", "DDoS Protection"]
  },
  {
    icon: Palette,
    title: "Futuristic Design",
    description: "Cutting-edge visual experiences",
    features: ["3D Modeling", "Motion Graphics", "Holographic UI", "Cyberpunk Aesthetics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark via-gaming-purple/10 to-gaming-dark opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="px-4 py-2 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20 inline-block mb-4"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Expertise
          </motion.span>
          <h2 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
            Cutting-Edge Services
          </h2>
          <p className="text-white/60 text-lg">Transforming ideas into digital reality</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-xl bg-gaming-dark/50 border border-white/10 backdrop-blur-lg hover:border-neon-purple/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-lg bg-neon-purple/20 flex items-center justify-center mb-6 group-hover:animate-pulse">
                <service.icon className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-white/40 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple/50" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;