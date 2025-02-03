import styled from "styled-components";

const Button = ({ address, children }) => {
  return (
    <ButtonStyled href={address} target="_blank">
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #333;
  display: block;
  text-align: center;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
  transition: background-color 500ms ease-in-out;

  &:hover {
    background-color: #c4f82a;
    color: #333;
    cursor: url("/black-hand-cursor.cur") 16 16, pointer;
  }
`;
