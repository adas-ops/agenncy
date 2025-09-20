// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import Analytics from '@/components/GoogleAnalytics'; 
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sm servies Name - Creative & Development Services',
  description: 'We provide creative design and software development services to help businesses grow. From branding to web applications, we build solutions that deliver results.',
  keywords: 'creative agency, web development, design, branding, software development',
  authors: [{ name: 'Sm servies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://youragency.com',
    siteName: 'Sm servies',
    title: 'Sm servies - Creative & Development Services',
    description: 'We provide creative design and software development services to help businesses grow.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sm servies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sm servies - Creative & Development Services',
    description: 'We provide creative design and software development services to help businesses grow.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
        <Layout>{children}</Layout>
         </ErrorBoundary>
         <Analytics />
      </body>
    </html>
  );
}