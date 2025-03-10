import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

const AppLayout = dynamic(() => import('./AppLayout'), {
  ssr: false,
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return <AppLayout>{children}</AppLayout>;
}
