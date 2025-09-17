'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function TalentPoolSection() {
  // Generate diverse avatar colors
  const avatarColors = [
    'bg-blue-200',
    'bg-yellow-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-green-200',
    'bg-indigo-200',
    'bg-orange-200',
    'bg-teal-200',
    'bg-red-200',
    'bg-cyan-200',
    'bg-lime-200',
    'bg-amber-200',
    'bg-violet-200',
    'bg-emerald-200',
    'bg-rose-200',
    'bg-sky-200',
  ];

  // Generate 16 avatars with different expressions and accessories
  const avatars = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    color: avatarColors[index],
    emoji: [
      '😊',
      '😎',
      '🤓',
      '😄',
      '😉',
      '🤔',
      '😋',
      '😍',
      '🥳',
      '😌',
      '🤩',
      '😏',
      '😜',
      '😇',
      '🤗',
      '😊',
    ][index],
  }));

  return (
    <section className='py-20 bg-white' aria-label='Talent Pool section'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='bg-white rounded-3xl shadow-lg p-8 lg:p-12'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Side - Avatar Grid */}
            <motion.div
              className='order-2 lg:order-1'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className='grid grid-cols-4 gap-3 max-w-sm mx-auto lg:mx-0'>
                {avatars.map((avatar, index) => (
                  <motion.div
                    key={avatar.id}
                    className={`w-16 h-16 ${avatar.color} rounded-full flex items-center justify-center text-2xl shadow-sm`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.05,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {avatar.emoji}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Text and CTA */}
            <motion.div
              className='order-1 lg:order-2 text-center lg:text-left'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Headline */}
              <motion.h2
                className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Join our talent pool
              </motion.h2>

              {/* Body Text */}
              <motion.p
                className='text-lg text-gray-600 leading-relaxed mb-8'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Forever 22 is responsible for employing talented individuals
                across the globe. Our main priority is to each and every day
                create new opportunities and environments for talent to thrive.
                Join our talent pool to expose yourself to all the Forever 22
                ventures and projects.
              </motion.p>

              {/* Apply Button */}
              <motion.a
                href='https://tally.so/r/woJWz1'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply
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
        </motion.div>
      </div>
    </section>
  );
}
