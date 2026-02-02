"use client";
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
export default function OurStory() {
    const [loaded,setLoaded] = useState(false)
  return (
     <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-360 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-0 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kodac Solutions is a new agency born from a passion for digital excellence. We may be new, but our team brings together years of combined expertise and a fresh, modern perspective that sets us apart.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a young and energetic team, we understand the digital landscape from a contemporary viewpoint. We're not just keeping up with trends – we're setting them. Our passion drives us to deliver exceptional results that exceed expectations.
              </p>
            </div>

            <div className={`bg-black relative w-[283px] h-[200px] rounded-2xl overflow-hidden mx-auto shadow-2xl `}>
              <Image
                src="/kodac-banner.png"
                alt="Kodac Solutions"
                fill
                priority
                onLoadingComplete={()=>setLoaded(true)}
                className={`object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
              />
            </div>
          </div>
        </div>
      </section>
  )
}
