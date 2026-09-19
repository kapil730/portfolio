import { motion } from 'framer-motion';

const TimelineItem = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 sm:left-[7.5rem] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 group-last:bottom-auto group-last:h-full"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] sm:left-[7.1rem] top-8 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.2)] dark:shadow-[0_0_0_4px_rgba(6,182,212,0.1)]"></div>
      
      {/* Date (Left side on desktop, top on mobile) */}
      <div className="sm:absolute sm:left-0 sm:top-7 sm:w-24 sm:text-right mb-2 sm:mb-0">
        <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
          {data.startDate || data.startYear}
          {(data.endDate || data.endYear) && ` - ${data.endDate || data.endYear}`}
        </span>
      </div>
      
      {/* Content Content */}
      <div className="glass rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {data.title || data.degree}
        </h3>
        <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mt-1 mb-4">
          {data.company || data.institution}
          {(data.location || data.university) && ` • ${data.location || data.university}`}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {data.description}
        </p>
        {data.gpa && (
          <p className="mt-3 text-sm font-medium text-violet-500">
            GPA: {data.gpa}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
