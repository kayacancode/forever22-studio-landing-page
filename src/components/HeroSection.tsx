'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function HeroSection() {
  return (
    <section className='min-h-screen bg-white relative overflow-hidden flex items-center justify-center pt-20 md:pt-0'>
      {/* Subtle background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white'></div>
      </div>

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Company Name */}
        <motion.h1
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Forever 22 Studio
        </motion.h1>

        {/* Updated tagline */}
        <motion.p
          className='text-lg sm:text-xl md:text-xl lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We help{' '}
          <span className='text-orange-500 font-semibold'>businesses</span>,{' '}
          <span className='text-orange-500 font-semibold'>athletes</span>,{' '}
          <span className='text-orange-500 font-semibold'>artists</span>, and{' '}
          <span className='text-orange-500 font-semibold'>founders</span> bring
          their digital visions to life
        </motion.p>

        {/* Supporting text */}
        <motion.p
          className='text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          From web applications to mobile solutions, we build technology that
          scales with your ambitions
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href='https://cal.com/forever22studio/15min'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <svg
              className='ml-2 w-4 h-4 sm:w-5 sm:h-5'
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
  );
}
