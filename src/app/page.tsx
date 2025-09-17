'use client';

import * as React from 'react';

import AboutUsSection from '@/components/AboutUsSection';
import CoreCapabilitiesSection from '@/components/CoreCapabilitiesSection';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import OurApproachSection from '@/components/OurApproachSection';
import FeaturedProjectsSection from '@/components/PastPerformanceSection';
import TalentPoolSection from '@/components/TalentPoolSection';
import WhyForever22Section from '@/components/WhyForever22Section';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <OurApproachSection />
      <CoreCapabilitiesSection />
      <WhyForever22Section />
      <FeaturedProjectsSection />
      <TalentPoolSection />
      <FooterSection />
    </main>
  );
}
