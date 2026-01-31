// Why Choose Us Component - Expertise Section (No Numbers for New Agency)


export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-360 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Decorative Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-3xl p-8 shadow-2xl">
              <div className="sm:block hidden absolute top-0 left-4 w-28 h-28 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-50 -translate-x-8 -translate-y-8"></div>
              
              <div className="relative space-y-12">
                {/* Expertise Icon */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="text-sm opacity-90">Driven By</p>
                    <h3 className="text-2xl font-bold">Innovation</h3>
                  </div>
                </div>

                {/* Partnership Icon */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="text-sm opacity-90">Building</p>
                    <h3 className="text-2xl font-bold">Partnerships</h3>
                  </div>
                </div>
              </div>

              <div className="sm:block hidden absolute bottom-0 right-2 w-36 h-36 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-30 translate-x-12 translate-y-12"></div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wide">
              Why Choose Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Proven Success Through
              <br />
              Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a proven track record of delivering exceptional results, we empower businesses to thrive and achieve their full potential in the digital landscape.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Dedicated experts in every field.</span> Our passionate team brings specialized skills to deliver outstanding results.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Holistic digital solutions tailored to your business.</span> We provide comprehensive strategies that align with your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// End of Why Choose Us Component