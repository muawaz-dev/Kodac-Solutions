// About Page - Company Information and Full Team Details
import type { Metadata } from 'next';
import OurStory from './OurStory';
import WorkPreview from '@/components/WorkPreview';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Kodac Solutions | Young, Passionate Digital Experts',
  description: 'Meet the young, energetic team behind Kodac Solutions. We are passionate digital experts dedicated to delivering modern, innovative solutions for your business.',
  keywords: 'about us, digital agency team, graphic designers, seo, web developers, marketing experts, young professionals',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-360 mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-[#F33641] to-[#9C45FE] bg-clip-text text-transparent">Kodac</span> <span className='text-red-500'>Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A young, energetic team of passionate digital experts dedicated to transforming businesses through modern, innovative solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-360 mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passionate */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passionate</h3>
              <p className="text-gray-600">
                We're not just doing a job – we're pursuing our passion. Every project receives our full dedication and enthusiasm.
              </p>
            </div>

            {/* Skilled */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Highly Skilled</h3>
              <p className="text-gray-600">
                Our team combines technical expertise with creative excellence, delivering solutions that truly work.
              </p>
            </div>

            {/* Modern */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern & Energetic</h3>
              <p className="text-gray-600">
                As a young team, we bring fresh perspectives and contemporary approaches to every challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <WorkPreview />

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our passionate team can help transform your digital presence.
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
// End of About Page