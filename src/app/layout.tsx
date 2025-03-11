import { Raleway } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Home | Portfolio',
  description:
    'This is a landing page with an overview of all the projects I have worked on',
};

async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-theme="light" lang="pt">
      <body className={`${raleway.variable} antialiased`}>
        <main className="bg-background text-foreground text-base">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
