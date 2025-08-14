'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function WhatWeDoSection() {
  const serviceItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const services = [
    {
      title: 'Automated Content Pipelines',
      description:
        'Create, schedule, and publish across channels automatically.',
      icon: '🚀',
    },
    {
      title: 'Audience Segmentation & Targeting',
      description:
        'Group fans or listeners dynamically for personalized engagement.',
      icon: '🎯',
    },
    {
      title: 'Profile & Asset Management',
      description:
        'Maintain organized, always-current artist or athlete profiles.',
      icon: '📁',
    },
    {
      title: 'Sponsor & Performance Dashboards',
      description: 'Live, automated reports on reach, engagement, and ROI.',
      icon: '📈',
    },
    {
      title: 'Cross-Platform Distribution',
      description: 'Push content to web, social, and email with one workflow.',
      icon: '🌐',
    },
    {
      title: 'VC & Portfolio Management',
      description:
        'Streamline investor updates, portfolio onboarding, and operational workflows to give founders and investors deeper visibility and faster results.',
      icon: '🌐',
    },
  ];

  return (
    <section className='py-20 lg:py-32 bg-gray-50 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-6'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className='text-orange-600 text-sm font-medium uppercase tracking-wider'>
              What We Do
            </span>
          </motion.div>

          <motion.h2
            className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Automation Services
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
              Built for Media Growth
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='bg-white rounded-[40px] p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden'>
            {/* Background gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-orange-50/20 to-gray-50/20'></div>

            <div className='relative z-10'>
              {/* Services Grid */}
              <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-50px' }}
                transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className='group'
                    variants={serviceItemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 group-hover:border-orange-200 group-hover:bg-white transition-all duration-300 group-hover:shadow-lg'>
                      {/* Icon */}
                      <motion.div
                        className='text-3xl mb-4'
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {service.icon}
                      </motion.div>

                      {/* Content */}
                      <div className='space-y-3'>
                        <h3 className='text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300'>
                          {service.title}
                        </h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                          {service.description}
                        </p>
                      </div>

                      {/* Hover gradient effect */}
                      <div className='absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/0 group-hover:from-orange-50/20 group-hover:to-orange-100/20 rounded-2xl transition-all duration-300'></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom CTA */}
              <motion.div
                className='text-center mt-12 pt-8 border-t border-gray-100'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className='text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  Ready to streamline your media operations and scale your
                  audience engagement?
                </motion.p>

                <motion.a
                  href='https://calendar.app.google/dtx9EHNNdEQ4upHH7'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Let's Discuss Your Project
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
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className='absolute top-16 -right-12 w-28 h-28 bg-gradient-to-br from-orange-200/25 to-orange-300/25 rounded-full blur-xl'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 90, 180],
          }}
          style={{
            animationDuration: '12s',
            animationIterationCount: 'infinite',
          }}
        />

        <motion.div
          className='absolute bottom-24 -left-12 w-20 h-20 bg-gradient-to-br from-orange-300/30 to-orange-400/30 rounded-full blur-lg'
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          animate={{
            x: [0, 20, 0],
            y: [0, -25, 0],
          }}
          style={{
            animationDuration: '14s',
            animationIterationCount: 'infinite',
          }}
        />
      </div>
    </section>
  );
}
