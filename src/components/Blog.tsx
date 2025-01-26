import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Web Design",
    excerpt: "Exploring upcoming trends in digital experiences",
    date: "2024-03-15",
    category: "Design"
  },
  {
    title: "Gaming-Inspired Interfaces",
    excerpt: "How gaming aesthetics influence modern web design",
    date: "2024-03-10",
    category: "Gaming"
  },
  {
    title: "Animation in Web Design",
    excerpt: "Creating engaging user experiences through motion",
    date: "2024-03-05",
    category: "Animation"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-white/60">Stay updated with our latest thoughts and innovations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gaming-dark/50 border border-white/10 rounded-xl p-6 backdrop-blur-lg hover:border-neon-purple/50 transition-all group"
            >
              <div className="text-neon-purple mb-4">{post.category}</div>
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-white/60 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-neon-purple group-hover:gap-2 transition-all">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;