'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<'creative' | 'development' | 'both' | ''>('both');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: '',
    creativeServices: [] as string[],
    techStack: [] as string[],
  });

  const creativeOptions = [
    'Brand Identity',
    'Social Media Content',
    'Video Production',
    'Packaging Design',
    'Marketing Materials',
    'Other Creative Service'
  ];

  const techOptions = [
    'Web Development',
    'Mobile App',
    'E-commerce',
    'API Integration',
    'Dashboard/Analytics',
    'Other Technical Need'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (name === 'creativeServices') {
      setFormData(prev => ({
        ...prev,
        creativeServices: checked
          ? [...prev.creativeServices, value]
          : prev.creativeServices.filter(service => service !== value)
      }));
    } else if (name === 'techStack') {
      setFormData(prev => ({
        ...prev,
        techStack: checked
          ? [...prev.techStack, value]
          : prev.techStack.filter(tech => tech !== value)
      }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        serviceType: selectedService,
        submittedAt: new Date().toISOString(),
      }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
      // Reset form
      setSelectedService('both');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        budget: '',
        timeline: '',
        creativeServices: [],
        techStack: [],
      });
    } else {
      alert('There was an error submitting your form. Please try again.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error submitting your form. Please try again.');
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your project and we&apos;ll get back to you with a plan.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Service Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What type of service are you interested in?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setSelectedService('creative')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedService === 'creative'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold">Creative Services</h3>
                <p className="text-sm mt-1">Design, branding, content</p>
              </button>
              
              <button
                onClick={() => setSelectedService('development')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedService === 'development'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-2xl mb-2">💻</div>
                <h3 className="font-semibold">Development</h3>
                <p className="text-sm mt-1">Web, apps, software</p>
              </button>
              
              <button
                onClick={() => setSelectedService('both')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedService === 'both'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold">Both</h3>
                <p className="text-sm mt-1">Full project solution</p>
              </button>
            </div>
          </div>

          {selectedService && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $1000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
              </div>

              {/* Service-Specific Questions */}
              {(selectedService === 'creative' || selectedService === 'both') && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Creative Services Needed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {creativeOptions.map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          name="creativeServices"
                          value={option}
                          checked={formData.creativeServices.includes(option)}
                          onChange={handleCheckboxChange}
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {(selectedService === 'development' || selectedService === 'both') && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Technical Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {techOptions.map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          name="techStack"
                          value={option}
                          checked={formData.techStack.includes(option)}
                          onChange={handleCheckboxChange}
                          className="rounded text-green-600 focus:ring-green-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">1-3 months</option>
                  <option value="6-months">3-6 months</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-gray-600">contact@berah.ma</p>
          </div>
          
          <div>
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-1">WhatsApp</h3>
            <a href="https://wa.me/212XXXXXXXXX" className="text-green-600 hover:text-green-700">
              Chat with us
            </a>
          </div>
          
          <div>
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Response Time</h3>
            <p className="text-gray-600">Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}