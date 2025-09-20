// src/components/PortfolioGrid.tsx
'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

type FilterType = 'all' | 'creative' | 'development' | 'hybrid';

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.type === activeFilter
  );

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'creative', label: 'Creative' },
    { id: 'development', label: 'Development' },
    { id: 'hybrid', label: 'Hybrid' }
  ];

  return (
    <section className="py-16 hero-background relative overflow-hidden">
      {/* Subtle creative pattern overlay */}
      <div className="absolute inset-0 creative-pattern opacity-50"></div>
      
      {/* Subtle code pattern overlay */}
      <div className="absolute inset-0 code-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-blue-200 transition-colors duration-300">
            Client Success Stories
          </h2>
          <p className="text-xl text-white opacity-80 max-w-2xl mx-auto hover:opacity-100 transition-opacity duration-300">
            Explore our portfolio of successful projects that showcase our creative and technical expertise.
          </p>
        </div>

        {/* Filter Buttons with enhanced animations */}
        <div className="flex justify-center mb-12 animate-fade-in-delay">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-1 flex flex-wrap justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-slide-up-staggered hover:scale-105 transition-all duration-500 transform"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="hover:shadow-2xl transition-all duration-300">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State with animation */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto hover:bg-opacity-20 transition-all duration-300">
              <p className="text-white opacity-70 text-lg hover:opacity-100 transition-opacity duration-300">
                No projects found for this filter.
              </p>
            </div>
          </div>
        )}
      </div>

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

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-slide-up-staggered {
          animation: slide-up-staggered 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}