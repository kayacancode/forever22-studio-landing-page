'use client';

import * as React from 'react';

import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import OurApproachSection from '@/components/OurApproachSection';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      {/* <Navigation /> */}
      <HeroSection />
      {/* <AboutUsSection /> */}
      <OurApproachSection />
      {/* <CoreCapabilitiesSection /> */}
      {/* <WhyForever22Section /> */}
      {/* <FeaturedProjectsSection /> */}
      {/* <TalentPoolSection /> */}
      <FooterSection />
    </main>
  );
}
