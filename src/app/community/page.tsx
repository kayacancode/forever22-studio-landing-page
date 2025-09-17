'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function CommunityPage() {
  return (
    <main className='min-h-screen bg-white pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <motion.div
              className='inline-block bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-6'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Community
            </motion.div>

            {/* Headline */}
            <motion.h1
              className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join the community of{' '}
              <span className='text-orange-500'>like-minded</span> individuals
            </motion.h1>

            {/* Description */}
            <motion.p
              className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Forever 22 hosts events throughout the city and meetups. Connect
              with builders, creators, and innovators who share your passion for
              technology and making an impact.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href='https://tally.so/r/3qXK8Y'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Here
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
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              What to Expect
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Our community brings together passionate individuals who are
              building the future
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: '🎯',
                title: 'Networking Events',
                description:
                  'Connect with fellow builders, entrepreneurs, and tech enthusiasts at our regular meetups throughout the city.',
              },
              {
                icon: '🚀',
                title: 'Innovation Talks',
                description:
                  'Learn from industry leaders and share your own insights in our collaborative discussion sessions.',
              },
              {
                icon: '🤝',
                title: 'Collaboration Opportunities',
                description:
                  'Find co-founders, team members, and partners for your next big project or venture.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            className='bg-orange-500 rounded-3xl p-8 lg:p-12 text-white'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
              Ready to Join?
            </h2>
            <p className='text-lg mb-8 opacity-90'>
              Be part of a community that's shaping the future of technology and
              innovation.
            </p>
            <motion.a
              href='https://tally.so/r/3qXK8Y'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Community
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
    </main>
  );
}
