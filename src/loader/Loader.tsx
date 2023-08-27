import React from 'react';
import { Wrapper } from './styled';

export const Loader = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Wrapper>
  );
};
