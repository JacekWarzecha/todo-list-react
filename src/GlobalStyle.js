import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
  
*,
::after,
::before {
 box-sizing: inherit;
}
  
#root {
  font-family: 'Josefin Sans', sans-serif;
  background-color: #e8edf1;
  word-break: break-word;
}
`;
