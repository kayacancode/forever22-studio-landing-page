'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const testimonials = [
    {
      id: 1,
      type: 'text',
      content:
        "I'm thrilled with the results of Kaya's work. She executed every phase—from discovery and planning through data ingestion and article drafting—with precision and ease. Her communication was crystal clear, deadlines were met exactly as promised, and the final deliverables reflect exceptional thoughtfulness and care. Kaya turned what could have been a complex project into something effortlessly manageable.",
      client: 'Kontiji Anthony',
      position: 'CEO of Youdle',
      company: 'Youdle',
      image: '/images/youdle.png',
    },
    {
      id: 2,
      type: 'video',
      videoSrc: '/images/Thryve AI .mp4',
      client: 'Thryve AI',
      position: 'Client Testimonial',
      company: 'Thryve AI',
      image: '/images/tenniscourt.webp',
    },
  ];

  // Auto-advance carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className='py-20 lg:py-32 bg-gray-50 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
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
              ⭐ Client Stories
            </span>
          </motion.div>

          <motion.h2
            className='text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            what our clients
            <br />
            <span className='relative'>
              are saying
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

        {/* Testimonials Carousel */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='overflow-hidden'>
            <motion.div
              className='flex transition-transform duration-700 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className='w-full flex-shrink-0 px-4'
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0.7,
                    scale: index === currentSlide ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className='max-w-2xl lg:max-w-4xl mx-auto'>
                    {testimonial.type === 'text' ? (
                      /* Text Testimonial */
                      <div className='bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12 shadow-xl'>
                        <div className='flex items-start space-x-3 sm:space-x-6'>
                          {/* Quote Icon */}
                          <div className='flex-shrink-0'>
                            <svg
                              className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-500'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z' />
                            </svg>
                          </div>

                          <div className='flex-1'>
                            {/* Testimonial Content */}
                            <blockquote className='text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 lg:mb-8'>
                              "{testimonial.content}"
                            </blockquote>

                            {/* Client Info */}
                            <div className='flex items-center space-x-3 sm:space-x-4'>
                              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                                <span className='text-orange-600 font-bold text-sm sm:text-base lg:text-lg'>
                                  {testimonial.client.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <div className='font-semibold text-gray-900 text-sm sm:text-base'>
                                  {testimonial.client}
                                </div>
                                <div className='text-gray-600 text-xs sm:text-sm'>
                                  {testimonial.position}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Video Testimonial */
                      <div className='bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12 shadow-xl'>
                        <div className='aspect-video rounded-xl lg:rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-gray-900'>
                          <video
                            className='w-full h-full object-cover'
                            controls
                            poster={testimonial.image}
                          >
                            <source
                              src={testimonial.videoSrc}
                              type='video/mp4'
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>

                        {/* Client Info */}
                        <div className='flex items-center justify-center space-x-3 sm:space-x-4'>
                          <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                            <span className='text-orange-600 font-bold text-sm sm:text-base lg:text-lg'>
                              {testimonial.company.charAt(0)}
                            </span>
                          </div>
                          <div className='text-center'>
                            <div className='font-semibold text-gray-900 text-sm sm:text-base'>
                              {testimonial.company}
                            </div>
                            <div className='text-gray-600 text-xs sm:text-sm'>
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            className='flex justify-center space-x-4 mt-12'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={prevSlide}
              className='w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-700 transition-colors duration-200 shadow-lg group'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className='w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-700 transition-colors duration-200 shadow-lg group'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            className='flex justify-center space-x-2 mt-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
