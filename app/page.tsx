"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client/react";

import { GET_CHARACTERS } from "@/graphql/queries/characters";

import CharacterGrid from "@/components/character/CharacterGrid";
import CharacterList from "@/components/character/CharacterList";
import ViewToggle from "@/components/character/ViewToggle";
import SearchBar from "@/components/character/SearchBar";

import Loader from "@/components/ui/Loader";
import ErrorMessage from "@/components/ui/ErrorMessage";
import EmptyState from "@/components/ui/EmptyState";

import SpeciesChart from "@/components/charts/SpeciesChart";
import ChartToggle from "@/components/charts/ChartToggle";

import { Character } from "@/types/character";
import { ViewMode } from "@/types/view-mode";
import { ChartMode } from "@/types/chart-mode";

import { useDebounce } from "@/hooks/useDebounce";

interface CharacterResponse {
  characters: {
    results: Character[];
  };
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [chartMode, setChartMode] = useState<ChartMode>("default");

  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, error } = useQuery<CharacterResponse>(GET_CHARACTERS, {
    variables: {
      name: debouncedSearch || undefined,
    },
  });

  const characters = data?.characters?.results || [];

  return (
    <main>
      <div className="custom-container p-6 md:p-10">
        <div className="mb-10 flex flex-col gap-6">
          <h1>Rick & Morty Characters</h1>

          <div className="flex flex-col gap-3 sm:flex-row">
            <SearchBar value={search} onChange={setSearch} />

            <ViewToggle viewMode={viewMode} onChange={setViewMode} />

            <ChartToggle mode={chartMode} onChange={setChartMode} />
          </div>
        </div>

        {loading && <Loader />}

        {!loading && error && (
          <ErrorMessage message="Failed to load characters" />
        )}

        {!loading && !error && characters.length === 0 && (
          <EmptyState message="No characters found" />
        )}

        {chartMode === "species" && <SpeciesChart characters={characters} />}

        {!loading &&
          !error &&
          characters.length > 0 &&
          (viewMode === "grid" ? (
            <CharacterGrid characters={characters} />
          ) : (
            <CharacterList characters={characters} />
          ))}
      </div>
    </main>
  );
}
