const LoadingSpinner = ({ fullScreen = false }) => {
  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-slate-200 dark:border-slate-700 border-t-cyan-500 rounded-full animate-spin"></div>
      <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">Loading...</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return <div className="flex justify-center py-12">{spinner}</div>;
};

export default LoadingSpinner;
