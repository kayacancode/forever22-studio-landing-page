'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function OurApproachSection() {
  const steps = [
    {
      id: '01',
      title: 'Identify',
      description: 'Workflows, pain points, and growth opportunities.',
      tone: 'from-orange-50 to-orange-100',
      pin: 'bg-orange-500',
      rotate: '-rotate-3',
    },
    {
      id: '02',
      title: 'Design',
      description: 'Secure, scalable systems and clear architecture.',
      tone: 'from-indigo-50 to-indigo-100',
      pin: 'bg-indigo-500',
      rotate: 'rotate-2',
    },
    {
      id: '03',
      title: 'Deliver',
      description: 'Build, deploy, and support AI-powered products.',
      tone: 'from-violet-50 to-violet-100',
      pin: 'bg-violet-500',
      rotate: '-rotate-1',
    },
  ];

  return (
    <section
      className='py-24 bg-gray-50/70 relative overflow-hidden'
      aria-label='Our Approach section'
    >
      {/* soft background grid/texture */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white' />
        <svg
          className='absolute inset-0 h-full w-full opacity-[0.15]'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <pattern
              id='lines'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M0 0L40 0'
                stroke='currentColor'
                className='text-gray-300'
                strokeWidth='1'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#lines)' />
        </svg>
      </div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          className='text-center mb-16 sm:mb-20'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-6'>
            <span className='text-sm text-gray-600'>How We Work</span>
          </div>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-800 leading-tight'>
            Our Process,
            <br className='hidden sm:block' />
            <span className='whitespace-nowrap'>Step by Step</span>
          </h2>
          <p className='mt-6 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto'>
            From the first step to launch, we focus on outcomes—not buzzwords.
          </p>
        </motion.div>

        {/* Canvas with cards and connectors */}
        <div className='relative rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 p-6 sm:p-10'>
          {/* connectors */}
          <svg
            className='absolute inset-0 w-full h-full'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M30,140 C220,120 340,60 520,100'
              stroke='#D1D5DB'
              strokeWidth='2'
              strokeDasharray='6 6'
              fill='none'
            />
            <path
              d='M520,220 C340,260 220,220 60,280'
              stroke='#D1D5DB'
              strokeWidth='2'
              strokeDasharray='6 6'
              fill='none'
            />
          </svg>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative'>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative ${step.rotate}`}
                initial={{
                  opacity: 0,
                  y: 30,
                  rotate: index % 2 === 0 ? -6 : 6,
                }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* pin */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 ${step.pin} rounded-full shadow-md`}
                />
                {/* card */}
                <div
                  className={`rounded-2xl bg-gradient-to-br ${step.tone} p-5 sm:p-6 border border-white shadow-md`}
                >
                  <div className='text-sm font-semibold text-gray-500 mb-2'>
                    {step.id}
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer copy */}
        <motion.p
          className='text-center text-gray-700 mt-12 max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We design with measurable impact in mind and deliver production-grade
          systems that scale.
        </motion.p>
      </div>
    </section>
  );
}
