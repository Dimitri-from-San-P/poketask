import React, { useState } from 'react';
import { fetcher } from '../../utils/fetcher';
import useSWR from 'swr';
import { Ability } from '../../types/types';
import { NewList } from '../newList/newList';
import { Wrapper } from './styled';
import { Loader } from '../../loader/Loader';

export const Filter = (): JSX.Element => {
  const [choseAbility, setChoseAbility] = useState<string[]>([]);
  const API_FILTER_URL = `https://pokeapi.co/api/v2/ability/`;

  const { data, error, isLoading } = useSWR(API_FILTER_URL, fetcher);
  const abilitys = data?.results;

  const goodView = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = event.target;

    if (checked) {
      setChoseAbility((prevChoseAbility) => [...prevChoseAbility, value]);
    } else {
      setChoseAbility((prevChoseAbility) =>
        prevChoseAbility.filter((ability) => ability !== value)
      );
    }
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {error ? <div className="error">Error fetching data</div> : null}
      <h2>You can choose the ability the Pokemon should have:</h2>
      <form>
        {abilitys?.map((ability: Ability, index: number) => (
          <div key={index}>
            <input
              type="checkbox"
              id={ability.name}
              name={ability.name}
              value={ability.name}
              onChange={handleCheckboxChange}
              checked={choseAbility.includes(ability.name)}
            />
            <label htmlFor={ability.name}>{goodView(ability.name)}</label>
          </div>
        ))}
      </form>
      <NewList choseAbility={choseAbility} />
    </Wrapper>
  );
};
