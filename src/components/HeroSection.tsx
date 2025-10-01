'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function HeroSection() {
  return (
    <section
      className='min-h-screen bg-gray-100 relative overflow-hidden flex items-center justify-center pt-20 md:pt-0'
      aria-label='Hero section'
    >
      {/* Orange rounded background */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          className='w-[90%] max-w-4xl h-[80%] bg-orange-500 rounded-[3rem] flex items-center justify-center'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className='text-center px-8'>
            {/* Forever 22 Logo */}
            <motion.div
              className='mb-8'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4'>
                Forever 22
              </h1>
            </motion.div>

            {/* Subtitle removed per request */}

            {/* Description */}
            <motion.p
              className='text-base sm:text-lg text-black mb-12 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We aren’t just a product dev studio.
              <br />
              <br />
              Forever 22 consults, finds the problem, builds the solution, and
              then turns it into a revenue-generating SaaS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href='https://calendar.app.google/dtx9EHNNdEQ4upHH7'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-lg'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Chat
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
