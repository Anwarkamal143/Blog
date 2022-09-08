import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }


/* inter var - latin */
@font-face {
  font-family: "Poppins";
  font-weight: 400;
  src: url("/fonts/Poppins/Poppins-Regular.ttf") format("ttf");
  font-display: swap;
}

@font-face {
  font-family: "Poppins";
  font-weight: 500;
  src: url("/fonts/Poppins/Poppins-Medium.ttf") format("ttf");
  font-display: swap;
}

@font-face {
  font-family: "Poppins";
  font-weight: 700;
  src: url("/fonts/Poppins/Poppins-Bold.ttf") format("ttf");
  font-display: swap;
}

@font-face {
  font-family: "puck";
  src: url("/fonts/Puck-Regular.woff2") format("woff2"),
    url("/fonts/Puck-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "puck";
  src: url("/fonts/Puck-Medium.woff2") format("woff2"),
    url("/fonts/Puck-Medium.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

html{
    font-size: 66.5%;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
width: 100%;
height: 100vh;
    /* font-weight: 600; */
    @media (min-width: 678px){
      font-size: 100%;
    }
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  a, a:visited, a:active {
    color: inherit;
    text-decoration: none;
    border: none;
    outline: none;
  }
`;
