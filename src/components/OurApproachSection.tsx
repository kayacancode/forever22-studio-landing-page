'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function OurApproachSection() {
  const approachSteps = [
    {
      title: 'Identify',
      description: 'Assess workflows, pain points, and opportunities.',
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
      title: 'Design',
      description: 'Architect efficient, secure, and scalable systems.',
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
            d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
          />
        </svg>
      ),
    },
    {
      title: 'Deliver',
      description:
        'Build, deploy, and support AI-powered tools and platforms that drive results.',
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
  ];

  return (
    <section className='py-20 bg-white' aria-label='Our Approach section'>
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
            Our Approach
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            Forever 22 delivers technology solutions with measurable impact.
            Each engagement follows a clear process:
          </p>
        </motion.div>

        {/* Approach Steps */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className='text-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className='inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-6'>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4'>
                {step.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed'>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed'>
            We focus on <strong>outcomes, not buzzwords</strong> — ensuring your
            investment translates into tangible efficiencies and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
