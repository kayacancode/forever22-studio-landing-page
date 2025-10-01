'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

export default function FooterSection() {
  const _partnerLogos = [
    { name: 'TechCorp', logo: '/images/logo1.png', alt: 'TechCorp' },
    {
      name: 'Innovate Labs',
      logo: '/images/iconlogo.png',
      alt: 'Innovate Labs',
    },
    { name: 'Digital First', logo: '/images/logo1.png', alt: 'Digital First' },
    { name: 'StartupX', logo: '/images/iconlogo.png', alt: 'StartupX' },
    {
      name: 'Future Systems',
      logo: '/images/logo1.png',
      alt: 'Future Systems',
    },
    { name: 'NextGen', logo: '/images/iconlogo.png', alt: 'NextGen' },
    { name: 'CloudTech', logo: '/images/logo1.png', alt: 'CloudTech' },
    { name: 'DataFlow', logo: '/images/iconlogo.png', alt: 'DataFlow' },
    { name: 'AppWorks', logo: '/images/logo1.png', alt: 'AppWorks' },
    { name: 'CodeBase', logo: '/images/iconlogo.png', alt: 'CodeBase' },
  ];

  const _containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const _logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className='relative'>
      {/* Curved Logo Section */}
      <div className='bg-gray-100 relative'>
        {/* Curved bottom border */}

        {/* Logo grid */}
        {/* <motion.div
          className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-8 items-center justify-items-center'>
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                className='group cursor-pointer'
                variants={logoVariants}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className='w-16 h-16 md:w-20 md:h-20 bg-white backdrop-blur-sm rounded-xl border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-all duration-300 p-3 shadow-sm'>
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={40}
                    height={40}
                    className='max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Orange Footer Section */}
      <div className='bg-orange-500 relative'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-16'>
          {/* Navigation and CTA */}
          {/* <motion.div
            className='flex flex-col md:flex-row justify-between items-start md:items-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.nav
              className='flex flex-col space-y-4 mb-8 md:mb-0'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {['About', 'Clients', 'Projects'].map((item, _index) => (
                <motion.div key={item} whileHover={{ x: 5 }}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className='text-slate-900 text-lg font-semibold hover:text-slate-700 transition-colors duration-200'
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div> */}

          {/* Large Company Name */}
          <motion.div
            className='relative'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className='text-6xl text-center md:text-8xl lg:text-9xl font-bold text-slate-900 leading-none tracking-tight'>
              Forever 22
              <motion.span
                className='inline-block ml-4'
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                ®
              </motion.span>
            </h2>
          </motion.div>

          {/* Bottom Links */}
          <motion.div
            className='flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pt-8 border-t border-slate-900/20'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='flex flex-wrap gap-6 mb-4 md:mb-0'>
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className='text-slate-900/70 hover:text-slate-900 text-sm font-medium transition-colors duration-200'
                >
                  {item}
                </Link>
              ))}
              <a
                href='mailto:kaya@forever22studios.com'
                className='text-slate-900/70 hover:text-slate-900 text-sm font-medium transition-colors duration-200'
              >
                Contact
              </a>
            </div>

            <div className='flex items-center space-x-6'>
              {/* Social Links */}
              {[
                {
                  name: 'Twitter',
                  icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                },
                {
                  name: 'LinkedIn',
                  icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-4 0 2 2 0 014 0z',
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={`#${social.name.toLowerCase()}`}
                  className='text-slate-900/70 hover:text-slate-900 transition-colors duration-200'
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='text-center mt-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className='text-slate-900/60 text-sm'>
              © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
