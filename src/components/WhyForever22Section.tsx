'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function WhyForever22Section() {
  const reasons = [
    {
      title: 'Agile & Reliable',
      description:
        'Flexible for startups, disciplined for enterprise and government.',
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      ),
    },
    {
      title: 'Proven Track Record',
      description:
        'SaaS platforms, AI search systems, e-learning tools, and operational dashboards.',
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Contract-Ready',
      description:
        'Familiar with NAICS, CAGE, UEI, DUNS, and compliance requirements.',
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      ),
    },
    {
      title: 'Service Ethos',
      description: 'Our mantra: Lead with service, build with love.',
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      ),
    },
  ];

  return (
    <section className='py-20 bg-white' aria-label='Why Forever 22 section'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Why Forever 22
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className='flex items-start space-x-6'
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className='flex-shrink-0 inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full'>
                {reason.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3'>
                  {reason.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
