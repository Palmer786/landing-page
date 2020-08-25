import React from 'react';
import PropTypes from 'prop-types';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import background from '../images/background.png';

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 917px;
  
    
  @media (max-width: 1024px) {
    background-size: 100% 1176px;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Archivo', sans-serif;
}

img {
  user-select: none;
}

@keyframes FloatingLogo {
0% { transform: rotate(0deg) translateX(10px) rotate(0deg); box-shadow: 0 0 18px 0  rgba(0,0,0,0.3)}
    25%   { transform: rotate(90deg) translateX(10px) rotate(-90deg); box-shadow: 0 0 18px 0 rgba(0,0,0,0.3)}
    50%   { transform: rotate(180deg) translateX(10px) rotate(-180deg); box-shadow: 0 0 18px 0  rgba(0,0,0,0.3)}
    75%   { transform: rotate(270deg) translateX(10px) rotate(-270deg); box-shadow: 0 -0 18px 0  rgba(0,0,0,0.3)}
    100%   { transform: rotate(360deg) translateX(10px) rotate(-360deg); box-shadow:0 0 18px 0  rgba(0,0,0,0.3)}
}

@keyframes float {
0% {
box-shadow: 0 3px 25px 0 rgba(0,0,0,0.6);
transform: translatey(0);
}
50% {
box-shadow: 0 15px 25px 0 rgba(0,0,0,0.2);
transform: translatey(-20px);
}
100% {
box-shadow: 0 3px 25px 0 rgba(0,0,0,0.6);
transform: translatey(0);
}
}
`;

const theme = {};

const Layout = ({children}) => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
