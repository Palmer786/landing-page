import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import background from '../images/background.png';

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 1920px 917px;
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

`;

const theme = {
  colors: {
    main: '#333',
  },
};

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
