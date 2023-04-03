export interface PokemonModel {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  results: PokemonModel[];
}
