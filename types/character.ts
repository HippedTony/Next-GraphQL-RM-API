export interface Episode {
  id: string;
  name: string;
  episode: string;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
  type?: string;

  origin?: {
    name: string;
  };

  location?: {
    name: string;
  };

  episode?: Episode[];
}
