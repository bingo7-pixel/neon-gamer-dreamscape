import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Neon Pulse Gaming",
    category: "Gaming Platform",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Next-gen gaming platform with immersive UI"
  },
  {
    title: "Cyber Analytics",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Real-time data visualization dashboard"
  },
  {
    title: "Digital Nexus",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Enterprise-grade web application platform"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/60">Explore our latest digital innovations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(155, 135, 245, 0.2)', '0 0 20px 10px rgba(155, 135, 245, 0.2)', '0 0 0 0 rgba(155, 135, 245, 0.2)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative rounded-xl overflow-hidden aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  <div className="flex items-center text-neon-purple">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </motion.div>
              </motion.div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl opacity-0 group-hover:opacity-15 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;