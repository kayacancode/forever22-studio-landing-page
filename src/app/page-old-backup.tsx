'use client';

import * as React from 'react';

import AboutUsSection from '@/components/AboutUsSection';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import FeaturedProjectsSection from '@/components/PastPerformanceSection';
import TalentPoolSection from '@/components/TalentPoolSection';
export default function HomePage() {
  return (
    <main className='min-h-screen'>
      {/* <Navigation /> */}
      <HeroSection />
      <AboutUsSection />
      {/* <OurApproachSection /> */}
      {/* <CoreCapabilitiesSection /> */}
      {/* <WhyForever22Section /> */}
      <FeaturedProjectsSection />
      <TalentPoolSection />
      <FooterSection />
    </main>
  );
}
