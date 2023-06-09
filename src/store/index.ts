import {configureStore} from '@reduxjs/toolkit'
import pokemonsReducer from './reducers/pokemons'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store =  configureStore({
  reducer: {
    pokemons: pokemonsReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
