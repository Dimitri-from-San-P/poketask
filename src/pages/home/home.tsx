import { List } from '../../components/list';
import { Pagination } from '../../components/pagination';
import useSWR from 'swr';
import React, { useState } from 'react';
import { fetcher } from '../../utils/fetcher';
import { Wrapper } from './styled';
import { Filter } from '../../components/filter/filter';
import { Loader } from '../../loader/Loader';
// import pokemon from '../../svg/pokemon.svg'

export const HomePage = (): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  return (
    <Wrapper>
      {error ? <div className="error">Error fetching data</div> : null}
      <img src="https://vetores.org/d/pokemon.svg" alt="Icon" />
      <h1>Choose your Pokémon!</h1>
      {isLoading && <Loader />}
      <Filter />
      <List pokemonRes={data} />
      <Pagination pokemonRes={data} setOffset={setOffset} setLimit={setLimit} />
    </Wrapper>
  );
};
