import styled from "styled-components";

const UserInfo = () => {
  return (
    <Container>
      <Name>Jessica Randall</Name>
      <Location>London, United Kingdom</Location>
      <Phrase>"Front-end developer and avid reader."</Phrase>
    </Container>
  );
};

export default UserInfo;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Name = styled.p``;
const Location = styled.p`
  color: green;
`;

const Phrase = styled.p``;
