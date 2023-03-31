import styled, { createGlobalStyle } from "styled-components";

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
export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(8rem, max-content) auto;
  grid-auto-rows: minmax(10rem, max-content) auto;
  /* grid-template-columns: auto auto auto auto auto;
  grid-template-rows: 10vh 30vh 30vh 30vh; */
  grid-template-areas: "sideMenu header header header header"
                        "sideMenu main main main main"
                        "sideMenu main main main main"
                        "sideMenu main main main main";
`;