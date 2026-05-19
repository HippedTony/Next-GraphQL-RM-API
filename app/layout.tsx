import type { Metadata } from 'next';
import './globals.css';

import ApolloProviderWrapper from '@/components/providers/ApolloProvider';

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
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}
