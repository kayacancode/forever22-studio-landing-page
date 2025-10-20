import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when you have Google Search Console set up
    // google: 'your-google-site-verification-code',
  },
  category: siteConfig.company.industry,
  classification: 'business',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.company.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/logo1.png?v=2`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.company.name} - AI-Powered Product Studio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@forever22studio',
    creator: '@forever22studio',
    title: siteConfig.title,
    description: siteConfig.description,
    images: {
      url: `${siteConfig.url}/images/logo1.png`,
      alt: `${siteConfig.company.name} Logo`,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        {/* Additional favicon links for better browser support */}
        <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon/favicon.ico' />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.company.name,
              legalName: siteConfig.company.legalName,
              description: siteConfig.company.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}/images/logo1.png`,
              image: `${siteConfig.url}/images/logo1.png`,
              foundingDate: siteConfig.company.foundedYear,
              industry: siteConfig.company.industry,
              knowsAbout: siteConfig.company.services,
              serviceArea: {
                '@type': 'Place',
                name: 'Global',
              },
              areaServed: 'Worldwide',
              offers: siteConfig.company.services.map((service) => ({
                '@type': 'Service',
                name: service,
                provider: {
                  '@type': 'Organization',
                  name: siteConfig.company.name,
                },
              })),
              contactPoint: {
                '@type': 'ContactPoint',
                url: 'https://calendar.app.google/dtx9EHNNdEQ4upHH7',
                contactType: 'Customer Service',
              },
              sameAs: [
                // Add your social media URLs here when available
                // 'https://twitter.com/forever22studio',
                // 'https://linkedin.com/company/forever22studio',
                // 'https://instagram.com/forever22studio'
              ],
            }),
          }}
        />

        {/* Website structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteConfig.title,
              description: siteConfig.description,
              url: siteConfig.url,
              publisher: {
                '@type': 'Organization',
                name: siteConfig.company.name,
                logo: `${siteConfig.url}/images/logo1.png`,
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteConfig.url}/?s={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className='font-primary antialiased bg-white'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
