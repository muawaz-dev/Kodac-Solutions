// Testimonials Component - Client Reviews Slider
'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Working with this team was a game-changer for our online presence. They helped us redesign our website and improve our search rankings, resulting in a significant increase in traffic and leads.",
      author: "Sarah",
      position: "Business Owner",
    },
    {
      quote: "The dedication and expertise of this agency transformed our digital marketing strategy. Their innovative approach and attention to detail exceeded all our expectations.",
      author: "Michael Chen",
      position: "Marketing Director",
    },
    {
      quote: "Outstanding service from start to finish. The team's professionalism and creative solutions helped us achieve our business goals faster than we anticipated.",
      author: "Jennifer Martinez",
      position: "CEO, Tech Startup",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 sm:pb-4  px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-red-500">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center space-x-4 text-white">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-lg font-semibold">
              {currentSlide + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative min-h-[350px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="text-center text-white space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl leading-relaxed font-medium">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-6">
                  <p className="text-xl font-bold">{testimonial.author}</p>
                  <p className="text-gray-200">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Star Icon */}
        <div className="absolute bottom-20 right-20 hidden lg:block">
          <svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
// End of Testimonials Component