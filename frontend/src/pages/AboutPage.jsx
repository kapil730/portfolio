import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { FiCode, FiDatabase, FiServer, FiLayout } from 'react-icons/fi';

const AboutPage = () => {
  const interests = [
    { icon: <FiLayout size={24} />, title: 'Frontend Development', desc: 'Building responsive, accessible, and dynamic user interfaces.' },
    { icon: <FiServer size={24} />, title: 'Backend APIs', desc: 'Designing secure and scalable RESTful APIs.' },
    { icon: <FiDatabase size={24} />, title: 'Database Design', desc: 'Structuring data efficiently using SQL and NoSQL databases.' },
    { icon: <FiCode size={24} />, title: 'Problem Solving', desc: 'Writing clean, maintainable, and optimized code.' },
  ];

  return (
    <div className="py-8">
      <AnimatedSection>
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better, my background, and what I do."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          
          {/* Bio Section */}
          <div className="glass p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                Hello! I'm Kapil Shah, a passionate BSc Information Technology student with a strong drive to become a successful Software Developer.
              </p>
              <p>
                My journey in tech started with a curiosity about how websites work, which led me to dive deep into HTML, CSS, and JavaScript. Since then, I've expanded my skillset to include modern frameworks like React and backend technologies like Node.js and Express.
              </p>
              <p>
                I thrive in environments where I can solve complex problems and build applications that make a positive impact. Whether it's crafting a pixel-perfect UI or optimizing database queries, I take pride in the details.
              </p>
              <p>
                Currently, I am focused on mastering full-stack web development and exploring cloud technologies. I am always open to new opportunities, internships, and freelance projects to apply my knowledge in real-world scenarios.
              </p>
            </div>
          </div>

          {/* Interests Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              What I Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {interests.map((item, index) => (
                <div key={index} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform shadow-sm">
                  <div className="text-cyan-500 mb-4 bg-cyan-50 dark:bg-cyan-900/20 w-12 h-12 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
