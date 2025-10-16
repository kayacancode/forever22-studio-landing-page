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

            {/* Right Column - Video */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className='relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-video'>
                <video
                  className='w-full h-full object-cover'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='auto'
                >
                  <source src='/images/teamvid.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
