'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function OurApproachSection() {
  const steps = [
    {
      id: '01',
      title: 'Consulting & Discovery',
      description: 'Identify workflows that can be automated or productized.',
      tone: 'from-orange-50 to-orange-100',
      pin: 'bg-orange-500',
      rotate: '-rotate-3',
    },
    {
      id: '02',
      title: 'Build & Launch',
      description: 'Deliver the first working automation/SaaS.',
      tone: 'from-indigo-50 to-indigo-100',
      pin: 'bg-indigo-500',
      rotate: 'rotate-2',
    },
    {
      id: '03',
      title: 'Productize & Scale',
      description:
        'White-label it, add profiles + payments, and transform it into a SaaS business.',
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
        </motion.div>

        {/* Canvas with cards and connectors */}
        <div className='relative rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 p-6 sm:p-10 overflow-visible'>
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

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 place-items-center'>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative w-full max-w-[360px] ${step.rotate}`}
                initial={{
                  opacity: 0,
                  y: 24,
                  rotate: index % 2 === 0 ? -4 : 4,
                }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: '-50px' }}
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
      </div>
    </section>
  );
}
