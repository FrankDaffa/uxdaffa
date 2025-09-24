import React from 'react';
import { Award, BookOpen, Coffee, Globe } from 'lucide-react';

const skills = [
  'Figma', 'Framer', 'Jira', 'Miro', 'Adobe Creative Suite', 'Sketch',
  'InVision', 'Wordpress', 'Vibe Coding', 'HTML/CSS'
];

const highlights = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Experience',
    description: '5+ years designing for diverse markets across 2 continents'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Entrepreneur',
    description: 'Successfully digitalized family business'
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
              {/* Professional Headshot */}
              <div className="aspect-[4/5] rounded-2xl shadow-xl relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=750"
                  alt="Professional headshot of UX/UI Designer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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
                    I’m a UX/UI designer with a background in Human-Computer Interaction, passionate about creating digital experiences that bridge people and technology. My work spans enterprise software, e-commerce, and civic tech, always with a focus on clarity, usability, and impact.
                  </p>
                  <p>
                    At Jedox, I design solutions that make planning and reporting more intuitive—ranging from a cross-platform mobile app and ESG Reporting tools to the Best Practice Accelerator and new canvas chart experiences. Most recently, I’ve been leading the UX for Dynatables, a feature that helps users analyze and plan data with greater flexibility.
                  </p>
                  <p>
                    Earlier in my career, I contributed to civic tech projects at Democracy Lab and built a foundation in program management and communications through international development and investor network initiatives. These experiences continue to shape how I design with both users and stakeholders in mind.
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