import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
