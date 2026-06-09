// SEO Service Page  
import Image from 'next/image';
import Link from 'next/link';
import Hero from './Hero';

export const metadata = {
  title: 'SEO Services - Kodac Solutions | Dominate Search Rankings',
  description: 'Expert SEO services to improve your visibility, drive organic traffic, and achieve higher rankings on Google and other search engines.',
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero/>

      {/* Services Overview */}

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We use proven, data-driven SEO strategies to improve your website's visibility, attract high-quality organic traffic, and turn visitors into loyal customers.</p>
        </div>

        <div className="max-w-360 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Keyword Research', desc: 'In-depth analysis to find high-converting keywords in your industry.', icon: '/seo/keyword.png' },
            { title: 'On-Page SEO', desc: 'Optimizing your website content and structure for maximum search visibility.', icon: '/seo/seo.png' },
            { title: 'Technical SEO', desc: 'Improving site speed, mobile-friendliness, and architecture for better crawling.', icon: '/seo/technical.png' },
            { title: 'Link Building', desc: 'Acquiring high-quality backlinks to boost your domain authority and rankings.', icon: '/seo/link.png' }
          ].map((service, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="relative w-14 h-14 mb-2">
                <Image
                  alt={service.title}
                  src={service.icon}
                  fill
                  className="object-contain"
                  sizes='56px'
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Invest in SEO?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">SEO is more than just ranking higher. It's about building a sustainable and highly profitable channel for your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Increased Organic Traffic', desc: 'Capture users actively searching for your products or services, resulting in higher conversion rates and sales.' },
              { title: 'Better ROI', desc: 'Unlike paid advertising, the traffic generated from SEO is free and compounds over time, offering unmatched return on investment.' },
              { title: 'Trust & Credibility', desc: 'Ranking on the first page of Google instantly builds trust and establishes your brand as an industry authority.' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-red-500 font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We don't guess. We follow a meticulous, data-backed process to ensure you get the best possible results.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', name: 'Comprehensive Audit', desc: 'We analyze your current site health, architecture, and backlink profile to identify opportunities.' },
              { step: '02', name: 'Strategy Development', desc: 'Based on the audit, we craft a custom roadmap prioritizing high-impact optimizations.' },
              { step: '03', name: 'Implementation', desc: 'Our team executes on-page, technical, and off-page SEO tactics to elevate your rankings.' },
              { step: '04', name: 'Monitoring & Reporting', desc: 'We track your progress continuously and provide transparent, monthly performance reports.' }
            ].map((process, idx) => (
              <div key={idx} className="relative">
                {idx !== 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-200 -z-10"></div>}
                <div className="bg-white border-2 border-gray-100 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-red-500 mb-6 mx-auto z-10 relative">
                  {process.step}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.name}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Dominate Search Results?</h2>
          <p className="text-xl mb-8">Let's create an SEO strategy that drives real, sustainable growth.</p>
          <Link href="/contact" className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">Get Started</Link>
        </div>
      </section>
    </main>
  );
}
// End of SEO Page