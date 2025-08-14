'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import FooterSection from '@/components/FooterSection';
import Navigation from '@/components/Navigation';

export default function SportsMusicAutomationPage() {
  const caseStudies = [
    {
      title: 'Youdle',
      description:
        'Built an AI-powered ingestion and ranking engine to handle local inventory updates—adaptable for sports & music event tracking.',
    },
    {
      title: 'Music Release Automation',
      description:
        'Fully automated system for creating branded release announcements and posting across channels.',
    },
    {
      title: 'Athlete Profile Builder',
      description:
        'Used MCP tools to research, generate, and organize 500+ profiles in one week.',
    },
  ];

  const automations = [
    {
      title: 'Automated Release Announcements',
      description:
        'Generate graphics, captions, and scheduling for every album, single, or sports highlight in seconds.',
      icon: '📢',
    },
    {
      title: 'Audience Segmentation',
      description:
        'Group fans by region, interest, or engagement level for personalized campaigns.',
      icon: '🎯',
    },
    {
      title: 'Sponsor ROI Dashboards',
      description:
        'Pull sponsor visibility stats automatically, saving hours every reporting cycle.',
      icon: '📊',
    },
    {
      title: 'Talent & Asset Databases',
      description:
        'Centralized profiles for artists, athletes, and influencers—always up-to-date.',
      icon: '👥',
    },
    {
      title: 'Cross-Channel Distribution',
      description:
        'Push content to Instagram, TikTok, YouTube, newsletters, and websites simultaneously.',
      icon: '🌐',
    },
  ];

  const whoWeServe = [
    {
      title: 'Sports-Culture Media Brands',
      description:
        'Think sports networks, lifestyle brands, and fan platforms.',
      icon: '⚡',
    },
    {
      title: 'Music Distributors & Indie Labels',
      description: 'From global release schedules to niche artist promotions.',
      icon: '🎵',
    },
    {
      title: 'Hybrid Media Platforms',
      description:
        'Brands merging entertainment, sports, and culture under one roof.',
      icon: '🎭',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-24 pb-16 bg-white relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 text-center'>
          {/* Badge */}
          <motion.div
            className='inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-8'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className='text-orange-600 text-sm font-medium uppercase tracking-wider'>
              Sports & Music Automation Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className='text-4xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Workflows That Keep
            <br />
            Your Brand in{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
              Play—24/7
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            In music and sports media, timing is everything. Content has to drop
            when your audience is tuned in—whether that's a game night, an album
            launch, or a viral moment. Manual work slows you down. Automation
            keeps you ahead.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href='https://calendar.app.google/dtx9EHNNdEQ4upHH7'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Workflow Audit
              <svg
                className='ml-2 w-5 h-5'
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
      </section>

      {/* Why Automation Section */}
      <section className='py-20 lg:py-32 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
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
                Why Automation?
              </span>
            </motion.div>

            <motion.h2
              className='text-3xl lg:text-5xl font-bold text-gray-900 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Timing Is Everything
            </motion.h2>
          </motion.div>

          <motion.div
            className='bg-white rounded-[40px] p-8 lg:p-12 shadow-xl border border-gray-100'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='text-center space-y-6'>
              <p className='text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto'>
                In music and sports media, timing is everything. Content has to
                drop when your audience is tuned in—whether that's a game night,
                an album launch, or a viral moment.{' '}
                <span className='text-orange-600 font-semibold'>
                  Manual work slows you down.
                </span>{' '}
                <span className='text-orange-600 font-semibold'>
                  Automation keeps you ahead.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className='py-20 lg:py-32 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
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
                Who We Serve
              </span>
            </motion.div>

            <motion.h2
              className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tailored Automation for
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
                Media Pioneers
              </span>
            </motion.h2>

            <motion.p
              className='text-lg text-gray-600 max-w-2xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              We build tailored automation for:
            </motion.p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 lg:grid-cols-3 gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            {whoWeServe.map((item, index) => (
              <motion.div
                key={index}
                className='bg-gray-50 rounded-3xl p-8 text-center group hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className='text-4xl mb-6'>{item.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className='py-20 lg:py-32 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
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
                What We Deliver
              </span>
            </motion.div>

            <motion.h2
              className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Core Automations for
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
                Sports & Music Media
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className='bg-white rounded-[40px] p-8 lg:p-12 shadow-xl border border-gray-100'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {automations.map((automation, index) => (
                <motion.div
                  key={index}
                  className='group'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className='bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 group-hover:border-orange-200 group-hover:bg-white transition-all duration-300 group-hover:shadow-lg'>
                    <div className='text-3xl mb-4'>{automation.icon}</div>
                    <h3 className='text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300'>
                      {automation.title}
                    </h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                      {automation.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className='py-20 lg:py-32 bg-white'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
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
                Case Studies
              </span>
            </motion.div>

            <motion.h2
              className='text-3xl lg:text-5xl font-bold text-gray-900 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Proven Results in
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
                Action
              </span>
            </motion.h2>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className='bg-gray-50 rounded-3xl p-8 group hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300'>
                  {study.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {study.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-20 lg:py-32 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
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
                Pricing
              </span>
            </motion.div>

            <motion.h2
              className='text-3xl lg:text-5xl font-bold text-gray-900 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Investment in
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
                Your Growth
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className='bg-white rounded-[40px] p-8 lg:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='text-center space-y-8'>
              <div className='space-y-4'>
                <h3 className='text-4xl font-bold text-gray-900'>
                  Starting at <span className='text-orange-600'>$5K/month</span>
                </h3>
                <p className='text-xl text-gray-600'>
                  Automation retainers for ongoing builds, maintenance, and
                  scaling.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200'>
                {[
                  'Custom strategy design',
                  'Implementation',
                  'Testing & optimization',
                  'Ongoing updates',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className='flex items-start space-x-3'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className='w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <svg
                        className='w-3 h-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <span className='text-gray-700 font-medium text-sm'>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps/CTA Section */}
      <section className='py-20 lg:py-32 bg-white'>
        <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, y: 50 }}
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
                Next Steps
              </span>
            </motion.div>

            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 leading-tight'>
              Ready to Automate
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600'>
                Your Workflow?
              </span>
            </h2>

            <p className='text-xl text-gray-600 leading-relaxed'>
              In 15 minutes, we'll outline your automation opportunities and
              give you a custom ROI projection.
            </p>

            <motion.a
              href='https://calendar.app.google/dtx9EHNNdEQ4upHH7'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Workflow Audit
              <svg
                className='ml-2 w-5 h-5'
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
      </section>

      <FooterSection />
    </div>
  );
}
