'use client';
import Link from 'next/link';

export default function DevelopmentPage() {
  const services = [
    {
      title: "Web Development",
      description: "We build fast, responsive, and accessible websites that provide exceptional user experiences.",
      icon: "🌐",
      features: ["Responsive Design", "Performance Optimization", "SEO Best Practices", "Cross-browser Compatibility"]
    },
    {
      title: "Mobile App Development",
      description: "We create native and cross-platform mobile applications that deliver seamless experiences.",
      icon: "📱",
      features: ["iOS & Android", "UI/UX Design", "API Integration", "App Store Deployment"]
    },
    {
      title: "E-commerce Solutions",
      description: "We develop custom online stores with seamless checkout and inventory management systems.",
      icon: "🛒",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Security Compliance"]
    },
    {
      title: "API Integration",
      description: "We connect your systems with third-party services and streamline your workflows.",
      icon: "🔌",
      features: ["RESTful APIs", "Webhooks", "Data Synchronization", "Documentation"]
    }
  ];

  const technologies = [
    { name: "Next.js", description: "React framework for production" },
    { name: "React", description: "Library for building user interfaces" },
    { name: "TypeScript", description: "Typed superset of JavaScript" },
    { name: "Node.js", description: "JavaScript runtime environment" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "MongoDB", description: "NoSQL database program" },
    { name: "PostgreSQL", description: "Relational database system" },
    { name: "AWS", description: "Cloud computing services" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with same background as homepage */}
      <section className="hero-background py-20 relative overflow-hidden">
        {/* Subtle creative pattern overlay */}
        <div className="absolute inset-0 creative-pattern opacity-50"></div>
        
        {/* Subtle code pattern overlay */}
        <div className="absolute inset-0 code-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Software Development
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-delay opacity-90 hover:opacity-100 transition-opacity duration-300">
            We build robust, scalable, and user-friendly software solutions that solve real business problems.
          </p>
        </div>
      </section>

      {/* Services Grid with hero background */}
      <section className="py-16 hero-background relative overflow-hidden">
        {/* Subtle creative pattern overlay */}
        <div className="absolute inset-0 creative-pattern opacity-50"></div>
        
        {/* Subtle code pattern overlay */}
        <div className="absolute inset-0 code-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:bg-opacity-20 transition-all duration-500 transform hover:scale-105 border border-white border-opacity-20 animate-slide-up-staggered"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="text-4xl mb-4 animate-bounce-subtle">{service.icon}</div>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-white opacity-90 mb-4 hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 font-semibold"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section with clean white background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up-staggered"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with light background */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                num: "1", 
                title: "Discovery & Planning", 
                desc: "We define requirements, scope, and create a detailed project plan" 
              },
              { 
                num: "2", 
                title: "Development & Testing", 
                desc: "We build with quality code, test thoroughly, and iterate based on feedback" 
              },
              { 
                num: "3", 
                title: "Deployment & Support", 
                desc: "We launch your solution and provide ongoing maintenance and support" 
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up-staggered hover:scale-105 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1 + 0.5}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span className="text-2xl font-bold">{step.num}</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with hero background */}
      <section className="py-16 hero-background relative overflow-hidden">
        {/* Subtle creative pattern overlay */}
        <div className="absolute inset-0 creative-pattern opacity-50"></div>
        
        {/* Subtle code pattern overlay */}
        <div className="absolute inset-0 code-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Ready to build something amazing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-delay opacity-90 hover:opacity-100 transition-opacity duration-300">
            Let's turn your idea into a powerful digital solution that drives your business forward.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up-staggered {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-slide-up-staggered {
          animation: slide-up-staggered 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}