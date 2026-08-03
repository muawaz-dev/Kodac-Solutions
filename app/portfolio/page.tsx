// Portfolio Page - Showcase of WooCommerce and Local Business Website Projects
import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectsGrid from './ProjectsGrid';

export const metadata: Metadata = {
  title: 'Portfolio - Kodac Solutions | WooCommerce & Local Business Websites',
  description: 'Browse WooCommerce store builds and local business websites designed and developed by Kodac Solutions.',
  keywords: 'portfolio, woocommerce websites, local business websites, web development projects, kodac solutions',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-360 mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#F33641] to-[#9C45FE] bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of Ecommerce stores and local business websites we&apos;ve built to help brands sell more and get found.
          </p>
        </div>
      </section>

      {/* Filterable Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto">
          <ProjectsGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Want a Website Like This?</h2>
          <p className="text-xl mb-8">
            Let&apos;s build a WooCommerce store or local business website that works as hard as you do.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
// End of Portfolio Page
