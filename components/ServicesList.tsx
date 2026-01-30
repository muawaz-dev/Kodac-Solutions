// Comprehensive Services Grid Component - Exact Design Match
import Link from 'next/link';
import Image from 'next/image';
export default function ServicesList() {
  const services = [
    {
      title: 'Web Development',
      description: 'We design websites that reflect your brand, engage visitors, and deliver exceptional performance to drive your business growth effectively.',
      icon: '/web-dev/custom-code.png',
      link: '/services/web-development',
    },
    {
      title: 'Video Editing',
      description: 'Transform raw footage into captivating stories with professional video editing that enhances your brand message and engages your audience.',
      icon: '/video-editing/long-form.png',
      link: '/services/video-editing',
    },
    {
      title: 'Graphic Designing',
      description: 'Create stunning visual identities with creative graphic design solutions that make your brand stand out and leave a lasting impression.',
      icon: '/graphic-designing/logo-design.png',
      link: '/services/graphic-designing',
    },
    {
      title: 'Social Media Marketing',
      description: 'Elevate your brand with consistent, engaging content and data-driven social media campaigns that connect with your audience and drive results.',
      icon: '/social-media/community-management.png',
      link: '/services/social-media-marketing',
    },
    {
      title: 'Ad Campaigns',
      description: 'Maximize your ROI with targeted advertising campaigns that reach the right audience and convert viewers into customers effectively.',
      icon: '/ad-campaigns/meta.png',
      link: '/services/ad-campaigns',
    },
    {
      title: 'Productivity Tools',
      description: 'Streamline your workflow with cutting-edge productivity tools and automation solutions that save time and boost efficiency.',
      icon: '/productivity-tools/adobe.png',
      link: '/services/productivity-tools',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br sm:bg-gradient-to-r from-[#E9E8FD] sm:from-[#da1402] via-[#E9E8FD] to-[#da1402] sm:to-[#9050F0] rounded-[2.5rem] mb-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-3">
            Comprehensive Digital Services That Drive Results
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Driving Growth Through
            <br />
            Innovative Digital Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {services.map((service, index) => (
            <Link key={index} href={service.link}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="relative h-12 w-12 rounded-2xl overflow-hidden">
                    <Image
                      src={service.icon}
                      alt="Web Development"
                      fill
                      className="object-cover"
                      loading='eager'
                    />
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-red-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 30 L30 10 M30 10 L30 25 M30 10 L15 10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Title at bottom */}
                  <h3 className="text-xl font-bold text-gray-900 mt-auto">
                    {service.title}
                  </h3>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
// End of Comprehensive Services Grid Component