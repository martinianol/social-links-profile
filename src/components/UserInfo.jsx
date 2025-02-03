import styled from "styled-components";
import avatarImage from "../assets/images/avatar-jessica.jpeg";

const UserInfo = () => {
  return (
    <Container>
      <Avatar src={avatarImage} />
      <NameAndLocation>
        <Name>Jessica Randall</Name>
        <Location>London, United Kingdom</Location>
      </NameAndLocation>
      <Phrase>"Front-end developer and avid reader."</Phrase>
    </Container>
  );
};

export default UserInfo;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`;

const NameAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.p`
  font-size: 24px;
`;

const Location = styled.p`
  font-size: 14px;
  color: #c4f82a;
`;

const Phrase = styled.p`
  font-size: 14px;
`;
