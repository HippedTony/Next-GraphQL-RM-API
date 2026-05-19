"use client";

import { Character } from "@/types/character";

import { useFavoritesStore } from "@/store/favorites.store";

interface FavoriteButtonProps {
  character: Character;
}

function FavoriteButton({ character }: FavoriteButtonProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const favorite = isFavorite(character.id);

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFavorite(character.id);
      return;
    }

    addFavorite(character);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`rounded-2xl px-6 py-3 font-semibold transition ${favorite ? "bg-red-500 text-white hover:bg-red-400" : "bg-cyan-500 text-black hover:bg-cyan-400"}`}
    >
      {favorite ? "Remove favorite" : "Add favorite"}
    </button>
  );
}

export default FavoriteButton;
