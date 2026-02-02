// Footer Component - Site Footer with Links and Contact Info


import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="w-48 h-12 relative">
              <Image
                src="/logo-white.png"
                alt="Kodac Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 max-w-md">
              Empowering businesses with expert website development, digital marketing, and social media strategies to dominate the digital landscape.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/kodacsolutions/"
                target="_blank"
                aria-label="Visit our Facebook page"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kodacsolutions/"
                target="_blank"
                aria-label="Visit our Instagram page"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kodac-solutions/"
                target="_blank"
                aria-label="Visit our LinkedIn page"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-1">ADDRESS:</p>
                <p>USA</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">EMAILS:</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=team@kodacsolutions.com" target="_blank" className="hover:text-red-500 transition-colors">
                  team@kodacsolutions.com
                </a>
              </div>
              <div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@kodacsolutions.com" target="_blank" className="hover:text-red-500 transition-colors">
                  sales@kodacsolutions.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">PHONE:</p>
                <a href="tel:+16097924388" className="hover:text-red-500 transition-colors">
                  +1 609 792 4388
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-300">
              <Link href="/" className="block hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block hover:text-red-500 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-red-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>Copyright 2026, All Rights Reserved by Kodac Solutions</p>
        </div>
      </div>
    </footer>
  );
}
// End of Footer Component