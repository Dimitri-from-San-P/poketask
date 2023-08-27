import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  background-color: #273b69;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 200px;
  }
  h1 {
    font-size: 50px;
    letter-spacing: 2px;
    color: #d2e1e1;
    text-align: center;
    font-family: 'Comforter', cursive;
  }
  .error {
    height: 100px;
    width: 500px;
    background-color: red;
    border: 5px solid #7d1717;
    text-align: center;
    color: #550504;
    font-size: 30px;
  }
`;
