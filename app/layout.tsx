import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ReduxProvider } from '@/store/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WAppConnect',
  description: 'Chat app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={` bg-[#efeae2] ${inter.className}`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ReduxProvider>
  );
}
