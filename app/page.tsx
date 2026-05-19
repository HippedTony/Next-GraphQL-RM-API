'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client/react';

import { GET_CHARACTERS } from '@/graphql/queries/characters';

import CharacterGrid from '@/components/character/CharacterGrid';
import SearchBar from '@/components/character/SearchBar';

import Loader from '@/components/ui/Loader';
import ErrorMessage from '@/components/ui/ErrorMessage';
import EmptyState from '@/components/ui/EmptyState';

import { Character } from '@/types/character';

import { useDebounce } from '@/hooks/useDebounce';

interface CharacterResponse {
  characters: {
    results: Character[];
  };
}

export default function Home() {
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, error } = useQuery<CharacterResponse>(GET_CHARACTERS, {
    variables: {
      name: debouncedSearch || undefined,
    },
  });

  const characters = data?.characters?.results || [];

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="flex flex-col gap-6 mb-10">
        <h1 className="text-4xl font-bold">Rick & Morty Characters</h1>

        <SearchBar value={search} onChange={setSearch} />
      </div>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message="Failed to load characters" />
      )}

      {!loading && !error && characters.length > 0 && (
        <CharacterGrid characters={characters} />
      )}
    </main>
  );
}
