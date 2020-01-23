import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #000;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
