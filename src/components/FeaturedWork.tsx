import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';


const FeaturedWork: React.FC = () => {
  const navigate = useNavigate();
  const projects = getFeaturedProjects();

  const handleProjectClick = (projectId: string) => {
    navigate(`/case-study/${projectId}`);
  };

  const handleViewAllClick = () => {
    navigate('/projects');
  };
  return (
    <section id="work" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A selection of projects showcasing my approach to solving complex 
              UX challenges through research-driven design and collaborative methodologies.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-800/0 group-hover:bg-blue-800/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-blue-800" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <div className="inline-flex items-center text-blue-800 font-semibold group-hover:text-blue-900 transition-colors duration-300">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Work Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllClick}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-800 bg-white border-2 border-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;