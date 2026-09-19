import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
