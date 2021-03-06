import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  html, body {
    /* text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased; */
    background: ${p => p.theme.colors.background};
    width: 100vw;
    height: 100vh;
  }
  body {
    min-width: 650px;
  }

  body, input, textarea, button {
    font: 500 1.6rem Inter, sans-serif;
//    font-family: 'Poppins', sans-serif;
    color: ${p => p.theme.colors.text};
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
//    font-family: Lexend, sans-serif;
    color: ${p => p.theme.colors.text};

  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
  button {
    cursor: pointer;
  }
`;
