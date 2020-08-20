import React from 'react';
import styled from 'styled-components';

import SectionContent from './SectionContent';
import SectionImage from './SectionImage';

const MainWrapper = styled.div`
  width: 100%;
  height: 549px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 760px;
  }
`;

const ContentWrapper = styled.section`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 80%;
    height: 90%;
    flex-direction: column;
  }

  @media (max-width: 320px) {
    height: 95%;
  }
`;

export default () => (
  <MainWrapper id="code">
    <ContentWrapper>
      <SectionContent />
      <SectionImage />
    </ContentWrapper>
  </MainWrapper>
);
