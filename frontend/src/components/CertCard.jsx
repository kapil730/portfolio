import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const CertCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass p-6 rounded-2xl flex gap-4 items-start group hover:border-cyan-500/50 transition-colors"
    >
      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
        <FiAward size={24} />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
          {cert.title}
        </h3>
        <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-2">
          {cert.issuer} {cert.date && `• ${cert.date}`}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
          {cert.description}
        </p>
        
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
          >
            View Credential <FiExternalLink />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertCard;
