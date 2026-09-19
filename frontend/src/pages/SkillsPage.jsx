import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await api.get('/skills');
        setSkills(res.data.data);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Failed to load skills from the server.');
        
        // Fallback data for demonstration if backend is not running
        setSkills([
          { _id: '1', name: 'JavaScript', category: 'Programming', level: 85 },
          { _id: '2', name: 'React', category: 'Web Development', level: 80 },
          { _id: '3', name: 'Node.js', category: 'Web Development', level: 75 },
          { _id: '4', name: 'MongoDB', category: 'Database', level: 70 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="py-8">
      <AnimatedSection>
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise and proficiency levels."
          centered
        />
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(groupedSkills).map(([category, categorySkills], idx) => (
              <div key={category} className="glass p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
                  {category}
                </h3>
                <div className="space-y-6 mt-6">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill._id} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </AnimatedSection>
    </div>
  );
};

export default SkillsPage;
