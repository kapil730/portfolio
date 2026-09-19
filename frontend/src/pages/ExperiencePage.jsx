import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

const ExperiencePage = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await api.get('/experience');
        setExperience(res.data.data);
      } catch (error) {
        console.error('Error fetching experience:', error);
        
        // Fallback data
        setExperience([
          {
            _id: '1',
            title: 'Freelance Web Developer',
            company: 'Self-Employed',
            startDate: 'Jan 2025',
            endDate: 'Present',
            description: 'Building responsive websites for local businesses using React and Tailwind CSS.',
          },
          {
            _id: '2',
            title: 'Software Developer Intern',
            company: 'Tech Solutions',
            startDate: 'Jun 2024',
            endDate: 'Aug 2024',
            description: 'Assisted in developing REST APIs using Node.js and Express. Participated in daily standups and code reviews.',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="py-8">
      <AnimatedSection>
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and internships."
        />
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="mt-12 max-w-4xl mx-auto">
            {experience.map((item, index) => (
              <TimelineItem key={item._id} data={item} index={index} />
            ))}
            
            {experience.length === 0 && (
              <p className="text-center text-slate-500">More experience coming soon!</p>
            )}
          </div>
        )}
      </AnimatedSection>
    </div>
  );
};

export default ExperiencePage;
