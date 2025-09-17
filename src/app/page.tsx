'use client';

import * as React from 'react';

import CoreCapabilitiesSection from '@/components/CoreCapabilitiesSection';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import OurApproachSection from '@/components/OurApproachSection';
import PastPerformanceSection from '@/components/PastPerformanceSection';
import WhyForever22Section from '@/components/WhyForever22Section';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <HeroSection />
      <OurApproachSection />
      <CoreCapabilitiesSection />
      <WhyForever22Section />
      <PastPerformanceSection />
      <FooterSection />
    </main>
  );
}
