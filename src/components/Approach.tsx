import React from 'react';
import { Users, Target, Lightbulb, Zap } from 'lucide-react';

interface MethodologyBlock {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const methodologies: MethodologyBlock[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Design Sprints',
    description: 'Rapid prototyping and validation through structured 5-day processes that align teams and validate ideas quickly.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Facilitation',
    description: 'Leading cross-functional workshops and design sessions that foster collaboration and breakthrough thinking.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'User Research',
    description: 'Evidence-based design decisions through comprehensive user interviews, testing, and behavioral analysis.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Agile Integration',
    description: 'Seamless UX integration within agile development cycles, ensuring design consistency and team velocity.'
  }
];

const Approach: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Approach
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            I believe great design emerges from collaborative processes that unite 
            teams around user needs and business objectives.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((method, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                {method.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20 pt-20 border-t border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              From Discovery to Delivery
            </h3>
            <p className="text-lg text-gray-600">
              A proven methodology that transforms complex challenges into elegant solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Discover', 'Define', 'Design', 'Deliver'].map((phase, index) => (
              <div key={phase} className="text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-800 text-white font-bold text-lg rounded-full mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {phase}
                </h4>
                <p className="text-gray-600 text-sm">
                  {index === 0 && "Research & understanding"}
                  {index === 1 && "Problem framing & strategy"}
                  {index === 2 && "Ideation & prototyping"}
                  {index === 3 && "Testing & implementation"}
                </p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full">
                    <div className="h-0.5 bg-blue-200 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;