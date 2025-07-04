import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { CategoryProvider } from '@/context/CategoryContext';
import type { Metadata } from 'next';
import React from 'react';
import { displayFont, textFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${displayFont.variable} ${textFont.variable}`}>
      <body className='font-display text-base'>
        <CategoryProvider>
          <Header />
          {children}
          <Footer />
        </CategoryProvider>
      </body>
    </html>
  );
}
