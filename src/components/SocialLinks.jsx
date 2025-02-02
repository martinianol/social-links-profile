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
        <Button key={link}>{link}</Button>
      ))}
    </Container>
  );
};

export default SocialLinks;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
