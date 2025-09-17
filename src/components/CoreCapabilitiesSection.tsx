'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function CoreCapabilitiesSection() {
  const capabilities = [
    {
      title: 'Custom Software Development',
      description: 'Web, mobile, and desktop applications.',
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
            d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
          />
        </svg>
      ),
    },
    {
      title: 'Data Dashboards & Reporting',
      description: 'Real-time visibility into performance and metrics.',
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
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
      ),
    },
    {
      title: 'AI-Enabled Solutions',
      description:
        'Natural language interfaces, predictive analytics, intelligent content pipelines.',
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
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
    },
    {
      title: 'Workflow Automation',
      description: 'Reduce manual processes, cut costs, and increase accuracy.',
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
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      ),
    },
    {
      title: 'Revenue-Generating Platforms',
      description: 'Transform operations into SaaS and digital products.',
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
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id='capabilities'
      className='py-20 bg-gray-50'
      aria-label='Core Capabilities section'
    >
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
            Core Capabilities
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className='inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-6'>
                {capability.icon}
              </div>

              {/* Title */}
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                {capability.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed'>
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
