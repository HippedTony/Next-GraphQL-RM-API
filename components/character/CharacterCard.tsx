import Image from 'next/image';
import Link from 'next/link';

import { Character } from '@/types/character';

interface CharacterProps {
  character: Character;
}

function CharacterCard({ character }: CharacterProps) {
  return (
    <Link href={`/character/${character.id}`}>
      <article className="group h-full overflow-hidden rounded-4xl bg-slate-900 shadow-2xl ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(14,165,233,0.65)]">
        <div className="overflow-hidden rounded-t-4xl bg-slate-950">
          <Image
            src={character.image}
            alt={character.name}
            width={400}
            height={400}
            className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6 space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white transition-colors duration-200 group-hover:text-cyan-400">
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
  );
}

export default CharacterCard;
