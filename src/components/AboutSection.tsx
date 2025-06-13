'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

export default function AboutSection() {
  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
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
                    FOREVER 22 Studio, LLC. is a full service technology agency
                    specializing in helping{' '}
                    <span className='text-orange-600 font-semibold'>
                      businesses
                    </span>
                    ,{' '}
                    <span className='text-orange-600 font-semibold'>
                      athletes
                    </span>
                    ,{' '}
                    <span className='text-orange-600 font-semibold'>
                      artists
                    </span>
                    , and{' '}
                    <span className='text-orange-600 font-semibold'>
                      founders
                    </span>{' '}
                    bring their digital visions to life. We pride ourselves in
                    being transparent and having excellent communication open to
                    all clientele. Choosing forever22, you entrust us to bring
                    your idea to life. With that trust, we hold that dear to us
                    and make sure to help create your idea. We work with any
                    sort of client: Big or small, established or starting. We
                    will be with you at every step of the way to build something
                    that has imprints on others forever.
                  </motion.p>

                  {/* Stats Grid */}
                  <motion.div
                    className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8'
                    variants={statsVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    {[{ number: '5★', label: 'Rating' }].map((stat, index) => (
                      <motion.div
                        key={index}
                        className='text-center space-y-2'
                        variants={statItemVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <motion.h4
                          className='text-2xl lg:text-3xl font-bold text-gray-900'
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 1.2 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          {stat.number}
                        </motion.h4>
                        <p className='text-gray-600 text-sm font-medium'>
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founder Profile Section */}
          <motion.div
            className='mt-16 text-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className='relative inline-block'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className='relative w-32 h-32 mx-auto mb-4'>
                <div className='absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full'></div>
                <div className='absolute inset-1 bg-white rounded-full overflow-hidden'>
                  <Image
                    src='/images/kayaanime.png'
                    alt='Kaya Jones - Founder and CEO'
                    fill
                    className='object-cover rounded-full'
                  />
                </div>
              </div>
            </motion.div>

            <motion.p
              className='text-gray-700 font-medium text-lg'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Founder and CEO Kaya Jones
            </motion.p>
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
