import styled from "styled-components";
import UserInfo from "./UserInfo";
import SocialLinks from "./SocialLinks";

const Card = () => {
  return (
    <Main>
      <UserInfo />
      <SocialLinks />
    </Main>
  );
};

export default Card;

const Main = styled.main`
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-radius: 12px;
  padding: 24px;
  gap: 24px;
  overflow: scroll;
  width: 100%;
  max-width: 384px;

  @media (min-width: 600px) {
    padding: 40px;
  }
`;
