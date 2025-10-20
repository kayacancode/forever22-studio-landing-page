'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Check,
  Search as SearchIcon,
  Sparkles,
  TrendingUp,
  Workflow,
} from 'lucide-react';
import * as React from 'react';

import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// ================== HERO SECTION ==================
function HeroSection({ onBookCallClick }: { onBookCallClick?: () => void }) {
  return (
    <section className='relative w-full overflow-hidden bg-[#fffcfa] py-12 md:py-24'>
      <div className='relative mx-auto max-w-[1536px] px-4 md:px-12'>
        {/* Content */}
        <div className='flex flex-col items-center justify-center gap-8 md:gap-24'>
          <div className='flex w-full flex-col items-center justify-center gap-8 md:gap-24'>
            <h1 className='w-full text-center font-["Plus_Jakarta_Sans"] text-[40px] font-bold leading-[44px] tracking-[-1.2px] text-[#281f1b] sm:text-[60px] sm:leading-[64px] md:text-[80px] md:leading-[84px] lg:text-[120px] lg:leading-[120px] lg:tracking-[-2.4px]'>
              Scale Your Business with Artificial Intelligence
            </h1>

            {/* CTA Buttons */}
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:gap-24'>
              <motion.button
                onClick={onBookCallClick}
                className='w-full cursor-pointer rounded-[16px] bg-[#ff5e00] px-6 py-3 font-["Plus_Jakarta_Sans"] text-[16px] font-medium leading-[20px] text-[#050200] transition-transform hover:scale-105 sm:w-auto sm:text-[18px] md:px-7 md:text-[20px] md:leading-[24px]'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                book discovery call
              </motion.button>
              <motion.button
                className='w-full cursor-pointer rounded-[16px] bg-[#ff5e00] px-6 py-3 font-["Plus_Jakarta_Sans"] text-[16px] font-medium leading-[20px] text-[#050200] transition-transform hover:scale-105 sm:w-auto sm:text-[18px] md:px-7 md:text-[20px] md:leading-[24px]'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                view case studies
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================== PROBLEM SECTION ==================
function ProblemSection() {
  return (
    <section className='relative w-full bg-[#fffcfa] py-12 md:py-24'>
      <div className='mx-auto flex max-w-[1536px] flex-col items-start gap-8 px-4 py-6 md:flex-row md:gap-24 md:px-12 md:py-12'>
        <p className='basis-0 grow font-["Plus_Jakarta_Sans"] text-[28px] font-bold leading-[32px] tracking-[-0.56px] text-[#281f1b] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]'>
          AI is overwhelming. Too many tools. No clear path.
        </p>
        <div className='basis-0 grow'>
          <p className='pt-2 font-["Plus_Jakarta_Sans"] text-[18px] font-normal leading-[26px] text-[#281f1b] sm:text-[20px] sm:leading-[28px] md:text-[24px] md:leading-[32px]'>
            Forever 22 helps you adopt Artificial Intelligence efficiently, and
            securely
          </p>
        </div>
      </div>
    </section>
  );
}

// ================== AI JOURNEY BENTO GRID ==================
function AIJourneySection() {
  return (
    <section className='relative w-full bg-[#fffcfa] py-12'>
      <div className='mx-auto flex max-w-[1536px] flex-col items-start gap-8 px-4 py-6 md:gap-12 md:px-12 md:py-12'>
        <p className='w-full text-center font-["Plus_Jakarta_Sans"] text-[28px] font-bold leading-[32px] tracking-[-0.56px] text-[#281f1b] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]'>
          We help you adopt AI
        </p>

        {/* Bento Grid */}
        <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-7'>
          {/* Card 1: Explore AI */}
          <motion.div
            className='flex h-auto flex-col overflow-hidden rounded-[20px] border-[1.5px] border-transparent bg-[rgba(126,70,37,0.09)] p-5 pt-5 md:h-[480px] md:p-9 md:pt-9'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className='space-y-2'>
              <h3 className='font-["Plus_Jakarta_Sans"] text-[20px] font-bold leading-[24px] tracking-[-0.4px] text-[#281f1b] sm:text-[24px] sm:leading-[28px] md:text-[28px] md:leading-[32px] md:tracking-[-0.56px]'>
                Explore AI
              </h3>
              <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[20px] text-[#281f1b] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]'>
                Discover AI opportunities
              </p>
            </div>

            {/* UI Mockup */}
            <div className='relative mt-auto h-[300px] w-full'>
              {/* Phone mockup */}
              <div className='absolute left-1/2 top-8 h-[260px] w-[200px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-white shadow-lg'>
                <div className='h-8 w-28 rounded-[16px] bg-[rgba(40,31,27,0.2)] m-7' />
                <div className='absolute inset-x-7 bottom-7 top-20 rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-50' />
              </div>

              {/* AI Insights card */}
              <div className='absolute left-[15%] top-[180px] flex h-[72px] w-[155px] items-center gap-3 rounded-[20px] border-[1.5px] border-[rgba(110,87,73,0.2)] bg-white px-5 shadow-lg'>
                <SearchIcon className='h-8 w-8 text-[#a13b00]' />
                <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-bold tracking-[-0.4px] text-[#281f1b]'>
                  AI Insights
                </p>
              </div>

              {/* Data Analysis card */}
              <div className='absolute right-[10%] top-[80px] flex h-[72px] w-[155px] items-center gap-3 rounded-[20px] border-[1.5px] border-[rgba(110,87,73,0.2)] bg-white px-5 shadow-lg'>
                <BarChart3 className='h-8 w-8 text-[#a13b00]' />
                <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-bold tracking-[-0.4px] text-[#281f1b]'>
                  Data Analysis
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Blueprint AI */}
          <motion.div
            className='flex h-auto flex-col overflow-hidden rounded-[20px] border-[1.5px] border-transparent bg-[rgba(126,70,37,0.09)] p-5 pt-5 md:h-[480px] md:p-9 md:pt-9'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className='space-y-2'>
              <h3 className='font-["Plus_Jakarta_Sans"] text-[20px] font-bold leading-[24px] tracking-[-0.4px] text-[#281f1b] sm:text-[24px] sm:leading-[28px] md:text-[28px] md:leading-[32px] md:tracking-[-0.56px]'>
                Blueprint AI
              </h3>
              <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[20px] text-[#281f1b] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]'>
                Make a plan to scale AI across your business and processes.
              </p>
            </div>

            {/* UI Mockup */}
            <div className='relative mt-auto flex h-[300px] w-full items-center justify-end'>
              {/* Blueprint card */}
              <div className='absolute -bottom-20 -right-10 h-[330px] w-[390px] overflow-hidden rounded-[24px] bg-white shadow-xl'>
                {/* Header */}
                <div className='flex items-center gap-4 p-10'>
                  <div className='h-16 w-16 rounded-full bg-gray-300' />
                  <p className='font-["Plus_Jakarta_Sans"] text-[28px] font-bold tracking-[-0.68px] text-[#281f1b]'>
                    Blueprint Creation
                  </p>
                </div>

                {/* Content blocks */}
                <div className='space-y-5 px-10'>
                  <div className='h-12 w-full rounded-[16px] bg-[#ff5e00] opacity-30' />
                  <div className='h-12 w-5/6 rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-50' />
                  <div className='h-12 w-11/12 rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-50' />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Implement AI */}
          <motion.div
            className='flex h-auto flex-col overflow-hidden rounded-[20px] border-[1.5px] border-transparent bg-[rgba(126,70,37,0.09)] p-5 pt-5 md:h-[480px] md:p-9 md:pt-9'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className='space-y-2'>
              <h3 className='font-["Plus_Jakarta_Sans"] text-[20px] font-bold leading-[24px] tracking-[-0.4px] text-[#281f1b] sm:text-[24px] sm:leading-[28px] md:text-[28px] md:leading-[32px] md:tracking-[-0.56px]'>
                Implement AI
              </h3>
              <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[20px] text-[#281f1b] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]'>
                Automate your workflows completely. Build custom solutions to
                support your business.
              </p>
            </div>

            {/* UI Mockup */}
            <div className='relative mt-auto flex h-[300px] w-full items-center justify-center'>
              {/* Integration card */}
              <div className='h-[280px] w-[240px] overflow-hidden rounded-[20px] bg-white p-7 shadow-lg'>
                <h3 className='mb-5 font-["Plus_Jakarta_Sans"] text-[24px] font-bold tracking-[-0.48px] text-[#281f1b]'>
                  Integration
                </h3>
                <div className='space-y-5'>
                  <div className='h-20 w-full rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-50' />
                  <div className='h-20 w-full rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-50' />
                  <div className='h-12 w-16 rounded-[16px] bg-[#ff5e00]' />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Scale with AI */}
          <motion.div
            className='flex h-auto flex-col overflow-hidden rounded-[20px] border-[1.5px] border-transparent bg-[rgba(126,70,37,0.09)] p-5 pt-5 md:h-[480px] md:p-9 md:pt-9'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className='space-y-2'>
              <h3 className='font-["Plus_Jakarta_Sans"] text-[20px] font-bold leading-[24px] tracking-[-0.4px] text-[#281f1b] sm:text-[24px] sm:leading-[28px] md:text-[28px] md:leading-[32px] md:tracking-[-0.56px]'>
                Scale with AI
              </h3>
              <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[20px] text-[#281f1b] sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]'>
                create a micro SaaS that creates additional revenue for your
                business.
              </p>
            </div>

            {/* UI Mockup */}
            <div className='relative mt-auto flex h-[300px] w-full items-center justify-start'>
              {/* Scaling card */}
              <div className='absolute -bottom-20 -left-10 h-[330px] w-[390px] overflow-hidden rounded-[24px] bg-white shadow-xl'>
                {/* Header with buttons */}
                <div className='flex items-center justify-end gap-6 p-10'>
                  <div className='h-8 w-28 rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-50' />
                  <div className='h-8 w-20 rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-50' />
                  <div className='rounded-[16px] bg-[#ff5e00] px-4 py-2 font-["Plus_Jakarta_Sans"] text-[16px] font-bold text-[#050200]'>
                    Scaling
                  </div>
                </div>

                {/* Content background */}
                <div className='mx-0 mr-10 h-[240px] rounded-[16px] bg-[rgba(40,31,27,0.2)] opacity-30' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ================== TESTIMONIALS SECTION ==================
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Forever 22 built Thryve AI from the ground up – a complete AI-powered eLearning platform with personal branding tools. They understood our vision for empowering athletes and artists, and delivered beyond expectations. The platform is already transforming how our users build their brands.',
      author: 'Thryve AI Team',
      role: 'Founders',
      company: 'Thryve AI',
    },
    {
      quote:
        'We needed a custom AI agent that could search grocery items globally and integrate with our web app. Forever 22 delivered exactly that, plus they built a public API that created an entirely new revenue stream for us. Their technical expertise is unmatched.',
      author: 'Youdle Team',
      role: 'Product Lead',
      company: 'Youdle',
    },
    {
      quote:
        "Forever 22 automated our entire content creation process by pulling Spotify playlists and generating ready-to-post Instagram content for our music media company. What used to take hours now happens automatically. They've saved us countless hours while keeping our content fresh and engaging.",
      author: 'InSuave We Trust',
      role: 'Founder',
      company: 'Insuave We Trust',
    },
    {
      quote:
        "Working with Forever 22 was seamless. They took time to understand our workflow, identified automation opportunities we didn't even know existed, and implemented solutions that scaled with our business. True partners in growth.",
      author: 'DJKarefree',
      role: 'DJ & Entrepreneur',
      company: 'DJKarefree',
    },
  ];

  return (
    <section className='relative w-full overflow-hidden bg-[#fffcfa] py-12 md:py-24'>
      <div className='flex flex-col gap-8 md:gap-12'>
        <p className='mx-auto max-w-[1260px] px-4 text-center font-["Plus_Jakarta_Sans"] text-[28px] font-bold leading-[32px] tracking-[-0.56px] text-[#281f1b] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]'>
          See what Forever 22 can do.
        </p>

        <div className='relative w-full overflow-hidden'>
          <div className='scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:gap-7 md:px-12'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='w-[300px] flex-none snap-start sm:w-[380px] md:w-[480px]'
              >
                <div className='flex h-full min-h-[280px] flex-col justify-between rounded-[20px] border-[1.5px] border-[rgba(110,87,73,0.2)] bg-[rgba(126,70,37,0.09)] p-5 md:p-9'>
                  <p className='mb-6 font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[24px] text-[#281f1b] sm:text-[18px] sm:leading-[28px] md:text-[20px] md:leading-[32px]'>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-bold leading-[20px] tracking-[-0.3px] text-[#281f1b] md:text-[20px] md:leading-[24px] md:tracking-[-0.4px]'>
                      {testimonial.author}
                    </p>
                    <p className='font-["Plus_Jakarta_Sans"] text-[14px] font-normal leading-[20px] text-[#281f1b] opacity-70 md:text-[17px] md:leading-[24px]'>
                      {testimonial.role}
                    </p>
                    <p className='font-["Plus_Jakarta_Sans"] text-[14px] font-normal leading-[20px] text-[#ff5e00] md:text-[17px] md:leading-[24px]'>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ================== ABOUT US SECTION ==================
function AboutUsSection() {
  return (
    <section className='relative w-full bg-[#fffcfa] px-4 py-12 md:px-12 md:py-24'>
      <div className='mx-auto flex max-w-[1200px] flex-col items-center gap-8 md:gap-16'>
        <div className='flex max-w-[900px] flex-col items-center gap-4'>
          <p className='text-center font-["Plus_Jakarta_Sans"] text-[12px] font-semibold uppercase tracking-[1.5px] text-[#ff5e00] md:text-[14px]'>
            About us
          </p>
          <h2 className='text-center font-["Plus_Jakarta_Sans"] text-[28px] font-bold leading-[32px] tracking-[-0.56px] text-[#281f1b] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]'>
            A true builder's company at heart.
          </h2>
          <p className='max-w-[700px] text-center font-["Plus_Jakarta_Sans"] text-[15px] font-normal leading-[24px] text-[#281f1b] opacity-70 md:text-[17px] md:leading-[28px]'>
            Forever 22 specializes in building intelligent automation solutions
            that transform how businesses operate. Based in Chicago, our team
            creates custom AI agents, workflow automations, and
            revenue-generating SaaS products.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className='grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
          {/* Left - Our Core */}
          <div className='rounded-[24px] border-[1.5px] border-[rgba(110,87,73,0.2)] bg-white p-6 md:p-12'>
            <h3 className='mb-6 font-["Plus_Jakarta_Sans"] text-[24px] font-bold leading-[28px] tracking-[-0.48px] text-[#281f1b] sm:text-[28px] sm:leading-[32px] md:text-[34px] md:leading-[40px] md:tracking-[-0.68px]'>
              Our Core
            </h3>
            <div className='flex flex-col gap-5'>
              <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[26px] text-[#281f1b] opacity-70'>
                Forever 22 is founded by Kaya Jones, a Chicago-based
                entrepreneur with a vision to democratize AI automation for
                businesses of all sizes. Our team operates from the heart of
                Chicago, IL, bringing together talented individuals passionate
                about artificial intelligence and business growth.
              </p>
              <p className='font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[26px] text-[#281f1b] opacity-70'>
                We put results first, create scalable solutions through custom
                development, and drive business growth by identifying and
                automating friction points. Our methodology is simple but
                powerful: understand, build, automate, scale.
              </p>
            </div>
          </div>

          {/* Right - Video */}
          <div className='relative aspect-video overflow-hidden rounded-[24px] bg-gray-100 shadow-lg'>
            <video
              className='h-full w-full object-cover'
              autoPlay
              loop
              muted
              playsInline
              preload='auto'
            >
              <source src='/images/teamvid.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================== CASE STUDIES SECTION ==================
function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'VC Deal Flow Automation',
      company: 'Betaworks',
      metric: 'Transforming investment evaluation',
      description:
        'Building a sophisticated mobile AI assistant for deal flow management that streamlines how Betaworks evaluates investment opportunities.',
      testimonial:
        'Kaya is a very pleasant, easy person to work with—smart, dependable, and full of hustle. I like working with her and appreciate how she consistently figures things out and keeps momentum.',
      author: 'John Borthwick, Founder & CEO',
      tags: ['Mobile AI Assistant', 'VC Workflow', 'Deal Flow'],
    },
    {
      title: 'AI Elearning SaaS',
      company: 'Thryve AI',
      metric: 'New revenue stream created',
      description:
        'Created a SaaS platform that combines AI-driven learning with personal branding tools for athletes and artists.',
      tags: ['SaaS Platform', 'AI Learning', 'Personal Branding'],
    },
    {
      title: 'Custom Agent Development',
      company: 'Youdle',
      metric: 'Additional revenue stream via public API',
      description:
        'Created an AI agent that performs global search for grocery items and stores, integrated directly into their web app.',
      tags: ['AI Agent', 'API Development', 'Web Integration'],
    },
    {
      title: 'Content Generation',
      company: 'Insuave We Trust',
      metric: 'Ready-to-post content automation',
      description:
        'Pulled Spotify playlists and created ready-to-post content for his music media company on Instagram.',
      tags: ['Content Automation', 'Spotify API', 'Social Media'],
    },
  ];

  return (
    <section className='relative w-full bg-[#fffcfa] px-0 py-12 md:py-24'>
      <div className='flex flex-col gap-8 md:gap-12'>
        <p className='w-full px-4 text-center font-["Plus_Jakarta_Sans"] text-[28px] font-bold leading-[32px] tracking-[-0.56px] text-[#281f1b] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]'>
          Selected Case Studies
        </p>

        <div className='mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-7 md:px-12'>
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className='rounded-[20px] border-[1.5px] border-[rgba(110,87,73,0.2)] bg-white p-5 transition-shadow hover:shadow-lg md:p-9'
            >
              <div className='flex flex-col gap-4 md:gap-6'>
                <div>
                  <div className='mb-4 h-1 w-12 rounded-full bg-[#ff5e00]' />
                  <p className='mb-2 font-["Plus_Jakarta_Sans"] text-[20px] font-bold leading-[24px] tracking-[-0.4px] text-[#281f1b] sm:text-[24px] sm:leading-[28px] md:text-[28px] md:leading-[32px] md:tracking-[-0.56px]'>
                    {study.title}
                  </p>
                  <p className='font-["Plus_Jakarta_Sans"] text-[15px] font-normal leading-[20px] text-[#ff5e00] md:text-[17px] md:leading-[24px]'>
                    {study.company}
                  </p>
                </div>

                <div className='rounded-[16px] bg-[rgba(126,70,37,0.09)] p-4 md:p-5'>
                  <p className='font-["Plus_Jakarta_Sans"] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#281f1b] sm:text-[20px] sm:leading-[24px] md:text-[24px] md:leading-[28px] md:tracking-[-0.48px]'>
                    {study.metric}
                  </p>
                </div>

                <p className='font-["Plus_Jakarta_Sans"] text-[15px] font-normal leading-[22px] text-[#281f1b] md:text-[17px] md:leading-[24px]'>
                  {study.description}
                </p>

                {study.testimonial && (
                  <div className='rounded-[16px] border-l-4 border-[#ff5e00] bg-[rgba(126,70,37,0.04)] p-5'>
                    <p className='mb-3 font-["Plus_Jakarta_Sans"] text-[15px] italic leading-[22px] text-[#281f1b]'>
                      "{study.testimonial}"
                    </p>
                    <p className='font-["Plus_Jakarta_Sans"] text-[14px] font-semibold text-[#a13b00]'>
                      — {study.author}
                    </p>
                  </div>
                )}

                <div className='flex flex-wrap gap-2'>
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='rounded-[8px] bg-[rgba(126,70,37,0.09)] px-3 py-1.5 font-["Plus_Jakarta_Sans"] text-[14px] font-normal text-[#281f1b]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================== SERVICES SECTION ==================
function ServicesSection() {
  // Task List Mockup Component
  const TaskListMockup = () => (
    <div className='space-y-3'>
      <motion.div
        className='flex items-center gap-3 rounded-lg border border-[rgba(110,87,73,0.2)] bg-white p-3 shadow-sm'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Check className='h-4 w-4 text-green-600' />
        <span className='text-sm text-[#281f1b]'>Social media post</span>
        <Check className='ml-auto h-4 w-4 text-[#a13b00]' />
      </motion.div>
      <motion.div
        className='flex items-center gap-3 rounded-lg border border-[#ff5e00] bg-[#ff5e00] p-3 shadow-md'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Workflow className='h-4 w-4 text-white' />
        <span className='text-sm text-white'>Employee Tracking</span>
        <Workflow className='ml-auto h-4 w-4 text-white' />
      </motion.div>
      <motion.div
        className='flex items-center gap-3 rounded-lg border border-[rgba(110,87,73,0.2)] bg-white p-3 opacity-60 shadow-sm'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Check className='h-4 w-4 text-[#a13b00] opacity-50' />
        <span className='text-sm text-[#281f1b] opacity-70'>
          Payment reminder
        </span>
        <Check className='ml-auto h-4 w-4 text-[#a13b00] opacity-50' />
      </motion.div>
    </div>
  );

  // Workflow Icons Mockup
  const WorkflowIconsMockup = () => {
    const icons = [
      { Icon: Sparkles, angle: 0 },
      { Icon: BarChart3, angle: 72 },
      { Icon: TrendingUp, angle: 144 },
      { Icon: SearchIcon, angle: 216 },
      { Icon: Workflow, angle: 288 },
    ];

    return (
      <div className='relative flex h-40 items-center justify-center'>
        <motion.div
          className='absolute flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5e00] to-[#ff8c00] shadow-lg'
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Sparkles className='h-8 w-8 text-white' />
        </motion.div>

        {icons.map(({ Icon, angle }, idx) => {
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 70;
          const y = Math.sin(rad) * 70;

          return (
            <motion.div
              key={idx}
              className='absolute flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(110,87,73,0.2)] bg-white shadow-md'
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring' }}
            >
              <Icon className='h-5 w-5 text-[#281f1b]' />
            </motion.div>
          );
        })}
      </div>
    );
  };

  // Code Mockup
  const CodeMockup = () => (
    <div className='rounded-lg border border-[rgba(110,87,73,0.2)] bg-[#281f1b] p-4 font-mono text-xs shadow-lg'>
      <div className='mb-3 flex gap-2'>
        <div className='h-3 w-3 rounded-full bg-red-500'></div>
        <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
        <div className='h-3 w-3 rounded-full bg-green-500'></div>
      </div>
      <div className='space-y-1 text-[#a8a29e]'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className='text-[#ff8c00]'>def</span>{' '}
          <span className='text-[#ffa500]'>__init__</span>(self,
          activation_limit):
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='pl-6'
        >
          self.activation_limit =
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='pl-6'
        >
          activation_limit
        </motion.div>
      </div>
    </div>
  );

  // Search Mockup
  const SearchMockup = () => (
    <div className='space-y-3'>
      <div className='flex items-center gap-3 rounded-lg border border-[rgba(110,87,73,0.2)] bg-white p-3 shadow-sm'>
        <SearchIcon className='h-4 w-4 text-[#a13b00]' />
        <span className='text-sm text-[#281f1b] opacity-60'>
          Research anything...
        </span>
        <span className='ml-auto rounded bg-[rgba(126,70,37,0.09)] px-2 py-1 text-xs text-[#a13b00]'>
          Research
        </span>
      </div>
      {[
        { text: 'Software & app industry' },
        { text: 'UX&UI design industry' },
        { text: 'High Converting customer' },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          className='flex items-center gap-3 rounded-lg border border-[rgba(110,87,73,0.2)] bg-white p-3 shadow-sm'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + idx * 0.1 }}
        >
          <TrendingUp className='h-4 w-4 text-[#a13b00]' />
          <span className='text-sm text-[#281f1b]'>{item.text}</span>
          <TrendingUp className='ml-auto h-4 w-4 text-[#a13b00]' />
        </motion.div>
      ))}
    </div>
  );

  // Strategy Mockup
  const StrategyMockup = () => (
    <div className='relative flex h-40 items-center justify-center'>
      <motion.div
        className='absolute'
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles className='h-16 w-16 text-[#ff5e00]' />
      </motion.div>

      {[...Array(3)].map((_, idx) => (
        <motion.div
          key={idx}
          className='absolute'
          style={{
            left: `${30 + idx * 20}%`,
            top: `${20 + idx * 25}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            delay: idx * 0.3,
            repeat: Infinity,
          }}
        >
          <Sparkles className='h-8 w-8 text-[#ff8c00] opacity-60' />
        </motion.div>
      ))}

      <motion.div
        className='absolute bottom-0 right-0'
        animate={{ rotate: [0, -15, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <BarChart3 className='h-12 w-12 text-[#a13b00] opacity-40' />
      </motion.div>
    </div>
  );

  const features = [
    {
      title: 'Automate Repetitive Tasks',
      description:
        'We help you streamline internal operations by automating manual workflows',
      Mockup: TaskListMockup,
      gridClass: 'md:col-span-1',
    },
    {
      title: 'Automated Workflows',
      description:
        'Boost efficiency across teams with smart automation. Build intelligent workflows that automate multi-step processes across tools and platforms.',
      Mockup: WorkflowIconsMockup,
      gridClass: 'md:col-span-2',
    },
    {
      title: 'Custom AI Agent Development',
      description:
        'We develop custom AI agents that integrate seamlessly with your tools.',
      Mockup: CodeMockup,
      gridClass: 'md:col-span-1',
    },
    {
      title: 'Real-Time Intelligence',
      description:
        'Make smarter decisions with live data insights. Tap into real-time data.',
      Mockup: SearchMockup,
      gridClass: 'md:col-span-1',
    },
    {
      title: 'AI Strategy Consulting',
      description:
        'Get expert guidance to implement AI solutions that drive business growth.',
      Mockup: StrategyMockup,
      gridClass: 'md:col-span-1',
    },
  ];

  return (
    <section className='relative w-full bg-[#fffcfa] px-0 py-12 md:py-24'>
      <div className='flex flex-col gap-8 md:gap-12'>
        <div className='w-full px-4 text-center'>
          <p className='mb-4 font-["Plus_Jakarta_Sans"] text-[28px] font-bold leading-[32px] tracking-[-0.56px] text-[#281f1b] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]'>
            Smarter Services{' '}
            <span className='italic text-[#a13b00]'>Built with AI</span>
          </p>
          <p className='mx-auto max-w-[800px] px-4 font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[24px] text-[#281f1b] opacity-70 sm:text-[18px] sm:leading-[28px] md:text-[20px] md:leading-[32px]'>
            Everything you need to automate operations, boost productivity.
          </p>
        </div>

        <div className='mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-6 md:px-12'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-[24px] border-[1.5px] border-[rgba(110,87,73,0.2)] bg-[rgba(126,70,37,0.04)] p-5 transition-all hover:border-[#ff5e00] hover:shadow-[0_8px_24px_rgba(255,94,0,0.12)] md:p-8 ${feature.gridClass}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className='mb-4 md:mb-6'>
                <feature.Mockup />
              </div>
              <p className='mb-3 font-["Plus_Jakarta_Sans"] text-[18px] font-bold leading-[22px] tracking-[-0.36px] text-[#281f1b] sm:text-[20px] sm:leading-[24px] md:text-[22px] md:leading-[28px] md:tracking-[-0.44px]'>
                {feature.title}
              </p>
              <p className='font-["Plus_Jakarta_Sans"] text-[14px] font-normal leading-[20px] text-[#281f1b] opacity-70 md:text-[15px] md:leading-[24px]'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================== MARATHON/SPRINT SECTION ==================
function MarathonSprintSection() {
  return (
    <motion.section
      className='relative flex w-full flex-col items-center gap-8 bg-[#fffcfa] px-4 py-16 md:gap-16 md:px-12 md:py-32'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className='flex w-full max-w-[1000px] flex-col items-center gap-8 md:gap-12'>
        <div className='text-center'>
          <h2 className='mb-6 font-["Plus_Jakarta_Sans"] text-[36px] font-bold leading-[1.1] tracking-[-1.2px] sm:text-[50px] sm:tracking-[-1.5px] md:text-[80px] md:tracking-[-2px]'>
            <span className='text-[#d4c5b9] opacity-40'>It's a </span>
            <span className='text-[#281f1b]'>Marathon.</span>
            <br />
            <span className='text-[#d4c5b9] opacity-40'>Or a </span>
            <span className='text-[#281f1b]'>Sprint.</span>
          </h2>
        </div>

        <p className='max-w-[800px] px-4 text-center font-["Plus_Jakarta_Sans"] text-[16px] font-normal leading-[28px] text-[#281f1b] opacity-70 sm:text-[18px] sm:leading-[32px] md:text-[22px] md:leading-[36px]'>
          Great products aren't simply built on an assembly line. Some demand
          continuous refinement, while others require focused precision — that's
          why we have multiple ways to work with us.
        </p>
      </div>
    </motion.section>
  );
}

// ================== PRICING SECTION ==================
function PricingSection({ onBookCallClick }: { onBookCallClick?: () => void }) {
  const plans = [
    {
      name: 'Explore AI',
      price: '$2k',
      period: 'one-time',
      description: 'Perfect for businesses starting their AI journey',
      features: [
        'AI Opportunity Assessment',
        'Workflow Analysis Report',
        'ROI Projection',
        '90-minute Strategy Session',
        'Implementation Roadmap',
      ],
      highlighted: false,
    },
    {
      name: 'Blueprint AI',
      price: '$8k',
      period: '/month',
      description: 'Complete AI strategy and planning for your business',
      features: [
        'Everything in Explore AI',
        'Custom AI Blueprint',
        'Process Documentation',
        '3-Month Implementation Plan',
        'Team Training Workshop',
      ],
      highlighted: true,
    },
    {
      name: 'Implement & Scale',
      price: 'Custom',
      period: '',
      description: 'Full implementation and ongoing AI operations',
      features: [
        'Everything in Blueprint AI',
        'Custom AI Development',
        'Full System Integration',
        'Micro-SaaS Development',
        'Dedicated Support Team',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className='relative w-full bg-[#fffcfa] px-0 py-12 md:py-24'>
      <div className='flex flex-col gap-8 md:gap-12'>
        <div className='w-full px-4 text-center'>
          <p className='mb-4 font-["Plus_Jakarta_Sans"] text-[28px] font-bold leading-[32px] tracking-[-0.56px] text-[#281f1b] sm:text-[36px] sm:leading-[40px] md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]'>
            Transparent Pricing
          </p>
          <p className='mx-auto max-w-[800px] px-4 font-["Plus_Jakarta_Sans"] text-[18px] font-normal leading-[26px] text-[#281f1b] sm:text-[20px] sm:leading-[28px] md:text-[24px] md:leading-[32px]'>
            Choose the plan that fits your automation needs
          </p>
        </div>

        <div className='mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-7 md:px-12'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[20px] border-[2px] p-5 transition-all hover:shadow-xl md:p-9 ${
                plan.highlighted
                  ? 'border-[#ff5e00] bg-[#ff5e00]'
                  : 'border-[rgba(110,87,73,0.2)] bg-white hover:border-[#ff5e00]'
              }`}
            >
              {plan.highlighted && (
                <div className='absolute left-1/2 top-[-16px] -translate-x-1/2 transform rounded-full bg-[#281f1b] px-4 py-1 font-["Plus_Jakarta_Sans"] text-[14px] font-bold text-white'>
                  MOST POPULAR
                </div>
              )}

              <div className='flex flex-col gap-6'>
                <div>
                  <p
                    className={`mb-2 font-["Plus_Jakarta_Sans"] text-[24px] font-bold leading-[32px] tracking-[-0.48px] ${
                      plan.highlighted ? 'text-white' : 'text-[#281f1b]'
                    }`}
                  >
                    {plan.name}
                  </p>
                  {plan.highlighted && (
                    <p className='mb-1 font-["Plus_Jakarta_Sans"] text-[14px] font-normal text-white opacity-70'>
                      Starting at
                    </p>
                  )}
                  <div className='mb-3 flex items-baseline gap-2'>
                    <p
                      className={`font-["Plus_Jakarta_Sans"] text-[48px] font-bold tracking-[-0.96px] ${
                        plan.highlighted ? 'text-white' : 'text-[#281f1b]'
                      }`}
                    >
                      {plan.price}
                    </p>
                    <p
                      className={`font-["Plus_Jakarta_Sans"] text-[17px] font-normal ${
                        plan.highlighted
                          ? 'text-white opacity-80'
                          : 'text-[#281f1b] opacity-70'
                      }`}
                    >
                      {plan.period}
                    </p>
                  </div>
                  <p
                    className={`font-["Plus_Jakarta_Sans"] text-[17px] font-normal leading-[24px] ${
                      plan.highlighted
                        ? 'text-white opacity-90'
                        : 'text-[#281f1b] opacity-70'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div
                  className={`h-[1px] ${
                    plan.highlighted
                      ? 'bg-white opacity-30'
                      : 'bg-[#281f1b] opacity-20'
                  }`}
                />

                <div className='flex flex-col gap-4'>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className='flex items-start gap-3'>
                      <Check
                        className={`mt-[2px] h-5 w-5 flex-shrink-0 ${
                          plan.highlighted ? 'text-white' : 'text-[#ff5e00]'
                        }`}
                      />
                      <p
                        className={`font-["Plus_Jakarta_Sans"] text-[17px] font-normal leading-[24px] ${
                          plan.highlighted ? 'text-white' : 'text-[#281f1b]'
                        }`}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onBookCallClick}
                  className={`mt-4 rounded-[16px] px-7 py-3 font-["Plus_Jakarta_Sans"] text-[20px] font-medium transition-all ${
                    plan.highlighted
                      ? 'bg-white text-[#ff5e00] hover:bg-[#281f1b] hover:text-white'
                      : 'bg-[#ff5e00] text-[#050200] hover:bg-[#281f1b] hover:text-white'
                  }`}
                >
                  Book Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================== FOOTER SECTION ==================
function FooterSection({ onBookCallClick }: { onBookCallClick?: () => void }) {
  return (
    <footer className='relative flex w-full flex-col items-center justify-center gap-8 bg-[#fffcfa] px-4 py-12 md:gap-12 md:py-24'>
      <p className='max-w-[720px] px-4 text-center font-["Plus_Jakarta_Sans"] text-[24px] font-bold leading-[28px] tracking-[-0.48px] text-[#281f1b] sm:text-[28px] sm:leading-[32px] md:text-[34px] md:leading-[40px] md:tracking-[-0.68px]'>
        Don't get left behind.
      </p>
      <button
        onClick={onBookCallClick}
        className='cursor-pointer rounded-[16px] bg-[#ff5e00] px-6 py-3 font-["Plus_Jakarta_Sans"] text-[16px] font-medium leading-[20px] text-[#050200] transition-transform hover:scale-105 sm:px-8 sm:py-4 sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px]'
      >
        Book Call
      </button>
      <div className='mt-6 w-full max-w-[1080px] border-t border-[rgba(110,87,73,0.2)] px-4 pt-6'>
        <p className='text-center font-["Plus_Jakarta_Sans"] text-[12px] font-normal text-[#281f1b] opacity-60 md:text-[14px]'>
          © 2025 Forever 22 LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ================== MAIN APP ==================
export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);

  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: 'intro-with-forever-22-studios',
      });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  const handleBookCallClick = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <main className='min-h-screen w-full overflow-x-hidden bg-[#fffcfa]'>
      <HeroSection onBookCallClick={handleBookCallClick} />
      <ProblemSection />
      <AIJourneySection />
      <TestimonialsSection />
      <AboutUsSection />
      <CaseStudiesSection />
      <ServicesSection />
      <MarathonSprintSection />
      <PricingSection onBookCallClick={handleBookCallClick} />
      <FooterSection onBookCallClick={handleBookCallClick} />

      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className='max-h-[90vh] max-w-[900px] border-2 border-[#ff5e00] bg-[#fffcfa]'>
          <DialogHeader>
            <DialogTitle className='font-["Plus_Jakarta_Sans"] text-[24px] text-[#281f1b]'>
              Book a Discovery Call
            </DialogTitle>
          </DialogHeader>
          <div className='h-[600px] w-full overflow-scroll'>
            <Cal
              namespace='intro-with-forever-22-studios'
              calLink='forever22studio/intro-with-forever-22-studios'
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
