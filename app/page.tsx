'use client';

import { useQuery } from '@apollo/client/react';

import { GET_CHARACTERS } from '@/graphql/queries/characters';

import CharacterGrid from '@/components/character/CharacterGrid';
import Loader from '@/components/ui/Loader';
import ErrorMessage from '@/components/ui/ErrorMessage';

import { Character } from '@/types/character';

interface CharacterResponse {
  characters: {
    results: Character[];
  };
}

export default function Home() {
  const { data, loading, error } = useQuery<CharacterResponse>(GET_CHARACTERS);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <main className="min-h-screen p-10">
        <ErrorMessage message={error.message} />
      </main>
    );
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Rick & Morty Characters</h1>

      <CharacterGrid characters={data?.characters.results || []} />
    </div>
  );
}
