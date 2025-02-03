import { useEffect } from "react";
import styled from "styled-components";
import blackHandCursor from "../../assets/images/black-hand-cursor.cur";

const Button = ({ address, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        document.activeElement?.blur(); // Remove focus when "Esc" is pressed
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ButtonStyled
      href={address}
      target="_blank"
      tabindex="0"
      rel="noreferrer"
      cursor={blackHandCursor}
    >
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

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus-visible {
    background-color: #c4f82a;
    color: #333;
    cursor: ${({ cursor }) =>
      cursor ? `url(${cursor}) 16 16, pointer` : "pointer"};
  }
`;
