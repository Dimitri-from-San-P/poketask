import React, { useState } from 'react';
import useSWR from 'swr';
import { PokemonName } from '../../types/types';
import { fetcher } from '../../utils/fetcher';
import { ModalInfo } from '../modalInfo/modalInfo';
import { Button, Wrapper } from './styled';
import { Loader } from '../../loader/Loader';

export const Card = ({ pokemon }: { pokemon: PokemonName }): JSX.Element => {
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false);
  const API_EACH_URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

  const DEFAULT_IMAGE_URL = 'https://us.v-cdn.net/6034460/uploads/defaultavatar/pLM1K8FMAJQON.jpg';

  const { data: pokemonInfo, error, isLoading } = useSWR(API_EACH_URL, fetcher);
  const image = pokemonInfo?.sprites.other.dream_world.front_default || DEFAULT_IMAGE_URL;

  const openModalInfo = (): void => {
    setInfoIsOpen(true);
  };
  const closeModalInfo = (): void => {
    setInfoIsOpen(false);
  };
  return (
    <Wrapper>
      {isLoading && <Loader />}
      {error ? <div className="error">Error fetching data</div> : null}
      <img src={image} alt="pokemon img" style={{ height: '180px', width: '180px' }} />
      <h3>{pokemonInfo?.name.toUpperCase()}</h3>
      <Button type="button" onClick={openModalInfo}>
        Info
      </Button>
      {infoIsOpen ? (
        <ModalInfo pokemon={pokemonInfo} closeModalInfo={closeModalInfo} image={image} />
      ) : null}
    </Wrapper>
  );
};
