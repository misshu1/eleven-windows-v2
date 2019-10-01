import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}
@import url('https://fonts.googleapis.com/css?family=Roboto:100,400&display=swap');

* {
    box-sizing: border-box;
}

body {
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

#desktop {
    position: relative;
    height: calc(100vh - 3.5rem);
    width: 100%;
}

#taskbar {
    z-index: 250;
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    user-select: none;
}

#modal {
    z-index: 300;
    position: relative;
}
`;
