import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

const work_sans = Work_Sans({ subsets: ['latin'], weight: '400' });

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
    <html lang='en'>
      <body className={work_sans.className}>{children}</body>
    </html>
  );
}
