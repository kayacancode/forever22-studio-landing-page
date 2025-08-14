'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const AnimatedLogo = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { duration: 2, ease: 'easeInOut' },
        opacity: { duration: 0.5 },
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 0.8 },
    },
  };

  return (
    <Link href='/' className='flex items-center space-x-2'>
      <motion.svg
        width='32'
        height='32'
        viewBox='0 0 100 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        initial='hidden'
        animate='visible'
      >
        {/* Outer circle */}
        <motion.circle
          cx='50'
          cy='50'
          r='45'
          stroke='#f97316'
          strokeWidth='3'
          fill='none'
          variants={pathVariants}
        />

        {/* Inner design - stylized "22" */}
        <motion.path
          d='M25 30 Q35 20 45 30 Q45 40 35 45 Q45 45 45 55 Q45 65 25 65'
          stroke='#f97316'
          strokeWidth='2.5'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          variants={pathVariants}
        />

        <motion.path
          d='M55 30 Q65 20 75 30 Q75 40 65 45 Q75 45 75 55 Q75 65 55 65'
          stroke='#f97316'
          strokeWidth='2.5'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          variants={pathVariants}
        />

        {/* Center connecting element */}
        <motion.circle
          cx='50'
          cy='47'
          r='3'
          fill='#f97316'
          variants={pathVariants}
        />
      </motion.svg>

      <motion.span
        className='text-gray-900 font-bold text-lg md:text-xl tracking-tight'
        variants={textVariants}
        initial='hidden'
        animate='visible'
      >
        Forever 22 Studio
      </motion.span>
    </Link>
  );
};

export default AnimatedLogo;
