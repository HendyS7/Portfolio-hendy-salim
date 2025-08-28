export interface NavigationItem {
  label: string;
  href: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  url: string;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  logo: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Navigation data
export const navigationData: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// Hero section data
export const heroData = {
  name: "Hi, I'm Hendy Salim",
  title: 'Junior Frontend Developer',
  subtitle:
    'a frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.',
  stats: [
    { value: '2+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '3', label: 'Projects Delivered' },
    { value: '50', label: 'Clients Worldwide' },
  ] as Statistic[],
  availability: 'Available for Hire',
  ctaText: 'Contact Me',
};

// About section data
export const aboutData = {
  quote:
    'As frontend developers , we bring designs to life with clean, responsive code that blends creativity 🎨 with usability 🌟.',
  principles: [
    {
      title: 'COMPONENT-BASED DEVELOPMENT',
      description:
        'Reusable, scalable code built with modern frameworks like React or Vue.',
      icon: 'settings',
    },
    {
      title: 'PIXEL-PERFECT UI IMPLEMENTATION',
      description:
        'Translating design into high-fidelity user interfaces with attention to detail.',
      icon: 'palette',
    },
    {
      title: 'RESPONSIVE & ACCESSIBLE DESIGN',
      description:
        'Optimized layouts that work across all screen sizes and devices.',
      icon: 'smartphone',
    },
  ],
};

// Skills section data
export const skillsData = {
  title: 'Code, Design, and Everything in Between',
  subtitle:
    'These are the technologies that power my workflow and bring ideas to life.',
  skills: [
    {
      name: 'HTML',
      icon: 'html5',
      description:
        'Creating semantic, accessible HTML structure for web content.',
    },
    {
      name: 'CSS',
      icon: 'css3',
      description:
        'Styling web content with responsive, visually appealing designs.',
    },
    {
      name: 'JavaScript',
      icon: 'javascript',
      description:
        'Adding interactivity and dynamic functionality to web applications.',
    },
    {
      name: 'React',
      icon: 'react',
      description:
        'Building reusable, component-based user interfaces for web applications.',
    },
    {
      name: 'NextJS',
      icon: 'NextJS',
      description:
        'React framework for fast, server-rendered, and static web apps.',
    },
  ] as Skill[],
};

// Comparison section data
export const comparisonData = {
  title: 'More Than Just Code',
  subtitle:
    'We care about design, performance, and user experience all in one.',
  withMe: {
    title: 'With Me',
    strengths: [
      'React Expert',
      'Precise Website Implementation',
      'Typescript Proficiency',
      'Clean, Maintainable Code',
      'Responsive Website Development',
      'Performance Optimization',
      'UI Design Proficiency (Figma)',
    ],
  },
  anotherTalent: {
    title: 'Another Talent',
    weaknesses: [
      'Basic React Knowledge',
      'Inconsistent Design Translation',
      'Little to no Typescript Knowledge',
      'Unstructured Code',
      'Inconsistent Responsiveness',
      'Slow and Heavy Websites',
      'No Design Skills',
    ],
  },
};

// Projects section data
export const projectsData = {
  title: 'Design to Code Accuracy',
  subtitle:
    'We translate design mockups into pixel-perfect, responsive components, ensuring a smooth user experience across all devices.',
  projects: [
    {
      id: '1',
      title: 'Portfolio 1',
      category: 'Web Development - Landing Page',
      image: '/images/Portfolio_1_Landing_page.jpg',
      description: 'Portfolio 1',
      url: 'https://challenge7-three.vercel.app/',
    },
    {
      id: '2',
      title: 'Portfolio 2',
      category: 'Web Development - Music Player',
      image: '/images/Portofolio_2_Music_Player.jpg',
      description: 'Portfolio 2',
      url: 'https://challenge11-ruddy.vercel.app/',
    },
    {
      id: '3',
      title: 'Portfolio 3',
      category: 'Web Development - Blog',
      image: '/images/Portofolio_3_Blog.jpg',
      description: 'Portfolio 3',
      url: 'https://challenge12hendy7.vercel.app/',
    },
  ] as Project[],
};

// Experience section data
export const experienceData = {
  title: 'Experiences That Shaped Me!',
  subtitle:
    'From startups to side projects, every step has been a chance to learn, build, and level up.',
  experiences: [
    {
      year: '2023 - Present',
      role: 'Frontend Developer',
      company: 'Airbnb',
      logo: '/images/airbnb-logo.png',
      description:
        'Building responsive websites with modern frameworks, seamless integration, optimized performance, and clean code.',
    },
    {
      year: '2022 - Present',
      role: 'Frontend Developer',
      company: 'Airtasker',
      logo: '/images/airtasker-logo.png',
      description:
        'Building responsive websites with modern frameworks, seamless integration, optimized performance, and clean code.',
    },
    {
      year: '2021 - Present',
      role: 'Frontend Developer',
      company: 'Slack',
      logo: '/images/slack-logo.png',
      description:
        'Building responsive websites with modern frameworks, seamless integration, optimized performance, and clean code.',
    },
  ] as Experience[],
};

// Testimonials section data
export const testimonialsData = {
  title: 'What They Say About Working With Me',
  subtitle:
    "Kind words from clients, teammates, and mentors I've collaborated with on various projects.",
  testimonials: [
    {
      id: '1',
      quote:
        "Working with Hendy Salim was a smooth experience from start to finish. He translated our design into clean, responsive code and even suggested improvements we hadn't thought of. Highly recommended!",
      author: {
        name: 'Sarah Tan',
        title: 'Product Manager',
        company: 'Procode',
        avatar: '/images/woman-portrait.png',
      },
      rating: 5,
    },
    {
      id: '2',
      quote:
        'Hendy delivered beyond expectations. The codebase is clean, maintainable, and the UI matches our Figma designs perfectly across breakpoints.',
      author: {
        name: 'Liam Brooks',
        title: 'Engineering Lead',
        company: 'Finovate',
        avatar: '/images/default-portrait.png',
      },
      rating: 5,
    },
  ] as Testimonial[],
};

// FAQ section data
export const faqData = {
  title: "Let's Clear Things Up",
  subtitle:
    "I've answered a few questions that usually come up when working with a frontend developer like me.",
  faqs: [
    {
      id: '1',
      question: 'What technologies do you work with?',
      answer:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, Typescript, and working with APIs.',
    },
    {
      id: '2',
      question: 'Do you work on freelance or remote projects?',
      answer:
        "Yes, I'm available for both freelance and remote projects. I have experience working with clients worldwide and can adapt to different time zones and project requirements.",
    },
    {
      id: '3',
      question: 'Can you convert Figma or Sketch designs into code?',
      answer:
        'Absolutely! I specialize in translating design mockups into pixel-perfect, responsive code. I have extensive experience working with Figma designs and ensuring the final product matches the design exactly.',
    },
    {
      id: '4',
      question: 'Do you collaborate with backend developers or teams?',
      answer:
        "Yes, I frequently collaborate with backend developers and design teams. I'm comfortable working in cross-functional teams and can integrate with various backend technologies and APIs.",
    },
    {
      id: '5',
      question: 'Are you available for full-time roles?',
      answer:
        "I'm currently open to both full-time opportunities and freelance projects. I'm particularly interested in roles that allow me to work on challenging frontend projects and continue growing my skills.",
    },
  ] as FAQ[],
};

// Contact section data
export const contactData = {
  title: "Let's Work Together",
  subtitle:
    "Have a project in mind or just want to say hi? Drop me a message — I'd love to hear from you.",
  ctaText: "Let's Talk",
};

// Social media links
export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/16v684VLN9/',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hendy_salim8?igsh=MXJ6eGFjYmhsaGV1ZA==',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hendy-salim-61007454?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: 'linkedin',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@hendy_8888?_t=ZS-8zGDMyTcLq5&_r=1',
    icon: 'tiktok',
  },
];

// Footer data
export const footerData = {
  copyright: '© 2025 Hendy Salim. All rights reserved.',
  socialLinks,
};
