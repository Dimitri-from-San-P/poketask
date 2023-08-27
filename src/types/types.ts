export type PokemonData = {
  name: string;
  url: string;
};

export type PokemonName = PokemonData['name'];

export type ResponsePokemon = {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonData[];
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
};

export type Ability = {
  name: string;
  url: string;
};

export type ResponseAbility = Ability[];

export type PokemonArrayAbility = {
  id: number;
  pokemon: PokemonAbility[];
};

export type PokemonAbility = {
  pokemon: {
    name: string;
    url: string;
  };
};
