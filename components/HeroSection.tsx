// Hero Section Component - Main Banner with Call to Action


import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative pt-20 px-4 bg-no-repeat bg-[url('/test.png')] sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-360 mx-auto">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left Content */}
          <div className="space-y-8 pt-12 lg:pl-12">
            <h1 className="text-5xl md:text-6xl text-black flex flex-col items-center xl:text-8xl font-bold leading-tight">
              Development
              <br />
              <span className="bg-clip-text text-black font-extrabold">
                Excellence
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Empowering businesses with expert website development, digital marketing, targeted ad campaigns, and social media strategies to dominate the digital landscape.
            </p>

            <Link
              href="/contact"
              className="inline-block xl:ml-12 bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Hire Now
            </Link>
          </div>

          {/* Right Content - Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Decorative curved line */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 300 Q 200 150 350 300 T 350 500 T 550 1700"
                stroke="#9CA3AF
"
                strokeWidth="7"
                fill="none"
              />
            </svg>

            {/* Image 1 - Bottom Left */}
            <div className="absolute bottom-32 sm:bottom-20 sm:left-0 left-[10%] w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/hero-image-1.jpg"
                alt="Digital Marketing Team"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Image 2 - Top Right */}
            <div className="absolute hidden sm:block top-0 right-0 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/hero-image-2.jpg"
                alt="Development Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// End of Hero Section Component