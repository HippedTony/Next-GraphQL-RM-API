import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        gender
        species
        status
      }
    }
  }
`;
