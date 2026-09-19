import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4"
    >
      <div className="flex justify-between items-end mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {skill.name}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
          className="bg-gradient-to-r from-cyan-500 to-violet-500 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
