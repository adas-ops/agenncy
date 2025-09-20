// src/components/ProjectCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'creative':
        return 'bg-purple-500 text-white';
      case 'development':
        return 'bg-blue-500 text-white';
      case 'hybrid':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white border-opacity-10 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={project.image || "/api/placeholder/400/300"}
          alt={project.title}
          fill
          className="object-cover"
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-70 hover:opacity-100 transition-opacity"
                aria-label="View code on GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-70 hover:opacity-100 transition-opacity"
                aria-label="View live project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-white opacity-80 mb-3 line-clamp-2">{project.description}</p>
        
        {/* Client information */}
        <div className="mb-3">
          <p className="text-sm text-white opacity-80">
            <span className="font-medium">Client:</span> {project.client}
          </p>
        </div>
        
        {/* Results/impact */}
        {project.results && (
          <div className="mb-4 p-3 bg-white bg-opacity-10 rounded-lg">
            <p className="text-sm text-green-300 font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {project.results}
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="mt-auto">
          <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View Case Study
          </button>
        </div>
      </div>
    </div>
  );
}