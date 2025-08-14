'use client';

import * as React from 'react';

import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import NetworkSection from '@/components/NetworkSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import WhoWeHelpSection from '@/components/WhoWeHelpSection';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <HeroSection />
      {/* <TrustedSection /> */}
      <AboutSection />
      <WhoWeHelpSection />
      <WhatWeDoSection />
      <TestimonialsSection />
      <ProjectsSection />
      <NetworkSection />
      <FooterSection />
    </main>
  );
}
