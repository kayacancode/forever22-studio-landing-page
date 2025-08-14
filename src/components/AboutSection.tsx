'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function AboutSection() {
  const _statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const _statItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id='about'
      className='py-20 lg:py-32 bg-gray-50 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative'>
        {/* Top Introduction */}
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
              Development Agency
            </span>
          </motion.div>

          <motion.p
            className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            As your technology partner, we take a unique, creative, and
            data-driven approach to build perfect solutions that propel your
            business vision.
          </motion.p>
        </motion.div>

        {/* Main Content with Curved Shapes */}
        <div className='relative'>
          {/* Large White Curved Shape */}
          <motion.div
            className='relative'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Custom curved shape using CSS - now white */}
            <div className='relative bg-white rounded-[60px] p-12 lg:p-16 overflow-hidden shadow-xl border border-gray-100'>
              {/* Background gradient overlay - subtle */}
              <div className='absolute inset-0 bg-gradient-to-br from-orange-50/30 to-gray-50/30'></div>

              {/* Content inside white shape */}
              <div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
                {/* Left side - Company identity */}
                <div className='lg:col-span-5'>
                  <motion.h2
                    className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    we are
                    <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
                      forever 22
                      <br />
                      studio
                    </span>
                  </motion.h2>
                </div>

                {/* Right side - Description and Stats */}
                <div className='lg:col-span-7 space-y-8'>
                  {/* Badge */}
                  <motion.div
                    className='inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className='text-orange-600 text-sm font-medium uppercase tracking-wider'>
                      Full Service Technology
                    </span>
                  </motion.div>

                  {/* Company Description */}
                  <motion.p
                    className='text-gray-700 text-lg leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    At Forever22 Studios, we design custom automation systems
                    that let creative and media brands work smarter, not
                    harder.Our clients range form independent creatives to
                    venture capital firms like Betaworks, where we've built
                    tools that centralize knowledge, streamline content
                    creation, and unlock new efficiencies for entire portfolios.
                    Our projects have cut production time by up to 70%, boosted
                    engagement by over 40%, and turned scattered workflows into
                    seamless, measurable pipelines.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional decorative shapes - softer colors */}
          <motion.div
            className='absolute top-12 -left-8 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-xl'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
          />

          <motion.div
            className='absolute -top-16 right-1/4 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-orange-400/30 rounded-full blur-lg'
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
          />
        </div>
      </div>
    </section>
  );
}
