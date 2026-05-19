"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import { useQuery } from "@apollo/client/react";
import { GET_CHARACTER } from "@/graphql/queries/characters";

import Loader from "@/components/ui/Loader";
import ErrorMessage from "@/components/ui/ErrorMessage";
import FavoriteButton from "@/components/favorites/FavoriteButton";

import { Character } from "@/types/character";

interface CharacterResponse {
  character: Character;
}

function CharacterDetailPage() {
  const params = useParams();

  const { data, loading, error } = useQuery<CharacterResponse>(GET_CHARACTER, {
    variables: {
      id: params.id,
    },
  });

  if (loading) {
    return <Loader />;
  }

  if (error || !data?.character) {
    return (
      <main>
        <ErrorMessage message="Character not found" />
      </main>
    );
  }

  const character = data.character;

  return (
    <main>
      <div className="custom-container p-6 md:p-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.35em] text-cyan-400/80 uppercase">
              Character details
            </p>
            <h1 className="mt-3">{character.name}</h1>
            <p className="mt-2 text-slate-400">
              {character.species} · {character.status}
            </p>
          </div>

          <FavoriteButton character={character} />
        </div>

        <div className="mb-10 grid items-start gap-4 lg:grid-cols-2">
          <div className="rounded-4xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/5">
            <Image
              src={character.image}
              alt={character.name}
              width={700}
              height={700}
              className="h-full w-full rounded-[1.75rem]"
            />
          </div>

          <div className="space-y-8">
            <div className="rounded-4xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/5">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-black">
                  #{character.id}
                </span>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                  {character.gender}
                </span>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                  {character.origin?.name || "Unknown origin"}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
                    Type
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {character.type || "Unknown"}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {character.location?.name}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
                    Origin
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {character.origin?.name}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm tracking-[0.2em] text-slate-400 uppercase">
                    Status
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {character.status}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-4xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/5">
                <h2 className="mb-4">About</h2>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">
                      Species:
                    </span>{" "}
                    {character.species}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">
                      Origin:
                    </span>{" "}
                    {character.origin?.name}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">
                      Location:
                    </span>{" "}
                    {character.location?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-4xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/5">
          <div className="mb-4 flex items-center justify-between">
            <h2>Episodes</h2>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-400">
              {character.episode?.length} total
            </span>
          </div>

          <div className="grid gap-4 space-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {character.episode?.map((epi) => (
              <div
                key={epi.id}
                className="mb-3 rounded-3xl border border-slate-800 bg-slate-950/40 p-4"
              >
                <p className="font-semibold text-white">{epi.name}</p>
                <p className="text-sm text-slate-400">{epi.episode}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CharacterDetailPage;
