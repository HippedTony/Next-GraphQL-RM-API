import Image from 'next/image';
import Link from 'next/link';

import { Character } from '@/types/character';

interface CharacterListProps {
  characters: Character[];
}

function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="space-y-4">
      {characters.map((character) => (
        <Link
          key={character.id}
          href={`/character/${character.id}`}
          className="group block"
        >
          <article className="flex flex-col sm:flex-row h-full shadow-2xl ring-1 ring-white/5 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(14,165,233,0.65)]">
            <div className="overflow-hidden rounded-l-4xl bg-slate-950 sm:rounded-r-none sm:rounded-l-4xl">
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
                className="h-52 w-full group-hover:scale-105 sm:w-52"
              />
            </div>

            <div className="flex flex-col justify-between p-6 space-y-4 flex-1">
              <div>
                <h2 className="text-white transition-colors duration-200 group-hover:text-cyan-400">
                  {character.name}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">
                  {character.species}
                </p>
              </div>

              <div className="grid gap-3 rounded-3xl bg-slate-800 p-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-slate-100">Gender:</span>{' '}
                  {character.gender}
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Status:</span>{' '}
                  {character.status}
                </p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default CharacterList;
