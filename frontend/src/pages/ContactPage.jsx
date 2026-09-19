import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="py-8">
      <AnimatedSection>
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Feel free to reach out!"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl">
                <FiMail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">Email</h3>
                <a href="mailto:kapil@example.com" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors">
                  kapil@example.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-xl">
                <FiPhone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">Phone</h3>
                <a href="tel:+911234567890" className="text-slate-600 dark:text-slate-400 hover:text-violet-500 transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <FiMapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
