// Video Editing Service Page
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Hero from './Hero';
export const metadata: Metadata = {
  title: 'Video Editing Services - Kodac Solutions | Professional Video Production',
  description: 'Professional video editing services for short-form content, long-form videos, promotional content, and more. Transform your footage into engaging stories.',
  keywords: 'video editing, short form video, long form video, YouTube editing, social media videos, promotional videos',
};

export default function VideoEditingPage() {
  const services = [
    {
      title: 'Short-Form Video Editing',
      description: 'Perfect for social media platforms like TikTok, Instagram Reels, and YouTube Shorts. Fast-paced, engaging content that captures attention.',
      icon: '/video-editing/short-form.png',
      features: [
        'Social media optimization',
        'Trending effects & transitions',
        'Subtitles & captions',
        'Music synchronization',
        'Platform-specific formatting',
      ],
    },
    {
      title: 'Long-Form Video Editing',
      description: 'Professional editing for YouTube videos, webinars, podcasts, and documentaries. Comprehensive storytelling that keeps viewers engaged.',
      icon: '/video-editing/long-form.png',
      features: [
        'Narrative structure',
        'Color grading & correction',
        'Audio enhancement',
        'B-roll integration',
        'Intro/outro animations',
      ],
    },
    {
      title: 'Promotional & Commercial Videos',
      description: 'High-impact videos for marketing campaigns, product launches, and brand promotion. Content that drives conversions.',
      icon: '/video-editing/commercial.png',
      features: [
        'Brand storytelling',
        'Motion graphics',
        'Professional voiceovers',
        'Call-to-action integration',
        'Multi-platform versions',
      ],
    },
    {
      title: 'Educational & Tutorial Videos',
      description: 'Clear, informative videos for training, courses, and how-to content. Making complex topics easy to understand.',
      icon: '/video-editing/educational.png',
      features: [
        'Screen recording editing',
        'Annotated graphics',
        'Chapter markers',
        'Quiz integration',
        'Downloadable resources',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach to Video Editing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative storytelling to produce videos that resonate with your audience and achieve your goals. Every frame is carefully crafted to maintain engagement and deliver your message effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Story-Driven Editing</h3>
              <p className="text-gray-600">
                We focus on narrative flow and emotional impact, ensuring your video tells a compelling story that resonates.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Quality</h3>
              <p className="text-gray-600">
                High-quality color grading, smooth transitions, and polished effects that give your videos a professional finish.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Efficient workflow and quick delivery without compromising on quality, keeping your content schedule on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-360 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Video Editing Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive video editing solutions for every platform and purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative w-14 h-14 mb-2">
                  <Image
                    alt={service.title}
                    src={service.icon}
                    fill
                    className="object-contain"
                    sizes='56px'
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl mb-8">
            Let's transform your footage into engaging videos that captivate your audience.
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
// End of Video Editing Service Page