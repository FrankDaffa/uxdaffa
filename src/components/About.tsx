import React from 'react';
import { Award, BookOpen, Coffee, Globe } from 'lucide-react';

const skills = [
  'Figma', 'Framer', 'Jira', 'Miro', 'Adobe Creative Suite', 'Sketch',
  'InVision', 'Principle', 'After Effects', 'HTML/CSS', 'React', 'Vue.js'
];

const highlights = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Experience',
    description: '5+ years designing for diverse markets across 3 continents'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Industry Recognition',
    description: 'Featured in UX Design Awards and Design System showcases'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Thought Leadership',
    description: 'Regular speaker at design conferences and UX meetups'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Freelance Founder',
    description: 'Successfully transitioned from in-house to independent practice'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12 lg:gap-16">
          {/* Image Column */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative">
              {/* Professional Headshot Placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-800/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-blue-800">
                    <div className="w-24 h-24 bg-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">JD</span>
                    </div>
                    <p className="font-medium">Professional Headshot</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">50+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    My journey in UX design began as an in-house designer at a Fortune 500 
                    company, where I discovered my passion for bridging the gap between 
                    complex business requirements and intuitive user experiences.
                  </p>
                  <p>
                    After leading design initiatives that improved user engagement by 300% 
                    and reduced support tickets by 60%, I made the transition to freelance 
                    consulting to help more organizations unlock the power of user-centered design.
                  </p>
                  <p>
                    Today, I specialize in facilitating design sprints, conducting user research, 
                    and building design systems that scale. My approach combines rigorous research 
                    methods with collaborative workshop techniques to ensure every stakeholder 
                    is aligned around user needs.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 hover:text-blue-800 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-800 hover:bg-blue-900 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Let's Work Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;