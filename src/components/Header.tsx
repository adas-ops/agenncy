// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-lg fixed w-full z-50 border-b border-gray-300 border-opacity-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Sm Services
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-900 hover:text-blue-700 transition-colors">Home</Link>
            <Link href="/creative" className="text-gray-900 hover:text-blue-700 transition-colors">Creative</Link>
            <Link href="/development" className="text-gray-900 hover:text-blue-700 transition-colors">Development</Link>
            <Link href="/portfolio" className="text-gray-900 hover:text-blue-700 transition-colors">Our Work</Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-700 transition-colors">Contact</Link>
            <Link href="/pricing" className="text-gray-900 hover:text-blue-700 transition-colors">Pricing</Link>

          </nav>
          
          {/* Mobile Menu Button - Only shows on small screens */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900 block transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-900 block transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-900 block transition-all duration-300"></span>
          </button>
        </div>
        
        {/* Mobile Navigation Menu - Slides down when button is clicked */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4 bg-white bg-opacity-95 backdrop-blur-lg rounded-lg p-4 transition-all duration-300 ease-in-out">
            <Link href="/" className="block text-gray-900 hover:text-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/creative" className="block text-gray-900 hover:text-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Creative</Link>
            <Link href="/development" className="block text-gray-900 hover:text-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Development</Link>
            <Link href="/portfolio" className="block text-gray-900 hover:text-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link href="/contact" className="block text-gray-900 hover:text-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link href="/pricing" className="block text-gray-900 hover:text-blue-700 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          </nav>
        )}
      </div>
    </header>
  );
}