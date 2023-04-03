import React from 'react';
import {type PokemonModel} from '../store/types';

interface Props {
  item: PokemonModel;
}

function PokemonItem({ item }: Props) {
  return (
    <div className='pokemon-item'>
      <div className='pokemon-item__content'>
        <span>{item.name.toUpperCase()}</span>
        <a href={item.url}>Open</a>
      </div>
    </div>
  );
}

export default PokemonItem;
