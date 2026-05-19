'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

import { useQuery } from '@apollo/client/react';
import { GET_CHARACTER } from '@/graphql/queries/characters';

import Loader from '@/components/ui/Loader';
import ErrorMessage from '@/components/ui/ErrorMessage';

import { Character } from '@/types/character';

interface CharacterResponse {
  character: Character;
}

function CharacterDetailPage() {
  const router = useRouter();
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
      <main className="min-h-screen p-10">
        <ErrorMessage message="Character not found" />
      </main>
    );
  }

  const character = data.character;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl p-6 md:p-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/80">
              Character details
            </p>
            <h1 className="mt-3 text-5xl font-bold">{character.name}</h1>
            <p className="mt-2 text-slate-400">
              {character.species} · {character.status}
            </p>
          </div>

          <div>
            <button className="inline-flex items-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400">
              Add to favorites
            </button>{' '}
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center rounded-2xl bg-cyan-500 ms-2 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              {'<-'}
            </button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] items-start">
          <div className="rounded-4xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/5">
            <Image
              src={character.image}
              alt={character.name}
              width={900}
              height={900}
              className="h-full w-full rounded-[1.75rem] object-cover"
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
                  {character.origin?.name || 'Unknown origin'}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Type
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {character.type || 'Unknown'}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Location
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {character.location?.name}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Origin
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {character.origin?.name}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-800 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
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
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">
                      Species:
                    </span>{' '}
                    {character.species}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">
                      Origin:
                    </span>{' '}
                    {character.origin?.name}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">
                      Location:
                    </span>{' '}
                    {character.location?.name}
                  </p>
                </div>
              </div>

              <div className="rounded-4xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Episodes</h2>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-400">
                    {character.episode?.length} total
                  </span>
                </div>

                <div className="space-y-3">
                  {character.episode?.map((epi) => (
                    <div
                      key={epi.id}
                      className="rounded-3xl border border-slate-800 bg-slate-950/40 p-4"
                    >
                      <p className="font-semibold text-white">{epi.name}</p>
                      <p className="text-sm text-slate-400">{epi.episode}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CharacterDetailPage;
