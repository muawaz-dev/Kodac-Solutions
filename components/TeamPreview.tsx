// Team Preview Component - Brief Team Member Showcase


import Image from 'next/image';
import Link from 'next/link';

export default function TeamPreview() {
const teamMembers = [
  {
    name: 'Frasat Ahmad',
    role: 'CEO',
    description: 'Frasat leads our team with passion and innovative thinking. His strategic planning ensures projects align with client goals.',
  },
  {
    name: 'Muawaz Ahmad',
    role: 'Full-Stack Developer',
    description: 'Muawaz bridges frontend design and backend functionality, delivering scalable and efficient solutions.',
  },
  {
    name: 'Irbaz Hassan',
    role: 'Creative Director',
    description: 'Irbaz brings creative vision to life, guiding our design team to create stunning visual identities.',
  },
  {
    name: 'Mayer Shiraz',
    role: 'Graphic Designer',
    description: 'Mayer transforms concepts into compelling visuals with a strong eye for detail and mastery of design tools.',
  },
  {
    name: 'Musawir Ali',
    role: 'Lead Generation Specialist',
    description: 'Musawir crafts data-driven marketing strategies that drive results and help businesses grow online.',
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
              className="group relative bg-gray-200 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="p-4 ">
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {member.role}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
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