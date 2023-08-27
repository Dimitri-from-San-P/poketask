import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 3px solid white;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
    color: #fefefe;
  }
  form {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    padding: 5px;
    @media screen and (max-width: 1050px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  label {
    color: #fefefe;
    margin-left: 5px;
  }
  input {
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);
      -moz-box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);
      transition: all 0.3s;
    }
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
