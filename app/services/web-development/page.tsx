// Web Development Service Page
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services - Kodac Solutions | Custom Websites & Web Apps',
  description: 'Professional web development services including Shopify, WordPress, and custom code solutions. We build websites that drive results.',
  keywords: 'web development, Shopify development, WordPress development, custom websites, web applications, responsive design',
};

export default function WebDevelopmentPage() {
  const services = [
    {
      title: 'Shopify Development',
      description: 'Build powerful e-commerce stores with Shopify. From custom themes to app integrations, we create online stores that convert visitors into customers.',
      icon: '/web-dev/shopify.png',
      features: [
        'Custom Shopify themes',
        'Payment gateway integration',
        'Product catalog management',
        'Mobile-optimized stores',
        'SEO-friendly structure',
      ],
    },
    {
      title: 'WordPress Development',
      description: 'Create flexible, scalable websites with WordPress. Perfect for blogs, business sites, and content-rich platforms with easy content management.',
      icon: '/web-dev/wordpress.png',
      features: [
        'Custom WordPress themes',
        'Plugin development & integration',
        'WooCommerce e-commerce',
        'Performance optimization',
        'Security hardening',
      ],
    },
    {
      title: 'Custom Code Development',
      description: 'Build unique, high-performance web applications with modern technologies. Tailored solutions that meet your specific business requirements.',
      icon: '/web-dev/custom-code.png',
      features: [
        'React, Next.js, Express.js',
        'Custom animated designs',
        'API development & integration',
        'Performance centric',
        'Scalable architecture',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements to create a comprehensive development strategy.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes that visualize your website structure and user experience before development begins.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers bring the designs to life using best practices, clean code, and modern technologies to ensure optimal performance.',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing across devices and browsers ensures everything works perfectly before we launch your website to the world.',
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'We provide ongoing support, updates, and maintenance to keep your website secure, fast, and up-to-date with the latest technologies.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-360 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Web Development
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional Web Development Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We design websites that reflect your brand, engage visitors, and deliver exceptional performance to drive your business growth effectively.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Start Your Project
              </Link>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/services/web-dev.jpg"
                alt="Web Development"
                fill
                className="object-cover"
                loading='eager'
                fetchPriority='high'
                sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         1172px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a strategic, user-centered approach to web development that ensures your website not only looks great but performs exceptionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User-Centered Design</h3>
              <p className="text-gray-600">
                Every element is designed with your users in mind, creating intuitive experiences that keep visitors engaged.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimized</h3>
              <p className="text-gray-600">
                We build fast, responsive websites that load quickly and provide smooth experiences across all devices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                We implement industry-standard security practices to protect your website and user data from threats.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Ready</h3>
              <p className="text-gray-600">
                Built with SEO best practices to help your website rank higher in search engines and attract organic traffic.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Responsive</h3>
              <p className="text-gray-600">
                Your website will look and function perfectly on all devices, from smartphones to desktop computers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Architecture designed to grow with your business, easily accommodating future features and increased traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-360 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-600">
              Choose the platform that best suits your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative w-13.5 h-13.5 mb-2">
                  <Image
                    alt={service.title}
                    src={service.icon}
                    fill
                    className="object-contain"
                    loading='eager'
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

      {/* Development Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">
              A proven process that delivers results
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 bg-white rounded-xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl mb-8">
            Let's discuss your project and create a website that drives results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
// End of Web Development Service Page