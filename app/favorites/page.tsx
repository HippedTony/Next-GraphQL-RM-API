"use client";

import EmptyState from "@/components/ui/EmptyState";
import { useFavoritesStore } from "@/store/favorites.store";
import Image from "next/image";
import Link from "next/link";

function FavoritesPage() {
  const { favorites, moveFavorite, removeFavorite } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 p-10">
        <div className="mx-auto max-w-7xl p-6 md:p-10">
          <div className="mb-10">
            <p className="text-sm tracking-[0.35em] text-cyan-400/80 uppercase">
              Favorites
            </p>
            <h1 className="mt-3 text-5xl font-bold">Favorites</h1>
          </div>

          <EmptyState message="No favorites yet" />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl p-6 md:p-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.35em] text-cyan-400/80 uppercase">
              Favorites
            </p>
            <h1 className="mt-3 text-5xl font-bold">Favorites</h1>
            <p className="mt-2 text-slate-400">Max 5 favorites</p>
          </div>
        </div>

        <div className="space-y-4">
          {favorites.map((character, index) => (
            <article
              key={character.id}
              className="flex flex-col gap-4 overflow-hidden rounded-4xl bg-slate-900 p-6 md:flex-row shadow-2xl ring-1 ring-white/5"
            >
              <Link href={`/character/${character.id}`}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={150}
                  height={150}
                  className="rounded-[1.25rem] object-cover"
                />
              </Link>

              <div className="flex-1">
                <h2 className="text-2xl font-bold">{character.name}</h2>

                <p className="text-slate-400">{character.species}</p>

                <p>{character.status}</p>
              </div>

              <div className="flex items-start gap-2">
                <button
                  disabled={index === 0}
                  onClick={() => moveFavorite(index, index - 1)}
                  className="rounded-2xl bg-slate-700 px-4 py-2 disabled:opacity-40"
                >
                  ↑
                </button>
                <button
                  disabled={index === favorites.length - 1}
                  onClick={() => moveFavorite(index, index + 1)}
                  className="rounded-2xl bg-slate-700 px-4 py-2 disabled:opacity-40"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeFavorite(character.id)}
                  className="rounded-2xl bg-cyan-500 px-4 py-2 text-black"
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FavoritesPage;
