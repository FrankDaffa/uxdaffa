import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Quote } from 'lucide-react';
import { getProjectById, allProjects } from '../data/projects';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = id ? getProjectById(id) : undefined;
  
  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="text-blue-800 hover:text-blue-900 font-medium"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = allProjects.findIndex(p => p.id === id);
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];
  const prevProject = allProjects[currentIndex - 1] || allProjects[allProjects.length - 1];

  const handleBackClick = () => {
    navigate('/projects');
  };

  const handleNextProject = () => {
    navigate(`/case-study/${nextProject.id}`);
  };

  const handlePrevProject = () => {
    navigate(`/case-study/${prevProject.id}`);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative">
        {/* Navigation */}
        <div className="absolute top-8 left-6 lg:left-8 z-10">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-800 hover:text-blue-900 font-medium rounded-lg shadow-sm transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            All Projects
          </button>
        </div>

        {/* Hero Image */}
        <div className="aspect-[21/9] relative overflow-hidden bg-gray-100">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-gray-50 rounded-2xl">
            {project.year && (
              <div className="text-center">
                <Calendar className="w-6 h-6 text-blue-800 mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Year</div>
                <div className="font-semibold text-gray-900">{project.year}</div>
              </div>
            )}
            {project.duration && (
              <div className="text-center">
                <Clock className="w-6 h-6 text-blue-800 mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Duration</div>
                <div className="font-semibold text-gray-900">{project.duration}</div>
              </div>
            )}
            {project.role && (
              <div className="text-center">
                <User className="w-6 h-6 text-blue-800 mx-auto mb-2" />
                <div className="text-sm text-gray-500 mb-1">Role</div>
                <div className="font-semibold text-gray-900">{project.role}</div>
              </div>
            )}
            {project.client && (
              <div className="text-center">
                <div className="w-6 h-6 bg-blue-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500 mb-1">Client</div>
                <div className="font-semibold text-gray-900">{project.client}</div>
              </div>
            )}
          </div>

          {/* Overview */}
          {project.overview && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.overview}
              </p>
            </div>
          )}

          {/* Image Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
                  alt="Homepage Design - Clean e-commerce layout"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
                  alt="Product Detail Page - Electronics showcase"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
                  alt="Checkout Flow - Mobile payment interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
                  alt="Mobile Experience - Responsive design showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Challenge */}
          {project.challenge && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* Process */}
          {project.process && project.process.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Design Process</h2>
              <div className="space-y-8">
                {project.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-800 text-white font-bold text-lg rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Results & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-16">
              <div className="bg-gray-50 p-8 rounded-2xl relative">
                <Quote className="w-12 h-12 text-blue-800/20 absolute top-6 left-6" />
                <div className="relative z-10">
                  <blockquote className="text-xl text-gray-800 leading-relaxed mb-6 pl-8">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="pl-8">
                    <div className="font-semibold text-gray-900">
                      {project.testimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {project.testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation to Other Projects */}
      <div className="border-t border-gray-100 py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <button
              onClick={handlePrevProject}
              className="group text-left p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center text-blue-800 mb-3">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Previous Project</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
                {prevProject.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {prevProject.description}
              </p>
            </button>

            {/* Next Project */}
            <button
              onClick={handleNextProject}
              className="group text-left p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-end text-blue-800 mb-3">
                <span className="font-medium">Next Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-200 text-right">
                {nextProject.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2 text-right">
                {nextProject.description}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;