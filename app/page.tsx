// Home Page - Main Landing Page
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import DigitalExcellence from '@/components/DigitalExcellence';
import StrategicProcesses from '@/components/StrategicProcesses';
import WhyChooseUs from '@/components/WhyChooseUs';
import TeamPreview from '@/components/TeamPreview';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Carousel Section */}
      <ServicesCarousel />

      {/* Digital Excellence Section */}
      <DigitalExcellence />

      {/* Strategic Processes Section */}
      <StrategicProcesses />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Team Preview Section */}
      <TeamPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}
// End of Home Page