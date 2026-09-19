import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

const EducationPage = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await api.get('/education');
        setEducation(res.data.data);
      } catch (error) {
        console.error('Error fetching education:', error);
        
        // Fallback data
        setEducation([
          {
            _id: '1',
            degree: 'BSc in Information Technology',
            institution: 'Example College',
            university: 'Example University',
            startYear: '2023',
            endYear: '2026',
            description: 'Studying core IT subjects including Data Structures, Algorithms, Web Development, and Networking.',
            gpa: '8.5 / 10',
          },
          {
            _id: '2',
            degree: 'Higher Secondary Certificate',
            institution: 'Example School',
            startYear: '2021',
            endYear: '2023',
            description: 'Science stream with focus on Computer Science.',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return (
    <div className="py-8">
      <AnimatedSection>
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications."
        />
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="mt-12 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <TimelineItem key={item._id} data={item} index={index} />
            ))}
          </div>
        )}
      </AnimatedSection>
    </div>
  );
};

export default EducationPage;
