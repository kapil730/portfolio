import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import CertCard from '../components/CertCard';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

const CertificationsPage = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const res = await api.get('/certifications');
        setCertifications(res.data.data);
      } catch (error) {
        console.error('Error fetching certifications:', error);
        
        // Fallback data
        setCertifications([
          {
            _id: '1',
            title: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2025',
            description: 'Fundamental understanding of IT services and their uses in the AWS Cloud.',
          },
          {
            _id: '2',
            title: 'Full Stack React',
            issuer: 'Udemy',
            date: '2024',
            description: 'Comprehensive course on React, Node.js, and MongoDB.',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return (
    <div className="py-8">
      <AnimatedSection>
        <SectionHeading 
          title="Certifications & Achievements" 
          subtitle="Courses I've completed and awards I've received."
          centered
        />
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <CertCard key={cert._id} cert={cert} index={index} />
            ))}
          </div>
        )}
      </AnimatedSection>
    </div>
  );
};

export default CertificationsPage;
