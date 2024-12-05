import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import React from 'react';
import BackgroundShapes from '@/components/BackgroundShapes';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Toaster } from 'react-hot-toast';

import ActiveSectionContextProvider from '@/context/ActiveSectionContext';

import ClientTheme from '@/components/theme/ClientTheme';
import { ThemeProvider } from '@/context/ThemeProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'M Roy || Personal Portfolio',
  description:
    'M Roy is a full stack web developer specializing in modern technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <BackgroundShapes />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Header />

            <main>{children}</main>
            <Footer />
            <div className=" fixed flex bottom-4 max-md:bottom-2 right-4 max-md:right-2 max-sm:right-1">
              <ClientTheme />
            </div>
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
