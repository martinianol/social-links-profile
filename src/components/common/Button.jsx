import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  color: #fff;
  background-color: #333;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
  transition: background-color 500ms ease-in-out;

  &:hover {
    background-color: #c4f82a;
    cursor: url("/black-hand-cursor.cur") 16 16, pointer;
  }
`;
