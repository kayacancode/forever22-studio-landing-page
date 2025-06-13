'use client';

import * as React from 'react';

import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <HeroSection />
      {/* <TrustedSection /> */}
      <AboutSection />
      <TestimonialsSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
