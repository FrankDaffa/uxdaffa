import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10 xl:col-span-8">
            <div className="space-y-8">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                I design intuitive{' '}
                <span className="text-blue-800">digital experiences</span>{' '}
                that empower teams and users.
              </h1>

              {/* Subtext */}
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                  Specializing in Human-Computer Interaction, agile UX methodologies, 
                  and cross-functional team facilitation to create meaningful, 
                  user-centered solutions.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                  From design sprints to user research, I bridge the gap between 
                  business objectives and user needs through collaborative design processes.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={scrollToWork}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-800 hover:bg-blue-900 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-800 bg-white border-2 border-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Let's Collaborate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-10 transform translate-y-1/2"></div>
    </section>
  );
};

export default Hero;