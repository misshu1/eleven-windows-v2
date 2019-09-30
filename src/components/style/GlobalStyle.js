import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  
  * {
      box-sizing: border-box;
  }

  body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
  }
  
  #taskbar {
      position:fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3.5rem;
  }
`;
