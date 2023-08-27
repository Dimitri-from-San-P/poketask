import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button<{ active: boolean }>`
  height: 30px;
  width: 30px;
  margin: 3px;
  color: #fefefe;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? '#ffcb05' : '#273b69')};
  &:hover {
    background-color: #fefefe;
    color: #273b69;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    -moz-box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    box-shadow: 0px 0px 20px rgba(255,255,255,0.8);
    transition: all 0.3s;
  }
`;
