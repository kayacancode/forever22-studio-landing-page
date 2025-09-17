'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function AboutUsSection() {
  return (
    <section className='py-20 bg-white' aria-label='About Us section'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Section - Introduction */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <motion.div
            className='inline-block bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.div>

          {/* Headline */}
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A true builder's company at heart.
          </motion.h2>

          {/* Body Text */}
          <motion.p
            className='text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Forever 22 is a product studio dedicated to creating AI-powered
            systems, applications, and platforms that solve complex problems in
            simple, impactful ways. We work across industries — from startups to
            government — delivering technology that reduces inefficiencies and
            opens new paths for growth.
          </motion.p>
        </motion.div>

        {/* Our Core Section - Card Component */}
        <motion.div
          className='bg-white rounded-3xl shadow-lg p-8 lg:p-12'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Column - Text Content */}
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Heading */}
              <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Our Core
              </h3>

              {/* Paragraphs */}
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  Forever 22 was founded by Kaya Jones, a computer scientist and
                  entrepreneur who began building software while competing as a
                  student-athlete and working in organizations like NASA. Kaya
                  launched Forever 22 to serve as a venture studio and
                  development partner, focused on combining automation, AI, and
                  software innovation to create lasting impact.
                </p>

                <p>
                  We operate as a builder's collective: every project is
                  designed not only to solve immediate challenges but also to
                  lay the foundation for sustainable value — whether that means
                  automating operations, scaling content, or developing new
                  revenue-generating platforms.
                </p>
              </div>

              {/* Guiding Principle */}
              <motion.div
                className='pt-4 border-t border-gray-200'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className='text-lg font-medium text-gray-900 italic'>
                  Our guiding principle is simple but powerful:
                </p>
                <p className='text-xl font-bold text-orange-500 mt-2'>
                  Lead with service, build with love.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - LinkedIn Link */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className='aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden flex items-center justify-center'>
                <motion.a
                  href='https://www.linkedin.com/in/kayarjones/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-center text-gray-700 hover:text-orange-500 transition-colors duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className='w-16 h-16 mx-auto mb-4 text-current'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                  <p className='text-lg font-medium'>Connect with Kaya</p>
                  <p className='text-sm opacity-75'>LinkedIn Profile</p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
