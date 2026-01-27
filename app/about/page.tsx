// About Page - Company Information and Full Team Details
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Kodac Solutions | Young, Passionate Digital Experts',
  description: 'Meet the young, energetic team behind Kodac Solutions. We are passionate digital experts dedicated to delivering modern, innovative solutions for your business.',
  keywords: 'about us, digital agency team, web developers, marketing experts, young professionals',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Wajahat Laeeq',
      role: 'CEO & Founder',
      image: '/team/wajahat.jpg',
      expertise: 'Strategic Planning, Business Development, Client Relations',
      description: 'With a vision to revolutionize digital services, Wajahat leads our team with passion and innovative thinking. His expertise in strategic planning ensures every project aligns with client goals.',
    },
    {
      name: 'Dalton Grant',
      role: 'Project Manager',
      image: '/team/dalton.jpg',
      expertise: 'Project Management, Agile Methodologies, Team Coordination',
      description: 'Dalton ensures seamless project execution from start to finish. His meticulous attention to detail and excellent communication skills keep projects on track and clients satisfied.',
    },
    {
      name: 'Ryan Ricketts',
      role: 'Creative Director',
      image: '/team/ryan.jpg',
      expertise: 'Creative Strategy, Brand Development, Design Leadership',
      description: 'Ryan brings creative vision to life, leading our design team to create stunning visual identities that resonate with audiences and elevate brands.',
    },
    {
      name: 'Pulak Nondi',
      role: 'Technical Project Manager',
      image: '/team/pulak.jpg',
      expertise: 'Technical Architecture, Development Management, Quality Assurance',
      description: 'Pulak bridges the gap between technical complexity and project delivery, ensuring robust solutions that meet the highest standards of quality and performance.',
    },
    {
      name: 'Alex Nondi',
      role: 'Marketing Specialist',
      image: '/team/alex.jpg',
      expertise: 'Digital Marketing, SEO/SEM, Social Media Strategy, Analytics',
      description: 'Alex crafts data-driven marketing strategies that drive results. Her expertise in SEO, social media, and analytics helps businesses grow their online presence effectively.',
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-red-500">Kodac Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A young, energetic team of passionate digital experts dedicated to transforming businesses through modern, innovative solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kodac Solutions is a new agency born from a passion for digital excellence. We may be new, but our team brings together years of combined expertise and a fresh, modern perspective that sets us apart.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a young and energetic team, we understand the digital landscape from a contemporary viewpoint. We're not just keeping up with trends – we're setting them. Our passion drives us to deliver exceptional results that exceed expectations.
              </p>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-team.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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

      {/* Full Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate experts behind your digital success
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {member.role}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-red-500 font-semibold mb-4">{member.expertise}</p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our passionate team can help transform your digital presence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
// End of About Page