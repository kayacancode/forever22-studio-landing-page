'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function HeroSection() {
  return (
    <section
      className='min-h-screen bg-white relative overflow-hidden flex items-center justify-center pt-20 md:pt-0'
      aria-label='Hero section'
    >
      {/* Subtle background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-50 to-white'></div>
      </div>

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Animated Logo */}
        <motion.div
          className='flex flex-col items-center mb-8 sm:mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Infinity Symbol */}
          <motion.svg
            width='120'
            height='60'
            viewBox='0 0 200 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mb-4'
            initial='hidden'
            animate='visible'
          >
            <motion.path
              d='M60 30 C30 30, 30 70, 60 70 C90 70, 110 30, 140 30 C170 30, 170 70, 140 70 C110 70, 90 30, 60 30 Z'
              stroke='#f97316'
              strokeWidth='4'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 2.5, ease: 'easeInOut' },
                opacity: { duration: 0.5 },
              }}
            />
          </motion.svg>

          {/* "22" below infinity */}
          <motion.div
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            22
          </motion.div>
        </motion.div>

        {/* Company Name */}

        {/* SEO-optimized main heading */}
        <motion.h1
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight px-2 sm:px-0'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className='text-orange-500 font-semibold'>Automate</span> Your
          Content,{' '}
          <span className='text-orange-500 font-semibold'>Amplify</span> Your
          Brand
        </motion.h1>

        {/* SEO-optimized subtitle */}
        <motion.h2
          className='text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 font-normal'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Custom <strong>content automation workflows</strong> for{' '}
          <strong>music platforms</strong>, <strong>sports media</strong>, and{' '}
          <strong>entertainment brands</strong>—designed to save time and scale{' '}
          <strong>audience engagement</strong> through intelligent automation
          solutions.
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href='https://calendar.app.google/dtx9EHNNdEQ4upHH7'
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
