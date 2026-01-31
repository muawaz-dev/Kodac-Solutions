"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react'

export default function Hero() {
    const [loaded, setLoaded] = useState(false)
    return (
        <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
            <div className="max-w-360 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Social Media Marketing</div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Social Media Marketing Services</h1>
                        <p className="text-xl text-gray-600 mb-8">Elevate your brand with consistent, engaging content and data-driven social media campaigns that connect with your audience and drive results.</p>
                        <Link href="/contact" className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">Start Your Campaign</Link>
                    </div>
                    <div className={`relative bg-black h-96 rounded-2xl overflow-hidden duration-1500 transition-shadow ${loaded ? 'shadow-2xl' : 'shadow-none'}`}>
                        <Image
                            loading='eager'
                            src="/services/social-media.webp"
                            alt="Social Media Marketing"
                            fill
                            onLoadingComplete={() => setLoaded(true)}
                            className={`object-cover transition-opacity duration-1500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                            fetchPriority='high'
                            sizes="(max-width: 1030px) 100vw,
             (max-width: 1510px) 50vw,
             700px"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
