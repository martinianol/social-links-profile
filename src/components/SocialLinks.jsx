import styled from "styled-components";
import Button from "./common/Button";
const SOCIAL_LINKS = [
  { name: "GitHub", address: "https://github.com/", id: 1 },
  { name: "Frontend Mentor", address: "https://www.frontendmentor.io", id: 2 },
  { name: "LinkedIn", address: "https://www.linkedin.com/", id: 3 },
  { name: "Twitter", address: "https://x.com/", id: 4 },
  { name: "Instagram", address: "https://www.instagram.com/", id: 5 },
];

const SocialLinks = () => {
  return (
    <Container>
      {SOCIAL_LINKS.map((link) => (
        <li key={link.id}>
          <Button address={link.address}>{link.name}</Button>
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
