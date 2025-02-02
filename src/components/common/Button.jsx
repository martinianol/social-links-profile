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
  line-height: 150%;

  &:hover {
    background-color: #c4f82a;
  }
`;
