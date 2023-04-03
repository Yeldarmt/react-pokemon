import * as React from 'react';
import './styles/App.css';
import {useEffect, useState} from 'react';
import { PokemonsList } from './components/PokemonsList';
import { MySelect } from './components/UI/MySelect';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/modal/MyModal';
import {usePokemons} from './hooks/usePokemons';
import {fetchData} from './store/api';
import {useAppDispatch, useAppSelector} from './store';
import Loader from './components/UI/loader/Loader';
import {getPagesArray, getPagesCount} from './utils/pages';

function App() {
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesArray = getPagesArray(totalPages);

  const catFactDispatch = useAppDispatch();
  const {data, loading} = useAppSelector((state) => state.pokemons);
  const sortedAndSearchedPokemons = usePokemons(data.results, selectedSort, searchQuery);

  const sortPokemons = (sort) => {
    setSelectedSort(sort);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
    const offsetPage = offset + page*limit;
    catFactDispatch(fetchData({limit, offset: offsetPage}));
  }

  useEffect(() => {
    catFactDispatch(fetchData({limit, offset}));
  }, []);

  useEffect(() => {
    if (data.count) {
      const totalCount = data.count;
      setTotalPages(getPagesCount(totalCount, limit));
    }
  }, [data.count]);

  return (
    <div className='App'>
      <div>
        <MyInput
          placeholder='Поиск ...'
          type='text'
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <MySelect
          options={[{ name: 'По называнию', value: 'name' }]}
          defaultValue='Сортировка'
          value={selectedSort}
          onChange={sortPokemons}
        />
      </div>
      <hr style={{ margin: '15px 0' }} />
      {loading ?
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '64px'}}>
          <Loader />
        </div> :
        <PokemonsList pokemons={sortedAndSearchedPokemons} title='Список покемонов' />
      }
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {pagesArray.map((n) => (
          <button
            className={n === currentPage ? 'page__current' : ''}
            style={{padding: '8px', margin: '4px'}}
            key={n}
            onClick={() => { changePage(n); }}
          >
            {n}
          </button>
        ))}
      </div>
      <MyModal visible={showModal} setVisible={setShowModal}>
        Detailed Information of Pokemon will be here!
      </MyModal>
    </div>
  );
}

export default App;
