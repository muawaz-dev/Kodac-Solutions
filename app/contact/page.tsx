// Contact Page - Contact Form and Information

import type { Metadata } from 'next';
export default function ContactPage() {

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help transform your digital presence.
          </p>
        </div>
      </section>
      <div className="text-center mt-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Schedule Your Service</h2>
        <p className="text-xl text-gray-600">Book an appointment that fits your schedule.</p>
      </div>
      {/* Contact Form and Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="App">
              <section id="booking" className="bg-white">
                <div className="container mx-auto px-4">

                  <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center justify-center gap-2 mb-6">

                      <h3 className="text-2xl font-bold text-gray-800">Book Your Appointment</h3>
                    </div>

                    {/* Calendly Embed */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://calendly.com/muawaz8/30min"
                        width="100%"
                        height="700"
                        frameBorder="0"
                        title="Schedule Appointment"
                        className="rounded-2xl"
                      ></iframe>
                    </div>

                    <div className="mt-6 text-center text-gray-600">
                      <p>Can't find a suitable time? Call us at <strong className="text-blue-600">(555) 123-4567</strong></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of the following channels, or fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">USA</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:team@kodacsolutions.com" className="text-red-500 hover:text-red-600">
                      team@kodacsolutions.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+16097924388" className="text-red-500 hover:text-red-600">
                      +1 609 792 4388
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// End of Contact Page