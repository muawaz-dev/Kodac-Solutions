// Social Media Marketing Service Page  
import Image from 'next/image';
import Link from 'next/link';
import Hero from './Hero';

export const metadata = {
  title: 'Social Media Marketing - Kodac Solutions | Grow Your Brand Online',
  description: 'Expert social media marketing services to grow your brand, engage your audience, and drive results across all major platforms.',
};

export default function SocialMediaMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero/>

      {/* Services Overview */}

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We create data-driven social media strategies that build authentic connections with your audience, increase brand awareness, and drive measurable business results across all major platforms.</p>
        </div>

        <div className="max-w-360 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Content Creation', desc: 'Engaging posts, stories, and multimedia content tailored to each platform', icon: '/social-media/content-creation.png' },
            { title: 'Community Management', desc: 'Active engagement with your audience to build loyal communities', icon: '/social-media/community-management.png' },
            { title: 'Analytics & Reporting', desc: 'Data-driven insights to optimize performance and ROI', icon: '/social-media/analytics.png' },
            { title: 'Paid Advertising', desc: 'Targeted ad campaigns across social platforms to maximize visibility and conversions', icon: '/social-media/paid-advertising.png' }
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Social Presence?</h2>
          <p className="text-xl mb-8">Let's create a social media strategy that drives real results.</p>
          <Link href="/contact" className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">Get Started</Link>
        </div>
      </section>
    </main>
  );
}
// End of Social Media Marketing Page