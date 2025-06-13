'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

export default function TrustedSection() {
  const clients = [
    {
      name: 'Atlantic Records',
      logo: '/images/logo1.png',
      alt: 'Atlantic Records',
    },
    {
      name: 'Universal Music',
      logo: '/images/iconlogo.png',
      alt: 'Universal Music',
    },
    {
      name: 'Warner Music Group',
      logo: '/images/logo1.png',
      alt: 'Warner Music Group',
    },
    { name: 'Sony Music', logo: '/images/iconlogo.png', alt: 'Sony Music' },
    {
      name: 'Republic Records',
      logo: '/images/logo1.png',
      alt: 'Republic Records',
    },
    { name: 'Def Jam', logo: '/images/iconlogo.png', alt: 'Def Jam' },
    { name: 'Interscope', logo: '/images/logo1.png', alt: 'Interscope' },
    {
      name: 'Capitol Records',
      logo: '/images/iconlogo.png',
      alt: 'Capitol Records',
    },
    { name: 'RCA Records', logo: '/images/logo1.png', alt: 'RCA Records' },
    { name: 'Epic Records', logo: '/images/iconlogo.png', alt: 'Epic Records' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className='inline-flex items-center px-4 py-2 bg-orange-500 rounded-full mb-8'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className='text-white text-sm font-medium'>
              ⭐ Trusted By
            </span>
          </motion.div>

          <motion.h2
            className='text-4xl lg:text-6xl font-bold text-gray-900 mb-4'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We have worked with
            <br />
            <span className='relative'>
              industry leading companies
              <motion.svg
                className='absolute -bottom-2 left-0 w-full h-3 text-orange-500'
                viewBox='0 0 300 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                <motion.path
                  d='M2 6C50 2 100 2 150 6C200 10 250 10 298 6'
                  stroke='currentColor'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
              </motion.svg>
            </span>
          </motion.h2>
        </motion.div>

        {/* Client logos grid */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className='group cursor-pointer transition-all duration-300 hover:scale-110'
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-4'>
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={80}
                  height={80}
                  className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                />
              </div>
              <p className='text-center text-sm text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional clients row */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center mt-12 opacity-60'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
        >
          {[
            { name: 'Spotify', logo: '/images/logo1.png', alt: 'Spotify' },
            {
              name: 'Apple Music',
              logo: '/images/iconlogo.png',
              alt: 'Apple Music',
            },
            {
              name: 'YouTube Music',
              logo: '/images/logo1.png',
              alt: 'YouTube Music',
            },
            { name: 'Tidal', logo: '/images/iconlogo.png', alt: 'Tidal' },
          ].map((client, index) => (
            <motion.div
              key={index}
              className='group cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-100'
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-3'>
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={60}
                  height={60}
                  className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
