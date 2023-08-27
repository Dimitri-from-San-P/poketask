import React from 'react';
import { PokemonAbility, PokemonArrayAbility } from '../../types/types';
import { Card } from '../card/card';
import { Wrapper } from './styled';
import { fetcherForManyUrl } from '../../utils/fetcher';
import useSWR from 'swr';
import { Loader } from '../../loader/Loader';

export const NewList = ({ choseAbility }: { choseAbility: string[] }): JSX.Element => {
  const getLinksOfAbilities = (abilitiesData: string[]) => {
    if (!abilitiesData) {
      return null;
    }
    return abilitiesData.map((ability) => `https://pokeapi.co/api/v2/ability/${ability}`);
  };

  const links = getLinksOfAbilities(choseAbility);

  const {
    data: abilitiesDataArr,
    error: abilitiesError,
    isLoading: abilitiesLoading,
  } = useSWR(links, fetcherForManyUrl);

  return (
    <Wrapper>
      {abilitiesError ? <div className="error">Error fetching data</div> : null}
      {abilitiesLoading && <Loader />}
      {abilitiesDataArr?.map((pokemonFirstLevel: PokemonArrayAbility) =>
        pokemonFirstLevel.pokemon.map((pokemonSecondLevel: PokemonAbility, index: number) => (
          <Card pokemon={pokemonSecondLevel.pokemon.name} key={index} />
        ))
      )}
    </Wrapper>
  );
};
