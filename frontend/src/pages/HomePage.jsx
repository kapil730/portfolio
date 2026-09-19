import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl -z-10"></div>

      <AnimatedSection className="w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-0 md:pt-0">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wide uppercase mb-4"
          >
            Hello, World!
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6"
          >
            I'm <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">Kapil Shah</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6"
          >
            BSc IT Student & <br className="md:hidden" />
            Aspiring Software Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 mb-10 text-lg leading-relaxed"
          >
            I enjoy building responsive applications, learning modern web technologies, and solving real-world problems through clean, efficient code.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <NavLink
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              Contact Me
            </NavLink>
          </motion.div>
        </div>

        {/* Profile Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end z-10 w-full max-w-sm md:max-w-md"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-2 bg-slate-200 dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
              {/* Fallback avatar SVG */}
              <svg className="w-1/2 h-1/2 text-slate-400 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {/* Replace the SVG above with an img tag when you add your photo to src/assets/ */}
              {/* <img src="/assets/profile.jpg" alt="Kapil Shah" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span className="text-xl">🚀</span>
              <span className="font-semibold text-sm">React</span>
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -right-6 glass px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
            >
              <span className="text-xl">⚡</span>
              <span className="font-semibold text-sm">Node.js</span>
            </motion.div>
          </div>
        </motion.div>

      </AnimatedSection>
    </div>
  );
};

export default HomePage;
