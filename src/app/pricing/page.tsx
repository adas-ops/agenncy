'use client';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Clear Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the package that fits your business needs. All prices include setup and training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Starter Website</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">
              $800
              <span className="text-lg font-normal text-gray-500"> one-time</span>
            </div>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                5-page professional website
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mobile responsive design
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Contact form setup
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic SEO optimization
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                1 month free support
              </li>
            </ul>
            <a 
              href="/contact" 
              className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Started
            </a>
            <p className="text-sm text-gray-500 mt-3 text-center">Perfect for small businesses</p>
          </div>

          {/* Business Growth Package - Most Popular */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 mt-4">Business Growth</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">
              $1,500
              <span className="text-lg font-normal text-gray-500"> one-time</span>
            </div>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Everything in Starter
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                E-commerce functionality
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Social media integration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Google Analytics setup
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Payment gateway integration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                3 months free support
              </li>
            </ul>
            <a 
              href="/contact" 
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <p className="text-sm text-gray-500 mt-3 text-center">Most chosen by growing businesses</p>
          </div>

          {/* Custom Solution Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Custom Solution</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">
              From $2,500
              <span className="text-lg font-normal text-gray-500"> project-based</span>
            </div>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fully custom development
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced integrations (CRM, APIs)
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mobile app development
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Database design & management
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                6 months ongoing support
              </li>
            </ul>
            <a 
              href="/contact" 
              className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Let's Discuss
            </a>
            <p className="text-sm text-gray-500 mt-3 text-center">For complex business needs</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">What's included in support?</h3>
              <p className="text-gray-600">Bug fixes, content updates, security patches, and technical guidance via email and WhatsApp.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-600">Yes! We offer 50% upfront and 50% on delivery for all packages above $1,000.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How long does development take?</h3>
              <p className="text-gray-600">Starter: 1-2 weeks, Business Growth: 2-4 weeks, Custom: 4-8 weeks depending on complexity.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I upgrade my package later?</h3>
              <p className="text-gray-600">Absolutely! You can always add features or upgrade to a higher package. We'll credit your initial investment.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Book a free consultation to discuss your project and get a custom quote.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}