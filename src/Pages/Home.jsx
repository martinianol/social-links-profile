import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <Main>
      <UserInfo />
      <SocialLinks />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-radius: 12px;
  padding: 40px;
  gap: 24px;
  line-height: 150%;
`;
