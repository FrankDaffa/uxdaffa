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
    title: 'Vitumark: Tanzanian E-commerce Platform',
    description: 'Building an e-commerce experience for Tanzania with localized payments, delivery, and mobile-first design.',
    tags: ['E-commerce', 'Localization', 'Conversion Optimization'],
    imageAlt: 'Mobile checkout interface with local payment methods',
    imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=450',
    category: 'featured',
    year: '2023',
    client: 'Safrada Co. Ltd.',
    duration: '6 months',
    role: 'UX/UI Designer, E-Commerce Strategy, Research & Localization',
    overview: 'Vitumark is an online electronics store in Tanzania, operated under Safrada Co. Ltd. The platform focuses on accessible technology products such as audio devices, laptops, and storage media. I designed and built Vitumark with the goal of simplifying digital shopping for Tanzanian customers, while addressing local challenges in payments, logistics, and trust.',
    challenge: 'Most global e-commerce solutions don\'t fully serve Tanzanian users due to: Limited local payment integration (mobile money being the dominant method), lack of delivery infrastructure adapted to buses/parcel services, complex checkout flows designed for markets with credit card dominance, and a gap in trust and accessibility for first-time online shoppers.',
    solution: 'Created a custom checkout system with ClickPesa-powered payments for local mobile money, localized delivery using regional bus & parcel models, guest-friendly shopping without account requirements, and mobile-optimized design for smartphone-first experience.',
    results: [
      'Frictionless shopping experience for Tanzanian users compared to competitors',
      'Improved trust and accessibility through clear delivery and local payments',
      'Successful launch with streamlined user experience',
      'Foundation established for growth in the local market'
    ],
    process: [
      {
        title: 'Research & Insights',
        description: 'Analyzed pain points of Tanzanian users in online shopping. Identified trust, payment flexibility, and simplicity as top priorities. Studied competitors (local and regional) to find gaps in usability and checkout design.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=450'
      },
      {
        title: 'Information Architecture',
        description: 'Designed a minimalist catalog structure with clear categories. Allowed shopping without account creation to lower entry barriers.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=450'
      },
      {
        title: 'Checkout Experience Design',
        description: 'Designed a custom checkout flow alongside Wix\'s native checkout, optimized for mobile money payments through ClickPesa integration, non-logged-in guest checkout, fewer fields with just essentials, and clear delivery expectations.',
        image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=450'
      },
      {
        title: 'Visual Design & Testing',
        description: 'Created a clean, trustworthy brand identity with bold typography and mobile-first responsive design. Conducted pilot testing with Tanzanian users and iterated the checkout flow to reduce friction.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=450'
      }
    ],
    testimonial: {
      quote: "Localization isn't just translation—it's about understanding payment habits, delivery norms, and trust factors. In emerging markets, simplicity builds adoption.",
      author: "Frank Daffa",
      position: "Lead Designer & Founder"
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