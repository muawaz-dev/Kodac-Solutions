"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Hero() {
    const [loaded,setLoaded] = useState(false)
  return (
          <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-360 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Graphic Designing
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional Graphic Design Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create stunning visual identities with creative graphic design solutions that make your brand stand out and leave a lasting impression.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
              >
                Start Your Project
              </Link>
            </div>
            <div className="relative bg-black h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                loading='eager'
                src="/services/graphic-designing.jpg"
                alt="Graphic Design"
                fill
                onLoadingComplete={()=>setLoaded(true)}
                className={`object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-750`}
                fetchPriority='high'
                sizes="(max-width: 1024px) 100vw,
         (max-width: 1510px) 50vw,
         700px"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
