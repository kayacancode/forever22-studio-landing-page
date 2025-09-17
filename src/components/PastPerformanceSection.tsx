'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function PastPerformanceSection() {
  const projects = [
    {
      name: 'Thryve AI',
      description: 'AI-powered e-learning and NIL management platform.',
      category: 'AI & Education',
    },
    {
      name: 'Youdle',
      description:
        'Grocery visibility platform with automated newsletter distribution and AI search.',
      category: 'Retail & Automation',
    },
    {
      name: 'Sunday Money',
      description:
        'Fantasy sports app with live data integration and fulfillment automation.',
      category: 'Sports & Gaming',
    },
    {
      name: 'Betaworks',
      description:
        'Automation pipelines for founder research and portfolio monitoring.',
      category: 'Venture & Research',
    },
  ];

  return (
    <section className='py-20 bg-gray-50' aria-label='Past Performance section'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Past Performance
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Badge */}
              <div className='inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
                {project.category}
              </div>

              {/* Project Name */}
              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4'>
                {project.name}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed'>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
