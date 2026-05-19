'use client';

import { apolloClient } from '@/graphql/client';
import { ApolloProvider } from '@apollo/client/react';

type Props = {
  children: React.ReactNode;
};

export default function ApolloProviderWrapper({ children }: Props) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
