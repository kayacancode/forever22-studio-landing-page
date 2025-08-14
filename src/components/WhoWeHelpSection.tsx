'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function WhoWeHelpSection() {
  const helpItemVariants = {
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

  const helpItems = [
    {
      title: 'Music Distributors & Indie Labels',
      description:
        'Automate release workflows, royalty reporting, and artist outreach.',
      icon: '',
    },
    {
      title: 'Sports-Culture & Media Brands',
      description:
        'Streamline content scheduling, fan segmentation, and sponsor reporting.',
      icon: '',
    },
    {
      title: 'Independent Media Platforms',
      description:
        'Centralize audience data, create real-time analytics dashboards, and manage multi-channel content.',
      icon: '',
    },
  ];

  return (
    <section className='py-20 lg:py-32 bg-white relative overflow-hidden'>
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
              Who We Help
            </span>
          </motion.div>

          <motion.h2
            className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Enterprise-Level Automation
            <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
              Without the Bloat
            </span>
          </motion.h2>

          <motion.p
            className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We partner with small-to-mid-sized media brands who want
            enterprise-level automation without enterprise-level bloat.
          </motion.p>
        </motion.div>

        {/* Help Items Grid */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {helpItems.map((item, index) => (
            <motion.div
              key={index}
              className='relative group'
              variants={helpItemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className='bg-gray-50 rounded-3xl p-8 h-full border border-gray-100 group-hover:border-orange-200 transition-all duration-300 group-hover:shadow-xl'>
                {/* Icon */}
                <motion.div
                  className='text-4xl mb-6 text-center'
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className='text-center space-y-4'>
                  <h3 className='text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {item.description}
                  </p>
                </div>

                {/* Hover effect gradient */}
                <div className='absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/0 group-hover:from-orange-50/30 group-hover:to-orange-100/30 rounded-3xl transition-all duration-300'></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className='absolute top-20 -left-16 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-xl'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          style={{
            animationDuration: '8s',
            animationIterationCount: 'infinite',
          }}
        />

        <motion.div
          className='absolute bottom-20 -right-16 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-orange-400/30 rounded-full blur-lg'
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          style={{
            animationDuration: '10s',
            animationIterationCount: 'infinite',
          }}
        />
      </div>
    </section>
  );
}
