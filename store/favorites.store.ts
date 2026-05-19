import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Character } from "@/types/character";

interface FavoritesStore {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  moveFavorite: (fromIndex: number, toIndex: number) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite(character) {
        const favorites = get().favorites;

        const alreadyExists = favorites.some((fav) => fav.id === character.id);

        if (alreadyExists) {
          return;
        }

        let updatedFavorites = [character, ...favorites];

        if (updatedFavorites.length > 5) {
          updatedFavorites = updatedFavorites.slice(0, 5);
        }

        set({
          favorites: updatedFavorites,
        });
      },

      removeFavorite(id) {
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== id),
        }));
      },

      isFavorite(id) {
        return get().favorites.some((fav) => fav.id === id);
      },

      moveFavorite(fromIndex, toIndex) {
        const favorites = [...get().favorites];
        const [movedItem] = favorites.splice(fromIndex, 1);

        favorites.splice(toIndex, 0, movedItem);

        set({ favorites });
      },
    }),
    {
      name: "favorites-storage",
    },
  ),
);
