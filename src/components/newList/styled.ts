import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  .error {
    height: 100px;
    width: 500px;
    background-color: red;
    border: 5px solid #7d1717;
    text-align: center;
    color: #550504;
    font-size: 30px;
    margin-left: 80%;
    margin-right: 80%;
  }
`;
