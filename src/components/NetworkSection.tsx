'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function NetworkSection() {
  const networkItems = [
    {
      category: 'DJ',
      name: 'DJ Karefree',
      url: 'https://djkarefree.com',
      description: 'Professional DJ services for all your events',
      icon: '🎧',
    },
    {
      category: 'Creative Director',
      name: 'Socha Space',
      url: 'https://sochaspace.com/',
      description: 'Creative direction and visual storytelling',
      icon: '🎨',
    },
    {
      category: 'Photography/Videography',
      name: 'D Shutter Stories',
      url: 'https://www.instagram.com/d_shutterstories?igsh=YWp1N3Jldjk0c2g5',
      description: 'Professional photography and videography services',
      icon: '📸',
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

  return (
    <section
      id='network'
      className='py-16 sm:py-20 lg:py-32 bg-gray-50 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          className='text-center mb-12 lg:mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='inline-flex items-center px-4 py-2 bg-orange-500 rounded-full mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className='text-white text-sm font-medium'>
              🤝 Our Network
            </span>
          </motion.div>

          <motion.h2
            className='text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            connect with
            <br />
            <span className='relative'>
              our network
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

          <motion.p
            className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Meet our trusted partners and collaborators who help bring your
            projects to life with their specialized expertise and creative
            vision.
          </motion.p>
        </motion.div>

        {/* Network Cards */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
        >
          {networkItems.map((item, index) => (
            <motion.div
              key={item.category}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='block bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full'
              >
                {/* Icon */}
                <motion.div
                  className='text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.icon}
                </motion.div>

                {/* Category */}
                <motion.div
                  className='text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.category}
                </motion.div>

                {/* Name */}
                <motion.h3
                  className='text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.name}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className='text-gray-600 leading-relaxed mb-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>

                {/* Link indicator */}
                <motion.div
                  className='flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-300'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className='text-sm'>Connect now</span>
                  <svg
                    className='ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200'
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
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className='text-center mt-12 lg:mt-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className='text-gray-600 mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Want to join our network? We're always looking for talented
            professionals to collaborate with.
          </motion.p>
          <motion.a
            href='https://calendar.app.google/dtx9EHNNdEQ4upHH7'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            Get in Touch
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
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
