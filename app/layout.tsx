import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import './globals.css';

const RootLayout = dynamic(() => import('./RootLayout'), {
  ssr: false,
});

export const metadata = {
  title: 'Headless AdminApp',
  description: 'Boilerplate for building headless admin apps with Next.js',
  viewport: 'width=device-width, initial-scale=1',
};

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
