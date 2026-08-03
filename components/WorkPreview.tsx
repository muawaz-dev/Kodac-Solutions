// Work Preview Component - Brief Showcase of Recent Portfolio Projects
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/portfolio/projects';

export default function WorkPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-360 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
          <p className="text-xl text-gray-600">
            A few of the WooCommerce stores and local business websites we&apos;ve shipped
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-500 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-600 transition-colors"
          >
            <span>View Full Portfolio</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
// End of Work Preview Component
