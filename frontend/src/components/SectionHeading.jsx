const SectionHeading = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
