import {createAsyncThunk} from '@reduxjs/toolkit';
import {type PokemonResponse} from './types';

export const fetchData = createAsyncThunk('get/pokemons', async ({limit, offset}: {limit: number; offset: number}):Promise<PokemonResponse> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data;
});
