import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get('/projects');
        setProjects(res.data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        
        // Fallback data
        setProjects([
          {
            _id: '1',
            title: 'Personal Portfolio',
            description: 'A responsive full-stack portfolio built with React, Node, and MongoDB.',
            technologies: ['React', 'Node.js', 'Tailwind'],
            githubUrl: '#',
            liveUrl: '#',
          },
          {
            _id: '2',
            title: 'College Library System',
            description: 'Library management software with a Java Swing GUI and MySQL database.',
            technologies: ['Java', 'MySQL'],
            githubUrl: '#',
            liveUrl: '',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Extract unique technologies for filter buttons
  const allTechnologies = ['All', ...new Set(projects.flatMap((p) => p.technologies))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <div className="py-8">
      <AnimatedSection>
        <SectionHeading 
          title="My Projects" 
          subtitle="A selection of my recent work and college projects."
          centered
        />
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === tech
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                      : 'glass text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:-translate-y-1'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center text-slate-500 dark:text-slate-400 mt-12">
                No projects found for this category.
              </div>
            )}
          </>
        )}
      </AnimatedSection>
    </div>
  );
};

export default ProjectsPage;
