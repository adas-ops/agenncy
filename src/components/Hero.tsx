'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [activeService, setActiveService] = useState<'creative' | 'development'>('creative');

  return (
    <section className="min-h-screen flex items-center justify-center hero-background px-4 py-16 relative overflow-hidden">
      {/* Subtle creative pattern overlay */}
      <div className="absolute inset-0 creative-pattern opacity-50"></div>
      
      {/* Subtle code pattern overlay */}
      <div className="absolute inset-0 code-pattern opacity-30"></div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-10 text-white floating">
        {/* Main Headline with fade-in animation */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          We Help Small Businesses {''}
          <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400 hover:from-purple-400 hover:to-blue-600 transition-all duration-500">
              Grow Online
          </span>
        </h1>
        
        {/* Subtitle with delayed fade-in */}
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-delay opacity-90 hover:opacity-100 transition-opacity duration-300">
          Professional websites and digital marketing that actually bring you more customers. Based in Tangier, serving businesses across Morocco.
        </p>

        {/* Service Toggle with enhanced animations */}
        <div className="flex justify-center mb-12 animate-fade-in-delay-2">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-1 shadow-lg flex hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            <button
              onClick={() => setActiveService('creative')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeService === 'creative'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              Creative Services
            </button>
            <button
              onClick={() => setActiveService('development')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeService === 'development'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              Software Development
            </button>
          </div>
        </div>

        {/* Service Content with smooth transitions */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 max-w-3xl mx-auto border border-white border-opacity-20 hover:shadow-2xl hover:bg-opacity-15 transition-all duration-500 transform hover:scale-[1.02]">
          {activeService === 'creative' ? (
            <div className="animate-slide-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-blue-200 transition-colors duration-300">Creative That Captivates</h2>
              <p className="text-lg mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
                We design stunning visuals, engaging videos, and brand identities that tell your story and connect with your audience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <h3 className="font-semibold">Social Content</h3>
                  <p className="text-sm opacity-80">Scroll-stopping visuals</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <h3 className="font-semibold">Video Production</h3>
                  <p className="text-sm opacity-80">Engaging storytelling</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <h3 className="font-semibold">Brand Identity</h3>
                  <p className="text-sm opacity-80">Memorable visual systems</p>
                </div>
              </div>
                <Link href="/portfolio">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95">
                See Our Portfolio
              </button>
              </Link>

            </div>
          ) : (
            <div className="animate-slide-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-blue-200 transition-colors duration-300">Development That Delivers</h2>
              <p className="text-lg mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
                We build fast, responsive, and accessible web applications with modern technologies like Next.js, React, and Tailwind CSS.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
                  <div key={tech} className="bg-white bg-opacity-20 p-3 rounded-lg text-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <span className="font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
              <Link href="/pricing">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95">
                  View Pricing
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}