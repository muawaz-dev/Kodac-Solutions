// Ad Campaigns Service Page
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Ad Campaigns & Meta Ads - Kodac Solutions | Targeted Advertising',
  description: 'Professional ad campaign management for Meta (Facebook & Instagram), Google Ads, and more. Maximize ROI with targeted advertising.',
};

export default function AdCampaignsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-360 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Ad Campaigns</div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Professional Ad Campaign Management</h1>
              <p className="text-xl text-gray-600 mb-8">Maximize your ROI with targeted advertising campaigns on Meta, Google, and other platforms that reach the right audience and convert viewers into customers.</p>
              <Link href="/contact" className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">Launch Your Campaign</Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                loading='eager'
                src="/services/ad-campaigns.jpeg"
                alt="Ad Campaigns"
                fill
                className="object-cover"
                fetchPriority='high'
                sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         1172px" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advertising Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We specialize in creating and managing high-performing ad campaigns that deliver measurable results and maximize your advertising budget.</p>
        </div>

        <div className="max-w-360 mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: 'Meta Ads (Facebook & Instagram)', features: ['Audience targeting', 'Creative development', 'A/B testing', 'Conversion tracking', 'Retargeting campaigns'], icon: '/ad-campaigns/meta.png' },
            { title: 'Google Ads', features: ['Search campaigns', 'Display advertising', 'Shopping ads', 'YouTube advertising', 'Remarketing'], icon: '/ad-campaigns/google.png' },
            { title: 'LinkedIn Ads', features: ['B2B targeting', 'Sponsored content', 'Lead generation', 'Company targeting', 'InMail campaigns'], icon: '/ad-campaigns/linkedin.png' },
            { title: 'TikTok & Emerging Platforms', features: ['Trend-based content', 'Influencer partnerships', 'Brand takeovers', 'Hashtag challenges', 'Performance analytics'], icon: '/ad-campaigns/tik-tok.png' },
          ].map((service, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative w-12 h-12 mb-2">
                <Image
                  alt={service.title}
                  src={service.icon}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Advertising?</h2>
          <p className="text-xl mb-8">Let's create campaigns that deliver real ROI for your business.</p>
          <Link href="/contact" className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">Get Started</Link>
        </div>
      </section>
    </main>
  );
}
// End of Ad Campaigns Page