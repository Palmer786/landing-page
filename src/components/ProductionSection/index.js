import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import SectionImage from './SectionImage';

const MainWrapper = styled.section`
  width: 95%;
  height: 1070px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 520px) {
    height: 970px;
  }
`;

export default () => (
  <MainWrapper id="production">
    <SectionHeader />
    <SectionImage />
  </MainWrapper>
);
