import {createSlice} from '@reduxjs/toolkit';
import {type PokemonResponse} from '../types';
import {fetchData} from '../api';

interface PokemonsState {
  loading: boolean
  data: PokemonResponse
}

const initialState: PokemonsState = {
  loading: false,
  data: {
    count: 0,
    results: []
  }
}

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state: PokemonsState) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state: PokemonsState, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state: PokemonsState) => {
      state.loading = false;
    });
  }
});

export default pokemonSlice.reducer;
