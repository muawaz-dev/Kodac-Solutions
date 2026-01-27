// Newsletter Component - Email Subscription Section
'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-300 text-lg">
              Join our subscribers list to get the instant latest news and special offers.
            </p>
          </div>

          {/* Right Content - Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="flex-1 px-6 py-4 rounded-l-full text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-4 rounded-r-full hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
// End of Newsletter Component