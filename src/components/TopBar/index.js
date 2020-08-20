import React from 'react';
import styled from 'styled-components';

import TopBarContent from './TopBarContent';
import MobileMenu from './MobileMenu';

const TopBarWrapper = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: #03c4c6;
  z-index: 4;

  @media (max-width: 1024px) {
    position: fixed;
  }
`;

export default () => {
  const [isMenuOpen, toggleMenuOpen] = React.useState(false);

  return (
    <>
      <TopBarWrapper>
        <TopBarContent
          toggleMenuOpen={toggleMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </TopBarWrapper>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
    </>
  );
};
