import PortfolioGrid from '@/components/PortfolioGrid';

import Link from 'next/link';



export default function PortfolioPage() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">

        <div className="container mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto">

            Explore our portfolio of successful projects that showcase our creative and technical expertise.

          </p>

        </div>

      </section>



      {/* Portfolio Grid */}

      <section className="py-16">

        <div className="container mx-auto px-4">

          <PortfolioGrid />

        </div>

      </section>



      {/* CTA Section */}

      <section className="py-16 bg-gray-900 text-white">

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">Ready to create your success story?</h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">

            Let&apos;s discuss how we can help you achieve your goals with our creative and technical expertise.

          </p>

          <Link

            href="/contact"

            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"

          >

            Start a Project

          </Link>

        </div>

      </section>

    </div>

  );

}