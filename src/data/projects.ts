// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'creative' | 'development' | 'hybrid';
  image: string;
  tags: string[];
  client: string;
  results?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform for Fashion Retailer",
    description: "Built a custom e-commerce solution with seamless checkout experience and inventory management system.",
    type: 'development',
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "React", "Stripe", "Tailwind", "Inventory Management"],
    client: "Fashion Retail Co.",
    results: "40% increase in conversions, 25% reduction in cart abandonment",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "Complete Brand Identity Package",
    description: "Developed comprehensive brand identity including logo, color scheme, typography, and brand guidelines.",
    type: 'creative',
    image: "/api/placeholder/400/300",
    tags: ["Logo Design", "Branding", "Visual Identity", "Style Guide"],
    client: "Tech Startup Inc.",
    results: "Successful $2M funding round following rebrand",
    featured: true
  },
  {
    id: 3,
    title: "Social Media Marketing Campaign",
    description: "Designed and executed a viral social media campaign with engaging content and strategic targeting.",
    type: 'creative',
    image: "/api/placeholder/400/300",
    tags: ["Social Media", "Content Creation", "Strategy", "Analytics"],
    client: "Wellness Brand",
    results: "250% increase in engagement, 15K new followers in 30 days",
    liveUrl: "https://instagram.com/example"
  },
  {
    id: 4,
    title: "Custom React Component Library",
    description: "Created a reusable component library for rapid development of consistent UI across products.",
    type: 'development',
    image: "/api/placeholder/400/300",
    tags: ["React", "TypeScript", "Storybook", "UI Components"],
    client: "SaaS Company",
    results: "Development time reduced by 35%",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 5,
    title: "Product Launch Video Series",
    description: "Produced animated explainer videos for a tech product launch across multiple platforms.",
    type: 'creative',
    image: "/api/placeholder/400/300",
    tags: ["Video Production", "Animation", "Editing", "Motion Graphics"],
    client: "Tech Hardware Company",
    results: "22% higher conversion rate on landing pages with video"
  },
  {
    id: 6,
    title: "API Integration Microservices",
    description: "Developed backend services for seamless third-party API integrations with monitoring and analytics.",
    type: 'development',
    image: "/api/placeholder/400/300",
    tags: ["Node.js", "API", "Microservices", "Docker", "Kubernetes"],
    client: "Financial Services Provider",
    results: "99.9% uptime, 50% faster data processing",
    githubUrl: "https://github.com"
  },
  {
    id: 7,
    title: "Immersive Web Experience",
    description: "Created an interactive web experience combining creative design with technical innovation.",
    type: 'hybrid',
    image: "/api/placeholder/400/300",
    tags: ["React", "Animation", "UI/UX", "WebGL", "Three.js"],
    client: "Travel Company",
    results: "70% longer session duration, 40% lower bounce rate",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 8,
    title: "Mobile App UI/UX Design",
    description: "Designed user interface and experience for a fitness tracking mobile application.",
    type: 'creative',
    image: "/api/placeholder/400/300",
    tags: ["UI Design", "Figma", "Mobile", "User Experience"],
    client: "Fitness Startup",
    results: "4.8/5 app store rating, 100K+ downloads in first month"
  },
  {
    id: 9,
    title: "Enterprise Dashboard System",
    description: "Built a comprehensive dashboard with real-time analytics and reporting capabilities.",
    type: 'development',
    image: "/api/placeholder/400/300",
    tags: ["React", "Data Visualization", "WebSockets", "Chart.js"],
    client: "Enterprise Logistics",
    results: "30% improvement in decision-making speed",
    featured: true
  },
  {
    id: 10,
    title: "Packaging Design System",
    description: "Created cohesive packaging design across product line with sustainable materials focus.",
    type: 'creative',
    image: "/api/placeholder/400/300",
    tags: ["Packaging Design", "Print", "3D Mockups", "Sustainability"],
    client: "Consumer Goods Company",
    results: "15% sales increase attributed to new packaging"
  }
];