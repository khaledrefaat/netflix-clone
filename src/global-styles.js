import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%; /* 10px = 1rem */
        box-sizing: border-box;
    }

    html,
    body {
        font-family: 'Helvetica Neue', Helevetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000;
        color: #333;
    }
`;
export default GlobalStyles;
