// Comprehensive Services Grid Component - Exact Design Match
import Link from 'next/link';

export default function ServicesList() {
  const services = [
    {
      title: 'Web Development',
      description: 'We design websites that reflect your brand, engage visitors, and deliver exceptional performance to drive your business growth effectively.',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Monitor/Screen */}
          <rect x="20" y="30" width="80" height="50" rx="4" fill="#E8F4FF" stroke="#4A90E2" strokeWidth="2"/>
          <rect x="25" y="35" width="70" height="40" fill="white"/>
          {/* Code brackets */}
          <path d="M40 50 L35 55 L40 60" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M60 50 L65 55 L60 60" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="48" y1="48" x2="52" y2="62" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
          {/* Stand */}
          <rect x="48" y="80" width="24" height="3" fill="#4A90E2"/>
          <rect x="40" y="83" width="40" height="2" fill="#4A90E2"/>
        </svg>
      ),
      link: '/services/web-development',
    },
    {
      title: 'Video Editing',
      description: 'Transform raw footage into captivating stories with professional video editing that enhances your brand message and engages your audience.',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Video camera */}
          <rect x="25" y="40" width="50" height="35" rx="4" fill="#E8F4FF" stroke="#4A90E2" strokeWidth="2"/>
          <circle cx="50" cy="57.5" r="12" fill="white" stroke="#4A90E2" strokeWidth="2"/>
          <circle cx="50" cy="57.5" r="6" fill="#4A90E2"/>
          {/* Lens/aperture lines */}
          <circle cx="50" cy="57.5" r="9" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
          {/* Tripod legs */}
          <path d="M75 65 L85 80 M75 60 L90 75" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
          {/* Viewfinder */}
          <rect x="30" y="45" width="8" height="6" rx="1" fill="#4A90E2" opacity="0.7"/>
        </svg>
      ),
      link: '/services/video-editing',
    },
    {
      title: 'Graphic Designing',
      description: 'Create stunning visual identities with creative graphic design solutions that make your brand stand out and leave a lasting impression.',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pen tool */}
          <path d="M45 75 L35 85 L30 80 L40 70 Z" fill="#FF6B9D" opacity="0.7"/>
          <path d="M40 70 L70 40 L75 45 L45 75 Z" fill="#C147E9" opacity="0.7"/>
          <circle cx="72.5" cy="42.5" r="8" fill="#4A90E2" opacity="0.7"/>
          {/* Bezier curve */}
          <path d="M50 50 Q 60 35, 70 50" stroke="#4A90E2" strokeWidth="2" fill="none" strokeDasharray="3 3"/>
          {/* Control points */}
          <circle cx="50" cy="50" r="3" fill="#FF6B9D"/>
          <circle cx="60" cy="35" r="3" fill="#4A90E2"/>
          <circle cx="70" cy="50" r="3" fill="#C147E9"/>
          {/* Color palette */}
          <circle cx="80" cy="65" r="6" fill="#FF6B9D"/>
          <circle cx="88" cy="72" r="6" fill="#4A90E2"/>
          <circle cx="72" cy="72" r="6" fill="#C147E9"/>
        </svg>
      ),
      link: '/services/graphic-designing',
    },
    {
      title: 'Social Media Marketing',
      description: 'Elevate your brand with consistent, engaging content and data-driven social media campaigns that connect with your audience and drive results.',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Megaphone body */}
          <path d="M35 50 L55 40 L75 45 L75 65 L55 70 L35 60 Z" fill="#E8F4FF" stroke="#4A90E2" strokeWidth="2"/>
          <ellipse cx="35" cy="55" rx="8" ry="10" fill="#4A90E2"/>
          {/* Sound waves */}
          <path d="M80 45 Q 88 50, 85 55" stroke="#FF6B9D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M83 40 Q 95 50, 90 60" stroke="#FF6B9D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M86 35 Q 100 50, 95 65" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
          {/* Handle */}
          <rect x="45" y="68" width="3" height="12" fill="#4A90E2" rx="1.5"/>
          <path d="M43 80 L51 80 L50 85 L44 85 Z" fill="#4A90E2"/>
        </svg>
      ),
      link: '/services/social-media-marketing',
    },
    {
      title: 'Ad Campaigns',
      description: 'Maximize your ROI with targeted advertising campaigns that reach the right audience and convert viewers into customers effectively.',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bar chart base */}
          <rect x="30" y="70" width="12" height="15" rx="2" fill="#FFB84D" opacity="0.8"/>
          <rect x="48" y="55" width="12" height="30" rx="2" fill="#FF6B9D" opacity="0.8"/>
          <rect x="66" y="45" width="12" height="40" rx="2" fill="#4A90E2"/>
          {/* Person silhouette */}
          <circle cx="85" cy="42" r="6" fill="#2D3748"/>
          <path d="M85 49 L85 62 M85 54 L78 58 M85 54 L92 58 M85 62 L80 72 M85 62 L90 72" 
                stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Platform/base */}
          <rect x="28" y="85" width="55" height="2" fill="#CBD5E0" rx="1"/>
        </svg>
      ),
      link: '/services/ad-campaigns',
    },
    {
      title: 'Productivity Tools',
      description: 'Streamline your workflow with cutting-edge productivity tools and automation solutions that save time and boost efficiency.',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Database/layers */}
          <ellipse cx="60" cy="45" rx="25" ry="8" fill="#E8F4FF" stroke="#4A90E2" strokeWidth="2"/>
          <path d="M35 45 L35 55 Q35 60, 60 60 Q85 60, 85 55 L85 45" fill="#C147E9" opacity="0.6" stroke="#4A90E2" strokeWidth="2"/>
          <ellipse cx="60" cy="55" rx="25" ry="8" fill="none" stroke="#4A90E2" strokeWidth="2"/>
          <path d="M35 55 L35 65 Q35 70, 60 70 Q85 70, 85 65 L85 55" fill="#FF6B9D" opacity="0.5" stroke="#4A90E2" strokeWidth="2"/>
          <ellipse cx="60" cy="65" rx="25" ry="8" fill="none" stroke="#4A90E2" strokeWidth="2"/>
          {/* Growth arrow */}
          <path d="M70 35 L85 25 L85 35 M85 25 L75 25" stroke="#FF6B9D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: '/services/productivity-tools',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br sm:bg-gradient-to-r from-[#E9E8FD] sm:from-[#da1402] via-[#E9E8FD] to-[#da1402] sm:to-[#9050F0] rounded-[2.5rem] my-8">
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
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
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