import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent mb-2">
              Kapil Shah
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              BSc IT Student & Aspiring Software Developer building modern web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/kapilshah"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/kapilshah"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:kapil@example.com"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-500">
              <NavLink to="/admin/login" className="hover:text-cyan-500 transition-colors mr-2">Admin Login</NavLink>
              | &copy; {currentYear} Kapil Shah. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
