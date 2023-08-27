import React from 'react';
import { Pokemon } from '../../types/types';
import { Button, Overlay, Wrapper } from './styled';

type Props = {
  pokemon: Pokemon;
  closeModalInfo: () => void;
  image: string;
};

export const ModalInfo = ({ pokemon, closeModalInfo, image }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Overlay>
        <img src={image} alt="pokemon img" style={{ height: '250px' }} />
        <h2>{pokemon.name.toUpperCase()}</h2>
        <h5>Height: {pokemon.height} decimetres</h5>
        <h5>Weight: {pokemon.weight} hectograms</h5>
        <Button onClick={closeModalInfo}>Close</Button>
      </Overlay>
    </Wrapper>
  );
};
