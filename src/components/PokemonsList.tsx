import * as React from 'react';
import PokemonItem from './PokemonItem';
import {type PokemonModel} from '../store/types';

interface Props {
  pokemons: readonly PokemonModel[];
  title: string;
}

export function PokemonsList({ pokemons, title }: Props) {
  if (!pokemons.length) {
    return (
      <h3 style={{ textAlign: 'center' }}>Покемоны не найдены!</h3>
    )
  }
  return (
    <div>
      <h3>{title}</h3>
      {pokemons.map((n) => (
        <PokemonItem item={n} key={n.url} />
      ))}
    </div>
  );
}
