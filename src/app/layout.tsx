import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './animate.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full w-full'>
      <body className={`${inter.className} w-full h-full`}>{children}</body>
    </html>
  );
}
