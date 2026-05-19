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
          className="flex flex-col sm:flex-row bg-slate-800 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
        >
          <article className="flex flex-col sm:flex-row gap-4">
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
              className="w-full sm:w-52 h-52 object-cover"
            />

            <div className="p-5 space-y-2">
              <h2 className="text-2xl font-bold">{character.name}</h2>

              <p>
                <span className="font-semibold">Species:</span>{' '}
                {character.species}
              </p>

              <p>
                <span className="font-semibold">Gender:</span>{' '}
                {character.gender}
              </p>

              <p>
                <span className="font-semibold">Status:</span>{' '}
                {character.status}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default CharacterList;
