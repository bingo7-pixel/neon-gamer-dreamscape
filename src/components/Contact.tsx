import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Globe, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support@pixel.design",
    description: "24/7 response for all inquiries",
    availability: "Always Online"
  },
  {
    icon: Phone,
    title: "Phone Support",
    value: "+1 (555) 123-4567",
    description: "Direct line to our support team",
    availability: "Mon-Fri, 9am-6pm EST"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Available 24/7",
    description: "Instant response via chat",
    availability: "Response in 5 minutes"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Neo Tokyo Office",
    description: "123 Cyber Street, Digital District",
    availability: "By appointment"
  },
  {
    icon: Globe,
    title: "Global Support",
    value: "Worldwide Coverage",
    description: "Support in multiple languages",
    availability: "24/7 International"
  },
  {
    icon: Clock,
    title: "Schedule Call",
    value: "Book a Meeting",
    description: "Personal consultation session",
    availability: "Flexible hours"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark via-gaming-purple/10 to-gaming-dark opacity-50" />
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
            Get In Touch
          </motion.span>
          <h2 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
            Connect With Us
          </h2>
          <p className="text-white/60 text-lg">Let's create something extraordinary together</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-xl bg-gaming-dark/50 border border-white/10 backdrop-blur-lg hover:border-neon-purple/50 transition-all group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-neon-purple/20 flex items-center justify-center mb-6 group-hover:animate-pulse">
                  <method.icon className="w-8 h-8 text-neon-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                  {method.title}
                </h3>
                <p className="text-neon-purple font-medium mb-2">{method.value}</p>
                <p className="text-white/60 mb-2">{method.description}</p>
                <p className="text-white/40 text-sm">{method.availability}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-neon-purple/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-neon-purple/50 focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-neon-purple/50 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-neon-purple/50 focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium hover:opacity-90 transition-opacity relative overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;