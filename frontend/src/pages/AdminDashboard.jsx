import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { FiLogOut, FiSettings, FiFileText, FiDatabase } from 'react-icons/fi';

const AdminDashboard = () => {
  const { admin, logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully', 'success');
    navigate('/');
  };

  const adminCards = [
    { title: 'Manage Projects', icon: <FiFileText size={24} />, count: 5 },
    { title: 'Manage Skills', icon: <FiDatabase size={24} />, count: 12 },
    { title: 'Manage Experience', icon: <FiFileText size={24} />, count: 3 },
    { title: 'Manage Education', icon: <FiFileText size={24} />, count: 2 },
  ];

  return (
    <div className="py-8 min-h-[calc(100vh-16rem)]">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-200 dark:border-slate-700 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Welcome back, <span className="font-semibold text-cyan-600 dark:text-cyan-400">{admin?.username}</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:text-cyan-500 transition-colors">
              <FiSettings /> Settings
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-800/50 transition-colors"
            >
              <FiLogOut /> Logout
            </button>
          </div>
        </div>

        <SectionHeading title="Quick Stats" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {adminCards.map((card, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl hover:border-cyan-500/50 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {card.count}
                </span>
              </div>
              <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 transition-colors">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Recent Contact Messages
          </h3>
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
            No new messages.
          </div>
        </div>

      </AnimatedSection>
    </div>
  );
};

export default AdminDashboard;
