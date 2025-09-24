export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageAlt: string;
  imageUrl: string;
  category: 'featured' | 'web' | 'mobile' | 'research';
  year: string;
  client?: string;
  duration?: string;
  role?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  process?: {
    title: string;
    description: string;
    image?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'Dynatables: Attributes Case Study',
    description: 'Reimagining data visualization through interactive table components that adapt to user behavior and context.',
    tags: ['UX Research', 'Interaction Design', 'Data Visualization'],
    imageAlt: 'Dynamic table interface showing interactive data attributes',
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
    category: 'featured',
    year: '2024',
    client: 'Enterprise Software Company',
    duration: '3 months',
    role: 'Lead UX Designer',
    overview: 'Dynatables was born from the need to make complex data more accessible and actionable for enterprise users. Traditional data tables were static and overwhelming, leading to poor user adoption and decision-making delays.',
    challenge: 'Enterprise users were struggling with static data tables that contained hundreds of attributes, making it difficult to find relevant information quickly. The existing interface had a 23% task completion rate and users spent an average of 8 minutes trying to locate specific data points.',
    solution: 'I designed an intelligent table system that learns from user behavior and contextually surfaces the most relevant attributes. The solution included smart filtering, personalized column arrangements, and progressive disclosure patterns.',
    results: [
      'Increased task completion rate from 23% to 87%',
      'Reduced average task time from 8 minutes to 2.3 minutes',
      'Improved user satisfaction score from 2.1 to 4.6 out of 5',
      'Decreased support tickets related to data navigation by 65%'
    ],
    process: [
      {
        title: 'Discovery & Research',
        description: 'Conducted 15 user interviews and analyzed 6 months of usage data to understand pain points and user mental models.'
      },
      {
        title: 'Ideation & Prototyping',
        description: 'Created multiple interaction concepts and tested them with users through rapid prototyping sessions.'
      },
      {
        title: 'Design & Testing',
        description: 'Developed high-fidelity designs and conducted usability testing with 25 participants across different user segments.'
      },
      {
        title: 'Implementation & Iteration',
        description: 'Worked closely with the development team and iterated based on real user feedback post-launch.'
      }
    ],
    testimonial: {
      quote: "The new table interface has completely transformed how our team works with data. What used to take us hours now takes minutes.",
      author: "Sarah Chen",
      position: "Senior Data Analyst"
    }
  },
  {
    id: '2',
    title: 'Vitumark: Custom Checkout',
    description: 'Streamlining the e-commerce experience with a localized checkout flow for Tanzanian markets.',
    tags: ['E-commerce', 'Localization', 'Conversion Optimization'],
    imageAlt: 'Mobile checkout interface with local payment methods',
    imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
    category: 'featured',
    year: '2023',
    client: 'Vitumark E-commerce',
    duration: '4 months',
    role: 'UX/UI Designer & Researcher',
    overview: 'Vitumark needed a checkout experience tailored specifically for the Tanzanian market, considering local payment methods, cultural preferences, and mobile-first usage patterns.',
    challenge: 'The existing checkout had a 68% abandonment rate, primarily due to unfamiliar payment methods, complex forms, and lack of trust indicators relevant to the local market.',
    solution: 'Designed a culturally-informed checkout flow that integrated local payment methods like M-Pesa, simplified form fields, and included trust-building elements specific to Tanzanian e-commerce expectations.',
    results: [
      'Reduced checkout abandonment from 68% to 34%',
      'Increased mobile conversion rate by 156%',
      'Improved customer satisfaction scores by 89%',
      'Generated 23% increase in overall revenue'
    ],
    process: [
      {
        title: 'Market Research',
        description: 'Conducted extensive research on Tanzanian e-commerce behaviors, payment preferences, and cultural considerations.'
      },
      {
        title: 'User Journey Mapping',
        description: 'Mapped the entire customer journey from product discovery to post-purchase, identifying key friction points.'
      },
      {
        title: 'Localized Design',
        description: 'Created designs that incorporated local payment methods, appropriate imagery, and culturally relevant trust signals.'
      },
      {
        title: 'Testing & Optimization',
        description: 'Conducted A/B tests and user testing sessions with local users to validate and refine the design.'
      }
    ],
    testimonial: {
      quote: "The new checkout process feels like it was made specifically for us. It's so much easier to complete purchases now.",
      author: "James Mwangi",
      position: "Local Customer"
    }
  },
  {
    id: '3',
    title: 'Tanzanian E-commerce Platform',
    description: 'Building trust and accessibility in emerging markets through culturally-informed design patterns.',
    tags: ['Market Research', 'Cultural Design', 'Mobile-first'],
    imageAlt: 'E-commerce platform optimized for Tanzanian users',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
    category: 'featured',
    year: '2023',
    client: 'Regional E-commerce Startup',
    duration: '6 months',
    role: 'Lead UX Designer & Cultural Consultant',
    overview: 'A comprehensive e-commerce platform designed from the ground up for the Tanzanian market, focusing on mobile-first experiences and local business practices.',
    challenge: 'Creating an e-commerce platform that would gain trust in a market where online shopping was still emerging, while accommodating diverse literacy levels and varying internet connectivity.',
    solution: 'Developed a platform with strong visual hierarchy, voice navigation options, offline capabilities, and integrated community features that aligned with local shopping behaviors.',
    results: [
      'Achieved 45% user adoption rate in first 6 months',
      'Maintained 4.2/5 app store rating',
      'Processed over $2M in transactions in year one',
      'Expanded to 3 additional East African markets'
    ]
  },
  {
    id: '4',
    title: 'FinTech Mobile Banking App',
    description: 'Designing a secure and intuitive mobile banking experience for millennials and Gen Z users.',
    tags: ['Mobile Design', 'FinTech', 'Security UX'],
    imageAlt: 'Modern mobile banking interface',
    imageUrl: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
    category: 'mobile',
    year: '2024',
    client: 'Digital Bank Startup',
    duration: '5 months',
    role: 'Senior UX Designer',
    overview: 'A next-generation mobile banking app that prioritizes user experience while maintaining the highest security standards.',
    challenge: 'Balancing security requirements with user-friendly design, while creating an interface that appeals to younger demographics who expect seamless digital experiences.',
    solution: 'Created an intuitive interface with biometric authentication, smart categorization, and personalized financial insights, all wrapped in a modern, accessible design.',
    results: [
      'Achieved 4.8/5 app store rating',
      'Reduced customer support calls by 40%',
      'Increased daily active users by 78%',
      'Won "Best Mobile Banking App" award'
    ]
  },
  {
    id: '5',
    title: 'Healthcare Provider Portal',
    description: 'Streamlining patient management and care coordination for healthcare professionals.',
    tags: ['Healthcare', 'Enterprise', 'Workflow Design'],
    imageAlt: 'Healthcare provider dashboard interface',
    imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
    category: 'web',
    year: '2023',
    client: 'Regional Healthcare Network',
    duration: '8 months',
    role: 'UX Lead & Research Coordinator',
    overview: 'A comprehensive portal system designed to improve efficiency and patient outcomes for healthcare providers.',
    challenge: 'Healthcare providers were using multiple disconnected systems, leading to inefficiencies and potential patient safety issues.',
    solution: 'Designed a unified portal that integrates patient records, scheduling, communication, and care coordination tools in a single, intuitive interface.',
    results: [
      'Reduced administrative time by 35%',
      'Improved patient satisfaction scores by 28%',
      'Decreased medical errors by 15%',
      'Saved healthcare network $1.2M annually'
    ]
  },
  {
    id: '6',
    title: 'EdTech Learning Platform',
    description: 'Creating engaging online learning experiences for K-12 students and educators.',
    tags: ['Education', 'Gamification', 'Accessibility'],
    imageAlt: 'Interactive learning platform interface',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
    category: 'web',
    year: '2024',
    client: 'Educational Technology Company',
    duration: '4 months',
    role: 'UX Designer & Learning Experience Consultant',
    overview: 'An interactive learning platform that makes education engaging and accessible for students with diverse learning needs.',
    challenge: 'Traditional online learning platforms had low engagement rates and didn\'t accommodate different learning styles and abilities.',
    solution: 'Designed a gamified learning experience with multiple interaction modes, progress tracking, and adaptive content delivery.',
    results: [
      'Increased student engagement by 145%',
      'Improved learning outcomes by 32%',
      'Achieved 98% accessibility compliance',
      'Adopted by 150+ schools nationwide'
    ]
  }
];

export const getFeaturedProjects = (): Project[] => {
  return allProjects.filter(project => project.category === 'featured');
};

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return allProjects;
  return allProjects.filter(project => project.category === category);
};