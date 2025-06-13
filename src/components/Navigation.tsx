'use client';

import { AnimatePresence,motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={toggleMobileMenu}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Left: About & Clients - Hidden on mobile */}
            <div className='hidden md:flex items-center space-x-4'>
              <Link
                href='/#about'
                className='text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium px-4 py-1 rounded-full border border-gray-300 hover:border-gray-400'
              >
                About
              </Link>
              <Link
                href='/#projects'
                className='text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium px-4 py-1 rounded-full border border-gray-300 hover:border-gray-400'
              >
                Clients
              </Link>
            </div>

            {/* Center: Logo - Always visible */}
            <div className='flex-1 flex justify-center md:justify-center'>
              <Link
                href='/'
                className='text-gray-900 font-bold text-lg md:text-xl tracking-tight'
              >
                Forever 22 Studio
              </Link>
            </div>

            {/* Desktop Right: Projects & Say hello - Hidden on mobile */}
            <div className='hidden md:flex items-center space-x-4'>
              <Link
                href='/#projects'
                className='text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium px-4 py-1 rounded-full border border-gray-300 hover:border-gray-400'
              >
                Projects
              </Link>
              <Link
                href='https://cal.com/forever22studio/15min'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md'
              >
                Say hello
              </Link>
            </div>

            {/* Mobile CTA button - Always visible on mobile */}
            <div className='md:hidden'>
              <Link
                href='https://cal.com/forever22studio/15min'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 shadow-md'
              >
                Say hello
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile menu panel */}
            <motion.div
              className='fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 md:hidden'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className='px-4 pt-2 pb-3 space-y-1'>
                <Link
                  href='/#about'
                  onClick={closeMobileMenu}
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'
                >
                  About
                </Link>
                <Link
                  href='/#projects'
                  onClick={closeMobileMenu}
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'
                >
                  Clients
                </Link>
                <Link
                  href='/#projects'
                  onClick={closeMobileMenu}
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'
                >
                  Projects
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
