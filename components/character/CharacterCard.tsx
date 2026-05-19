import Image from 'next/image';

import { Character } from '@/types/character';

interface CharacterProps {
  character: Character;
}

function CharacterCard({ character }: CharacterProps) {
  return (
    <article className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <Image
        src={character.image}
        alt={character.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">{character.name}</h2>

        <p>
          <span className="font-semibold">Species:</span> {character.species}
        </p>

        <p>
          <span className="font-semibold">Gender:</span> {character.gender}
        </p>

        <p>
          <span className="font-semibold">Status:</span> {character.status}
        </p>
      </div>
    </article>
  );
}

export default CharacterCard;
