import styled from '@emotion/styled';

export const Wrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  margin: 5px;
  background-color: #d2e1e1;
  padding: 10px;
  border-radius: 15px;
  &:hover {
    -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    transition: all 0.3s;
  }
  h3 {
    
  }
}
.error {
  height: 100px;
  width: 100px;
  background-color: red;
  border: 5px solid #7d1717;
  text-align: center;
  color: #550504;
  font-size: 30px;
}
`;

export const Button = styled.button`
  font-size: 15px;
  height: 35px;
  width: 100px;
  color: #fefefe;
  margin: 2px;
  border: none;
  background-color: #273b69;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #ffcb05;
    color: #273b69;
    cursor: pointer;
    height: 37px;
    width: 102px;
    transition: all 0.3s;
  }
`;
