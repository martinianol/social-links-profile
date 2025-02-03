import styled from "styled-components";
import Button from "./common/Button";
const SOCIAL_LINKS = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

const SocialLinks = () => {
  return (
    <Container>
      {SOCIAL_LINKS.map((link) => (
        <li key={link}>
          <Button>{link}</Button>
        </li>
      ))}
    </Container>
  );
};

export default SocialLinks;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  list-style: none;
`;
