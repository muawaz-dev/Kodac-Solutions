"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
export default function Hero() {
    const [loaded, setLoaded] = useState(false)
    return (
        <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
            <div className="max-w-360 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Productivity Tools</div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Productivity Tools & Automation</h1>
                        <p className="text-xl text-gray-600 mb-8">Streamline your workflow with cutting-edge productivity tools and automation solutions that save time, reduce errors, and boost efficiency across your organization.</p>
                        <Link href="/contact" className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">Optimize Your Workflow</Link>
                    </div>
                    <div className={`relative bg-[#FCF3F6] h-96 rounded-2xl overflow-hidden duration-1500 transition-shadow ${loaded ? 'shadow-2xl' : 'shadow-none'}`}>
                        <Image
                            src="/services/productivity-tools.webp"
                            alt="Productivity Tools"
                            fill
                            onLoadingComplete={() => setLoaded(true)}
                            className={`object-cover transition-opacity duration-1500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                            fetchPriority='high'
                            loading='eager'
                            sizes="(max-width: 1030px) 100vw,
             (max-width: 1510px) 50vw,
             700px"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
