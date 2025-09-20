// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-70 backdrop-blur-md text-white py-4 mt-auto border-t border-white border-opacity-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Company Info */}
          <div>
            <h3 className="text-md font-bold mb-2">Sm Services</h3>
            <p className="opacity-80 text-sm">
              Creating digital experiences that connect brands with their audience through design and technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Home</Link></li>
              <li><Link href="/creative" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Creative Services</Link></li>
              <li><Link href="/development" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Development</Link></li>
              <li><Link href="/portfolio" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Portfolio</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Contact</Link></li>
              <li><Link href="/pricing" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Pricing</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold mb-2">Get In Touch</h3>
            <div className="space-y-1 opacity-80 text-sm">
              <p>contact@sm-services.com</p>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="hover:text-blue-300 transition-colors text-sm">Twitter</a>
                <a href="#" className="hover:text-blue-300 transition-colors text-sm">GitHub</a>
                <a href="#" className="hover:text-blue-300 transition-colors text-sm">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white border-opacity-10 mt-4 pt-3 text-center opacity-70 text-xs">
          <p>© {new Date().getFullYear()} Sm Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}