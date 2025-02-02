import styled from "styled-components";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #141414;
  height: 100vh;
  padding: 0px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
