// Services Carousel Component - Rotating Services Display
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: 'Web Development',
      description: 'We design websites that reflect your brand, engage visitors, and deliver exceptional performance to drive your business growth effectively.',
      icon: '🌐',
      link: '/services/web-development',
    },
    {
      title: 'Social Media Marketing',
      description: 'Elevate your brand with consistent, engaging content and data-driven social media campaigns that connect with your audience and drive results.',
      icon: '📱',
      link: '/services/social-media-marketing',
    },
    {
      title: 'Video Editing',
      description: 'Transform raw footage into captivating stories with professional video editing that enhances your brand message and engages your audience.',
      icon: '🎬',
      link: '/services/video-editing',
    },
    {
      title: 'Graphic Designing',
      description: 'Create stunning visual identities with creative graphic design solutions that make your brand stand out and leave a lasting impression.',
      icon: '🎨',
      link: '/services/graphic-designing',
    },
    {
      title: 'Meta Ads',
      description: 'Maximize your ROI with targeted Meta advertising campaigns that reach the right audience and convert viewers into customers.',
      icon: '📊',
      link: '/services/ad-campaigns',
    },
    {
      title: 'Productivity Tools',
      description: 'Streamline your workflow with cutting-edge productivity tools and automation solutions that save time and boost efficiency.',
      icon: '⚡',
      link: '/services/productivity-tools',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-2">
            Comprehensive Digital Services That Drive Results
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Driving Growth Through
            <br />
            Innovative Digital Solutions
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Link href={service.link}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-2xl mx-auto">
                      <div className="flex items-start space-x-6">
                        <div className="text-6xl">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="mt-4">
                            <span className="text-red-500 font-semibold inline-flex items-center">
                              Learn More
                              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-red-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-red-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-red-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// End of Services Carousel Component