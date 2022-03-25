import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: max(min(2vmin, 1.2em), 12px);
    color: ${({ theme }) => theme.colors.neutral};
    cursor: default;
    text-align: center;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${({ theme }) => theme.fonts.title};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.light};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary2.light};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.secondary1.light};
  }

  span {
    color: ${({ theme }) => theme.colors.neutral};
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyles;
