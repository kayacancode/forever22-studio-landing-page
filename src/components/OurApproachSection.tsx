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
        <div className='relative rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 p-6 sm:p-10 overflow-visible'>
          {/* connectors */}
          {/* Mobile: stacked large cards */}
          <div className='md:hidden space-y-6'>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className='relative w-full max-w-[420px] mx-auto'
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 ${steps[index].pin} rounded-full shadow-md`}
                />
                <div
                  className={`rounded-2xl bg-gradient-to-br ${steps[index].tone} p-6 border border-white shadow-md`}
                >
                  <div className='text-sm font-semibold text-gray-500 mb-2'>
                    {steps[index].id}
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {steps[index].title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {steps[index].description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: tall canvas with staggered absolute cards that you scroll through */}
          <div className='hidden md:block relative min-h-[140vh]'>
            {/* curved connectors tailored to positions below */}
            <svg
              className='absolute inset-0 w-full h-full'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18,220 C220,160 360,120 610,190'
                stroke='#D1D5DB'
                strokeWidth='2'
                strokeDasharray='6 6'
                fill='none'
              />
              <path
                d='M610,420 C420,500 240,520 80,600'
                stroke='#D1D5DB'
                strokeWidth='2'
                strokeDasharray='6 6'
                fill='none'
              />
            </svg>

            {/* card 1 */}
            <motion.div
              className='absolute left-[6%] top-[6%] w-[420px]'
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            >
              <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full shadow-md' />
              <div className='rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 border border-white shadow-md'>
                <div className='text-sm font-semibold text-gray-500 mb-2'>
                  01
                </div>
                <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                  Identify
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  Workflows, pain points, and growth opportunities.
                </p>
              </div>
            </motion.div>

            {/* card 2 */}
            <motion.div
              className='absolute right-[8%] top-[32%] w-[420px]'
              initial={{ opacity: 0, y: 40, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            >
              <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full shadow-md' />
              <div className='rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 border border-white shadow-md'>
                <div className='text-sm font-semibold text-gray-500 mb-2'>
                  02
                </div>
                <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                  Design
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  Secure, scalable systems and clear architecture.
                </p>
              </div>
            </motion.div>

            {/* card 3 */}
            <motion.div
              className='absolute left-[18%] top-[66%] w-[420px]'
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            >
              <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-violet-500 rounded-full shadow-md' />
              <div className='rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 p-6 border border-white shadow-md'>
                <div className='text-sm font-semibold text-gray-500 mb-2'>
                  03
                </div>
                <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                  Deliver
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  Build, deploy, and support AI-powered products.
                </p>
              </div>
            </motion.div>
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
