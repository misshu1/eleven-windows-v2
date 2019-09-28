import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}
`;
