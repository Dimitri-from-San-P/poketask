import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  width: 450px;
  height: 550px;
  border-radius: 14px;
  background-color: #fefefe;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 20px;
    letter-spacing: 4px;
  }
  h5 {
    font-size: 16px;
  }
`;
export const Button = styled.button`
  height: 35px;
  width: 130px;
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
    transition: all 0.3s;
    height: 37px;
    width: 133px;
`;
