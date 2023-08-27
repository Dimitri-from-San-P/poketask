import React from 'react';
import { ResponsePokemon } from '../../types/types';
import { Card } from '../card/card';
import { Wrapper } from './styled';

export const List = ({ pokemonRes }: { pokemonRes: ResponsePokemon }): JSX.Element => {
  return (
    <Wrapper>
      {pokemonRes?.results.map((pokemon, index) => (
        <Card pokemon={pokemon.name} key={index} />
      ))}
    </Wrapper>
  );
};
