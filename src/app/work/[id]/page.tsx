'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import * as React from 'react';

import FooterSection from '@/components/FooterSection';
import Navigation from '@/components/Navigation';

// Project data - this would typically come from a database or CMS
const projects = {
  1: {
    id: 1,
    title: 'Thryve AI',
    subtitle: 'Building the Future of Personal Branding',
    description:
      'Thryve AI is a next-generation marketing platform empowering athletes, influencers, and music artists with AI-driven eLearning, personalized portfolio showcases, and brand matchmaking to elevate their reach.',
    image: '/images/thryvelogo.png',
    category: 'AI, Personal Branding',
    client: 'Thryve AI',
    liveUrl: 'https://thryveai.ai',
    technologies: [
      'Next.js',
      'TypeScript',
      'AI/ML',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
    ],
    challenge:
      'Creating a comprehensive platform that combines AI-driven learning with personal branding tools for athletes and artists. The challenge was to build an intuitive interface that could handle complex AI recommendations while maintaining a clean, professional design.',
    solution:
      'We developed a multi-faceted platform featuring AI-powered course recommendations, dynamic portfolio builders, and intelligent brand matching algorithms. The platform uses machine learning to analyze user profiles and suggest personalized growth strategies.',
    results: [
      'Increased user engagement by 300% in the first quarter',
      'Successfully matched over 500 athletes with brand partnerships',
      'Achieved 95% user satisfaction rating',
      'Processed over 10,000 AI-driven recommendations',
    ],
    features: [
      'AI-Powered eLearning Platform',
      'Dynamic Portfolio Showcase',
      'Brand Matchmaking Algorithm',
      'Real-time Analytics Dashboard',
      'Mobile-First Design',
      'Social Media Integration',
    ],
    gallery: [
      '/images/thryvelogo.png',
      '/images/logo1.png',
      '/images/iconlogo.png',
    ],
  },
  2: {
    id: 2,
    title: 'Youdle',
    subtitle: 'Automating the Future of Content Generation',
    description:
      'Youdle is an AI-driven content automation ecosystem that ingests RSS feeds, filters top articles via Zapier loops, and aggregates insights in Google Sheets to streamline publishing workflows.',
    image: '/images/youdle.png',
    category: 'Automation, AI, Content Generation, Publishing',
    client: 'Youdle',
    liveUrl: 'https://www.youdleit.com/',
    technologies: [
      'Zapier',
      'Google Sheets API',
      'RSS Feeds',
      'AI/ML',
      'Python',
      'Node.js',
      'OpenAI API',
    ],
    challenge:
      'As Youdle evolved from a grassroots Facebook group into a full-fledged, location-based product-discovery platform, they needed to transform their community insights into a scalable, automated publishing engine. The challenge was maintaining the personal touch of community-driven product sightings while building an automated system that could handle real-time data from multiple grocery partners.',
    solution:
      'As Youdle evolved from a grassroots Facebook group into a full-fledged, location-based product-discovery platform, we partnered with them to turn their community insights into a scalable, automated publishing engine. Specifically, we: Built custom RSS pipelines for their network of grocery partners, so every store\'s stock updates flow into Zapier in real time. Looped through those feeds to surface the top three most relevant product-sighting articles per category—mirroring how Memphians once helped each other spot essentials on empty shelves. Aggregated everything in Google Sheets, creating a single source of truth for the Youdle team to review, enrich with crowdsourced photos, and publish back to the platform. That automation backbone lets Youdle honor its "You + Data, Location, Engagement" ethos—combining user-generated sightings with data feeds to connect families to the products they need, exactly where they need them.',
    results: [
      'Processed over 50,000 articles per month automatically',
      'Reduced content curation time by 90%',
      'Achieved 85% accuracy in trending topic prediction',
      'Generated 200+ high-quality content insights weekly',
    ],
    features: [
      'Automated RSS Feed Ingestion',
      'AI-Powered Content Filtering',
      'Zapier Workflow Integration',
      'Google Sheets Automation',
      'Trending Topic Detection',
      'Content Quality Scoring',
      'Mailchimp Campaign Creation',
      'Blogger Publishing',
    ],
    gallery: [
      '/images/youdle.png',
      '/images/logo1.png',
      '/images/iconlogo.png',
    ],
  },
  3: {
    id: 3,
    title: 'DJKarefree',
    subtitle: 'Building a Stage-Ready Online Presence',
    description:
      'We designed and developed a sleek, user-centric website for DJKarefree, showcasing his mixes, event galleries, and integrated booking system to amplify his DJ services and connect with fans worldwide.',
    image: '/images/dj.png',
    category: 'Web Design, Music',
    client: 'DJKarefree',
    liveUrl: 'https://djkarefree.com',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'SoundCloud API',
      'Calendly Integration',
    ],
    challenge:
      'DJKarefree needed a professional online presence that would showcase his musical talent while providing an easy way for event organizers and fans to connect with him. The challenge was creating a platform that balanced artistic expression with functional booking capabilities, all while ensuring the site performed well across devices and loaded quickly for users browsing his music content.',
    solution:
      'We developed a modern, responsive website that serves as both a portfolio and booking platform for DJKarefree. The site features an integrated music player for his latest mixes, a dynamic event gallery showcasing his performances, and a streamlined booking system. We implemented smooth animations and transitions to create an engaging user experience that reflects the energy of his performances while maintaining fast load times and mobile optimization.',
    results: [
      'Increased booking inquiries by 250% within first month',
      'Achieved 40% increase in social media followers',
      'Reduced booking process time from days to hours',
      'Generated 500+ new fan connections through the platform',
    ],
    features: [
      'Integrated Music Player',
      'Event Gallery & Portfolio',
      'Online Booking System',
      'Social Media Integration',
      'Mobile-First Design',
      'Performance Analytics',
    ],
    gallery: ['/images/dj.png', '/images/logo1.png', '/images/iconlogo.png'],
  },
  4: {
    id: 4,
    title: 'InSuaveWeTrust',
    subtitle: 'Crafting a Mobile-First Blog & Admin Dashboard',
    description:
      'We developed a phone-inspired UI for InSuaveWeTrust, integrating a full-featured blog and an intuitive admin dashboard to streamline content creation and site administration.',
    image: '/images/iswt.png',
    category: 'UI/UX, Admin Dashboard, Web App, Music',
    client: 'InSuaveWeTrust',
    liveUrl: 'https://insuavewetrust.com',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'Framer Motion',
      'Next Auth',
      'Cloudinary',
    ],
    challenge:
      'InSuaveWeTrust needed a comprehensive digital platform that could serve as both a music blog and content management system. The challenge was creating a mobile-first design that felt intuitive and modern while providing robust admin capabilities for content creators. The platform needed to handle multimedia content, user authentication, and maintain fast performance across all devices.',
    solution:
      'We designed and developed a sleek, phone-inspired interface that prioritizes mobile usability without sacrificing desktop functionality. The platform features a custom CMS with an intuitive admin dashboard, allowing content creators to easily publish articles, manage media, and track engagement. We implemented a clean, modern design system with smooth animations and responsive layouts that adapt beautifully to any screen size.',
    results: [
      'Increased content publishing efficiency by 75%',
      'Achieved 60% mobile traffic engagement rate',
      'Reduced content creation time from hours to minutes',
      'Generated 300% increase in user session duration',
    ],
    features: [
      'Mobile-First Responsive Design',
      'Custom Content Management System',
      'Intuitive Admin Dashboard',
      'Media Management & Optimization',
      'User Authentication & Roles',
      'Real-time Content Preview',
      'SEO Optimization Tools',
      'Analytics Integration',
    ],
    gallery: ['/images/iswt.png', '/images/logo1.png', '/images/iconlogo.png'],
  },
};

export default function WorkPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-24 pb-16 bg-white relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left side - Project Info */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className='inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className='text-orange-600 text-sm font-medium uppercase tracking-wider'>
                  {project.category}
                </span>
              </motion.div>

              <motion.h1
                className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                className='text-xl text-gray-600 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {project.subtitle}
              </motion.p>

              <motion.p
                className='text-lg text-gray-500 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {project.description}
              </motion.p>

              {/* View Live Project Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Live Project
                  <svg
                    className='ml-2 w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Project Details */}
              <motion.div
                className='grid grid-cols-2 gap-6 pt-8 border-t border-gray-200'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div>
                  <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2'>
                    Client
                  </h3>
                  <p className='text-gray-600'>{project.client}</p>
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2'>
                    Category
                  </h3>
                  <p className='text-gray-600'>{project.category}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Project Image */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className='relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Challenge */}
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
                The Challenge
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
                The Solution
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Technologies Used
            </h2>
            <p className='text-lg text-gray-600'>
              The tech stack that powered this project
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className='bg-gray-50 rounded-xl p-4 text-center hover:bg-orange-50 transition-colors duration-200'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className='text-gray-700 font-medium'>{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Results & Impact
            </h2>
            <p className='text-lg text-gray-600'>
              The measurable outcomes of our collaboration
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.results.map((result, index) => (
              <motion.div
                key={result}
                className='flex items-start space-x-4'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-3 h-3 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-lg text-gray-700'>{result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
              Ready to start your project?
            </h2>
            <p className='text-xl text-gray-600'>
              Let's build something amazing together. Whether you're a business,
              athlete, artist, or founder, we're here to help bring your vision
              to life.
            </p>
            <motion.a
              href='https://cal.com/forever22studio/15min'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg
                className='ml-2 w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
