import { useState } from 'react';
import { ResponsePokemon } from '../../types/types';
import { Button, Wrapper } from './styled';

type Props = {
  pokemonRes: ResponsePokemon;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({ pokemonRes, setOffset, setLimit }: Props): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getTotalPages = (pageSize: number, allItems: number): number =>
    Math.ceil(allItems / pageSize);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    const pokemonsPerPage = 20;
    const startIndex = (page - 1) * pokemonsPerPage;
    setOffset(startIndex);
    setLimit(pokemonsPerPage);
  };

  const allPokemons = pokemonRes?.count;

  const maxPage = getTotalPages(20, allPokemons);

  return (
    <Wrapper>
      {Array.from({ length: maxPage }, (_, index) => index + 1).map((page: number) => (
        <Button
          type="button"
          key={page}
          onClick={() => handlePageChange(page)}
          active={page === currentPage}
        >
          {page}
        </Button>
      ))}
    </Wrapper>
  );
};
