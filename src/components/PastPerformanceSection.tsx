'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function FeaturedProjectsSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const projects = [
    {
      id: 1,
      title: 'Building the Future of Personal Branding',
      description:
        'Thryve AI is a next-generation marketing platform empowering athletes, influencers, and music artists with AI-driven eLearning, personalized portfolio showcases, and brand matchmaking to elevate their reach...',
      image: '/images/thryvelogo.png',
      category: 'AI, Personal Branding, Sports',
    },
    {
      id: 2,
      title: 'Automating the Future of Content Generation',
      description:
        'Youdle is an AI-driven content automation ecosystem that ingests RSS feeds, filters top articles via Zapier loops, and aggregates insights in Google Sheets to streamline publishing workflows...',
      image: '/images/youdle.png',
      category: 'Automation, AI, Content Generation, Publishing',
    },
    {
      id: 3,
      title: 'Building a Stage-Ready Online Presence for DJKarefree',
      description:
        'We designed and developed a sleek, user-centric website for DJKarefree, showcasing his mixes, event galleries, and integrated booking system to amplify his DJ services...',
      image: '/images/dj.png',
      category: 'Web Design, Music',
    },
    {
      id: 4,
      title:
        'Crafting a Mobile-First Blog & Admin Dashboard for InSuaveWeTrust',
      description:
        'We developed a phone-inspired UI for InSuaveWeTrust, integrating a full-featured blog and an intuitive admin dashboard to streamline content creation and site administration...',
      image: '/images/iswt.png',
      category: 'UI/UX, Admin Dashboard, Web App, Music',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // State for tracking if component has mounted (for hydration safety)
  const [mounted, setMounted] = React.useState(false);

  // Always start with SSR-safe default (allow all projects to be accessible)
  const [maxSlides, setMaxSlides] = React.useState(projects.length);

  React.useEffect(() => {
    // Calculate max slides based on screen size
    const getMaxSlides = () => {
      if (typeof window === 'undefined') return projects.length; // SSR fallback - allow all projects
      const width = window.innerWidth;
      if (width < 768) return projects.length; // Mobile: 1 card visible, can slide through all
      if (width < 1024) return projects.length - 1; // Tablet: 2 cards visible
      return projects.length - 2; // Desktop: 3 cards visible
    };

    // Mark as mounted and set actual max slides
    setMounted(true);
    setMaxSlides(getMaxSlides());

    const handleResize = () => {
      setMaxSlides(getMaxSlides());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.max(1, maxSlides)) % Math.max(1, maxSlides)
    );
  };

  // Calculate transform percentage based on screen size
  const getTransformPercentage = () => {
    if (!mounted || typeof window === 'undefined') return currentSlide * 33.333; // SSR-safe default
    const width = window.innerWidth;
    if (width < 768) return currentSlide * 100; // Mobile: 100% per slide
    if (width < 1024) return currentSlide * 50; // Tablet: 50% per slide
    return currentSlide * 33.333; // Desktop: 33.333% per slide
  };

  return (
    <section
      id='projects'
      className='py-16 sm:py-20 lg:py-32 bg-gray-50 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16'>
          {/* Left side - Description */}
          <motion.div
            className='space-y-4 lg:space-y-6'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              className='inline-flex items-center px-4 py-2 bg-orange-500 rounded-full mb-4 lg:mb-6'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className='text-white text-sm font-medium'>
                ⭐ Featured Projects
              </span>
            </motion.div>

            <motion.p
              className='text-base sm:text-lg text-gray-600 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Explore some of our featured projects that showcase our expertise
              in AI-powered solutions, automation, and modern software
              development.
            </motion.p>
          </motion.div>

          {/* Right side - Title */}
          <motion.div
            className='lg:text-right'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              className='text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              take a look
              <br />
              <span className='relative'>
                at our projects
                <motion.svg
                  className='absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-orange-500'
                  viewBox='0 0 300 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d='M2 6C50 2 100 2 150 6C200 10 250 10 298 6'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                  />
                </motion.svg>
              </span>
            </motion.h2>
          </motion.div>
        </div>

        {/* Projects Slider */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className='overflow-hidden'>
            <motion.div
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${getTransformPercentage()}%)` }}
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className='w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4'
                  variants={cardVariants}
                >
                  <div className='bg-white rounded-2xl lg:rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300'>
                    {/* Project Image */}
                    <div className='aspect-[4/3] bg-gray-100 relative overflow-hidden'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300'
                      />

                      {/* Overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent'></div>
                    </div>

                    {/* Project Content */}
                    <motion.div
                      className='p-4 sm:p-6 space-y-3 sm:space-y-4'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className='space-y-2'>
                        <div className='text-xs text-orange-500 font-medium uppercase tracking-wider'>
                          {project.category}
                        </div>
                        <h3 className='text-lg sm:text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 leading-tight'>
                          {project.title}
                        </h3>
                      </div>

                      <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                        {project.description}
                      </p>

                      <Link href={`/work/${project.id}`}>
                        <motion.div
                          className='text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center group/btn mt-4 cursor-pointer'
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn more
                          <svg
                            className='ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200'
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
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            className='flex justify-center space-x-4 mt-8 lg:mt-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={prevSlide}
              className='w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-200 group shadow-sm'
              disabled={currentSlide === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className='w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-200 group shadow-sm'
              disabled={currentSlide >= Math.max(1, maxSlides) - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            className='flex justify-center space-x-2 mt-4 lg:mt-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            {Array.from({ length: Math.max(1, maxSlides) }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
