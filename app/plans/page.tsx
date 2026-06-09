"use client";

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PlansPage() {
  const plans = [
    {
      name: 'Web Development',
      description: 'Ideal for businesses wanting a strong online presence.',
      price: 'Custom Quote',
      duration: 'per project',
      popular: false,
      features: [
        'Custom Design & Branding',
        'Responsive Mobile-First Layout',
        'Basic SEO Optimization',
        'E-commerce Integration (Optional)',
        'Content Management System',
        '3 Months Technical Support',
      ],
      href: '/contact?service=web-development'
    },
    {
      name: 'SEO Strategy',
      description: 'Boost your search rankings and drive organic traffic.',
      price: 'Starting at $799',
      duration: 'per month',
      popular: true,
      features: [
        'Comprehensive Keyword Research',
        'On-Page & Off-Page SEO',
        'Technical SEO Audit',
        'Competitor Analysis',
        'Content Strategy Guidance',
        'Detailed Monthly Reporting',
      ],
      href: '/contact?service=seo'
    },
    {
      name: 'Social Media',
      description: 'Grow your audience and increase brand engagement.',
      price: 'Starting at $299',
      duration: 'per month',
      popular: false,
      features: [
        'Custom Content Creation',
        'Community Management',
        'Growth & Engagement Strategies',
        'Targeted Ad Campaigns',
        'Platform Optimization',
        'Analytics & Performance Reports',
      ],
      href: '/contact?service=social-media'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight"
          >
            Transparent <span className="text-red-500">Pricing</span> <br/>
            for Your Success
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Choose the perfect plan tailored to elevate your business. We offer competitive rates and unmatched expertise to deliver results that matter.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-2xl flex flex-col ${
                plan.popular ? 'border-red-500 transform lg:-translate-y-4' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                
                <div className="mb-8 flex items-baseline text-black">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.duration && (
                    <span className="text-gray-500 ml-2 text-lg">/{plan.duration}</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Link
                  href={plan.href}
                  className={`w-full flex items-center justify-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 group ${
                    plan.popular 
                      ? 'bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-xl' 
                      : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                  }`}
                >
                  Get Started
                  <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${plan.popular ? 'group-hover:translate-x-1' : ''}`} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Custom Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center bg-gray-50 rounded-2xl p-10 border border-gray-100 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. If you require a tailored approach combining multiple services, let&apos;s talk and create a specialized package just for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Our Experts
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
