// Root Layout - Main Application Layout with Navbar and Footer
import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Kodac Solutions - Digital Services Agency | Web Development, Marketing & Design',
  description: 'Empowering businesses with expert website development, digital marketing, video editing, graphic design, and social media strategies to dominate the digital landscape.',
  keywords: 'web development, digital marketing, SEO, social media marketing, video editing, graphic design, Meta ads, productivity tools, agency services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/test.png" as="image" />
        <link rel="icon" type="image/png" href="/logo-tab.png" />
      </head>
      <body className={`${manrope.variable} ${sora.variable} ${manrope.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// End of Root Layout