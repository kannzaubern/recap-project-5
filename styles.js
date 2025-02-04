import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 24px;
    margin-bottom: 80px;
    font-family: 'Inter', sans-serif;
    background-color: #F2F4F5;
  }
`;
