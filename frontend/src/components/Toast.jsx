import { useToast } from '../hooks/useToast';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi';

const Toast = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 left-4 z-[60] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border min-w-[300px] ${
              toast.type === 'error'
                ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                : 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
            }`}
          >
            {toast.type === 'error' ? (
              <FiXCircle className="text-xl shrink-0" />
            ) : (
              <FiCheckCircle className="text-xl shrink-0" />
            )}
            
            <p className="flex-1 text-sm font-medium">{toast.message}</p>
            
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 opacity-70 hover:opacity-100 transition-opacity"
            >
              <FiX size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
