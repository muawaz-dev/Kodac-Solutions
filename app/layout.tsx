// Root Layout - Main Application Layout with Navbar and Footer
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kodac Solutions - Digital Services Agency | Web Development, Marketing & Design',
  description: 'Empowering businesses with expert website development, digital marketing, SEO, video editing, graphic design, and social media strategies to dominate the digital landscape.',
  keywords: 'web development, digital marketing, SEO, social media marketing, video editing, graphic design, Meta ads, productivity tools, agency services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
// End of Root Layout