import {useMemo} from 'react';

export const useSortedPokemons = (pokemons, sort) => {
  const sortedPokemons = useMemo(() => {
    if (sort !== '') {
      return [...pokemons].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return pokemons;
  }, [pokemons, sort])

  return sortedPokemons;
}

export const usePokemons = (pokemons, sort, query) => {
  const sortedPokemons = useSortedPokemons(pokemons, sort);

  const sortedAndSearchedPokemons = useMemo(() => {
    return sortedPokemons.filter((n) =>
      n.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [sortedPokemons, query]);

  return sortedAndSearchedPokemons;
}
