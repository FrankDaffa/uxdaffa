import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import { allProjects, getProjectsByCategory } from '../data/projects';

const categories = [
  { id: 'all', label: 'All Projects', count: allProjects.length },
  { id: 'featured', label: 'Featured', count: allProjects.filter(p => p.category === 'featured').length },
  { id: 'web', label: 'Web Design', count: allProjects.filter(p => p.category === 'web').length },
  { id: 'mobile', label: 'Mobile Apps', count: allProjects.filter(p => p.category === 'mobile').length },
  { id: 'research', label: 'Research', count: allProjects.filter(p => p.category === 'research').length }
];

const AllProjects: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = getProjectsByCategory(activeCategory);

  const handleProjectClick = (projectId: string) => {
    navigate(`/case-study/${projectId}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                All Projects
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A comprehensive collection of my design work spanning UX research, 
                interface design, and product strategy across various industries and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-6 px-6 lg:px-8 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-800 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-800 font-medium"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filter Projects
              </button>
            </div>

            <div className="text-sm text-gray-500">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-blue-800 text-white'
                        : 'text-gray-600 hover:text-blue-800 hover:bg-white'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-800/0 group-hover:bg-blue-800/10 transition-colors duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-800/80 backdrop-blur-sm rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300 flex-1">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Project Meta */}
                    {project.client && (
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500">
                          <span className="font-medium">Client:</span> {project.client}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category to see more projects.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;