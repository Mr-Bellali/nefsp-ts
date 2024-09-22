"use client"
import { Provider } from 'react-redux';
import { store } from '@/redux/store'; // Adjust the path if necessary
import "./globals.css";
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'NEFSP',
  description: 'Save big food for a little money.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Provider store={store}>
          <main className="relative overflow-hidden min-h-screen bg-gray-100">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
