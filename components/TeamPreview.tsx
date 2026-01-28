// Team Preview Component - Brief Team Member Showcase


import Image from 'next/image';
import Link from 'next/link';

export default function TeamPreview() {
  const teamMembers = [
    {
      name: 'Wajahat Laeeq',
      role: 'CEO',
      image: '/team/wajahat.jpg',
    },
    {
      name: 'Dalton Grant',
      role: 'Project Manager',
      image: '/team/dalton.jpg',
    },
    {
      name: 'Ryan Ricketts',
      role: 'Director',
      image: '/team/ryan.jpg',
    },
    {
      name: 'Pulak Nondi',
      role: 'Project Manager',
      image: '/team/pulak.jpg',
    },
    {
      name: 'Alex Nondi',
      role: 'Marketing',
      image: '/team/alex.jpg',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-2">
            Team Members
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Meet Our Digital Experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-96 bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Member Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/about#team"
            className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-600 transition-colors"
          >
            <span>View Full Team Details</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
// End of Team Preview Component