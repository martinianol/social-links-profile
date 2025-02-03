import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Mars</a>.
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 10px;
  font-size: 11px;
  text-align: center;
  color: #fff;
  a {
    color: hsl(228, 45%, 44%);
  }
`;
