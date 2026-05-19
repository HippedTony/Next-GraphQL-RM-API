import { create } from 'zustand';

interface FavoritesStore {
  favorites: string[];
  addFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],

  addFavorite(id) {
    set((state) => ({
      favorites: [...state.favorites, id],
    }));
  },
}));
