import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }
  .App{
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #e5e5e5;
  }
`;

export default GlobalStyle;
