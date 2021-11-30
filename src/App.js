import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import theme from "./Themes/default";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>Memory Game</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
