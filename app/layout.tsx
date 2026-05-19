import ApolloProviderWrapper from '@/components/providers/ApolloProvider';
import Navbar from '@/components/layout/Navbar';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Rick & Morty App',
  description: 'Technical test with Next.js and GraphQL',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>
          <Navbar />
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
