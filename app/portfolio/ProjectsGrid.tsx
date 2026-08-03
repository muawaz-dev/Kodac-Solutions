// Portfolio Projects Grid - Filterable Grid of Ecommerce and Local Business Projects
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, filters, type Category } from './projects';

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-full">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={`${project.name}-${index}`}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 flex flex-col"
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

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {project.country}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 font-semibold text-sm hover:text-red-600 transition-colors inline-flex items-center"
              >
                Visit Site
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
// End of Portfolio Projects Grid
