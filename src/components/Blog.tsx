import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Metaverse Design",
    excerpt: "Exploring the intersection of virtual reality and web design in the metaverse era",
    date: "2024-03-15",
    category: "Virtual Reality",
    readTime: "7 min read",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      role: "VR Architect"
    },
    tags: ["Metaverse", "VR", "Design"]
  },
  {
    title: "AI-Powered Gaming Experiences",
    excerpt: "How artificial intelligence is revolutionizing game development and player interactions",
    date: "2024-03-10",
    category: "Gaming & AI",
    readTime: "5 min read",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      role: "AI Engineer"
    },
    tags: ["AI", "Gaming", "Innovation"]
  },
  {
    title: "Cyberpunk UI Trends 2024",
    excerpt: "Breaking down the latest trends in cyberpunk-inspired user interface design",
    date: "2024-03-05",
    category: "UI Design",
    readTime: "6 min read",
    author: {
      name: "Mike Zhang",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "UI Designer"
    },
    tags: ["Cyberpunk", "UI", "Trends"]
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-gaming-purple/10 to-gaming-dark opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="px-4 py-2 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20 inline-block mb-4"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Latest Updates
          </motion.span>
          <h2 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
            Insights & Innovation
          </h2>
          <p className="text-white/60 text-lg">Exploring the frontiers of technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gaming-dark/50 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:border-neon-purple/50 transition-all group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="flex items-center space-x-2 text-neon-purple mb-4">
                  <Tag className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-white/40">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-white/40">{post.author.name}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full text-xs bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="flex items-center text-neon-purple group-hover:gap-2 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;