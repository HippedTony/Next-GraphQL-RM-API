import { Character } from '@/types/character';
import CharacterCard from './CharacterCard';

interface CharacterGridProps {
  characters: Character[];
}

function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}

export default CharacterGrid;
