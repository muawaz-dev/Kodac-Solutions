// Graphic Designing Service Page
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphic Design Services - Kodac Solutions | Brand Identity & Visual Design',
  description: 'Professional graphic design services including logo design, brand identity, marketing materials, and digital graphics.',
  keywords: 'graphic design, logo design, brand identity, marketing materials, social media graphics, print design',
};

export default function GraphicDesigningPage() {
  const services = [
    {
      title: 'Logo & Brand Identity',
      description: 'Create a memorable brand identity with custom logos, color palettes, typography, and brand guidelines that set you apart.',
      icon: '/graphic-designing/logo-design.png',
      features: ['Custom logo design', 'Brand style guides', 'Color palette development', 'Typography selection', 'Brand collateral'],
    },
    {
      title: 'Marketing Materials',
      description: 'Eye-catching designs for brochures, flyers, business cards, and promotional materials that drive engagement.',
      icon: '/graphic-designing/marketing-materials.png',
      features: ['Brochure design', 'Business cards', 'Flyers & posters', 'Presentation templates', 'Print-ready files'],
    },
    {
      title: 'Digital Graphics',
      description: 'Engaging graphics for social media, websites, and digital campaigns that capture attention and drive action.',
      icon: '/graphic-designing/digital-graphics.png',
      features: ['Social media graphics', 'Banner ads', 'Infographics', 'Email templates', 'Web graphics'],
    },
    {
      title: 'Packaging & Product Design',
      description: 'Stunning packaging and product designs that stand out on shelves and create memorable unboxing experiences.',
      icon: '/graphic-designing/product-design.png',
      features: ['Product packaging', 'Label design', '3D mockups', 'Dieline creation', 'Print specifications'],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Graphic Designing
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional Graphic Design Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create stunning visual identities with creative graphic design solutions that make your brand stand out and leave a lasting impression.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Start Your Project
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/services/graphic-designing.jpg" alt="Graphic Design" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe great design is more than aesthetics—it's about solving problems and communicating your message effectively. Every design we create is strategic, purposeful, and aligned with your brand goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Excellence</h3>
              <p className="text-gray-600">Original, innovative designs that capture attention and reflect your unique brand personality.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Consistency</h3>
              <p className="text-gray-600">Cohesive designs across all touchpoints that strengthen your brand identity and recognition.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Turnaround</h3>
              <p className="text-gray-600">Efficient design process with multiple revisions to ensure you get exactly what you need.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Services</h2>
            <p className="text-xl text-gray-600">Comprehensive graphic design solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    alt={service.title}
                    src={service.icon}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8">Let's create stunning designs that make your brand unforgettable.</p>
          <Link href="/contact" className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
// End of Graphic Designing Service Page