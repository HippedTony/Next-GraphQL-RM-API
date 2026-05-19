import { HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
  cache: new InMemoryCache(),
});
