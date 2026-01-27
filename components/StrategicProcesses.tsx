// Strategic Processes Component - How We Work Section
'use client';

export default function StrategicProcesses() {
  const processes = [
    {
      number: '01',
      title: 'Data Analysis',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: 'Comprehensive analysis of market trends and user behavior to inform strategic decisions.',
    },
    {
      number: '02',
      title: 'Content Management',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Strategic content planning and distribution across multiple channels for maximum impact.',
    },
    {
      number: '03',
      title: 'Workflow Optimization',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Streamlined processes and automation to deliver efficient and scalable solutions.',
    },
    {
      number: '04',
      title: 'Business Growth',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description: 'Sustainable growth strategies that drive measurable results and long-term success.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-2">
            How We Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Strategic Processes for Lasting Results
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Icon Circle */}
              <div className="mb-6 relative">
                <div className="w-24 h-24 mx-auto bg-red-500 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {process.icon}
                </div>
              </div>

              {/* Number */}
              <div className="text-center mb-4">
                <span className="text-6xl font-bold text-gray-200">
                  {process.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {process.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm">
                {process.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// End of Strategic Processes Component