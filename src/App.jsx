import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import InterFont from "./assets/fonts/Inter-VariableFont_slnt,wght.ttf";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Card />
      <Footer />
    </AppContainer>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Inter';
    src: url(${InterFont}) format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    line-height: 150%;
  }

`;

const AppContainer = styled.div`
  background-color: #141414;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
