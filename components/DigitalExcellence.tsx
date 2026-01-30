// Digital Excellence Component - Marketing Excellence Section


import Image from 'next/image';

export default function DigitalExcellence() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-360 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Delivering Excellence in
              <br />
              Digital Marketing
            </h2>

            <div className="space-y-6">
              {/* Professional Agency */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Agency</h3>
                  <p className="text-gray-300">
                    Partner with a team that blends creativity and data-driven strategies to craft impactful marketing campaigns tailored to your brand's needs.
                  </p>
                </div>
              </div>

              {/* Solutions Provider */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Solutions Provider</h3>
                  <p className="text-gray-300">
                    Leverage advanced tools and insights to achieve measurable growth, ensuring your digital marketing stands out in a competitive industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/marketing-team.jpg"
              alt="Digital Marketing Team"
              fill
              className="object-cover"
              loading='eager'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
// End of Digital Excellence Component