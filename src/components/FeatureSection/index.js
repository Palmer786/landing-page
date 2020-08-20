import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';

const MainWrapper = styled.div`
  width: 100%;
  height: 670px;
  background: #fafbfb;

  @media (max-width: 768px) {
    height: 764px;
  }
`;

const ContentWrapper = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 520px) {
    width: 85%;
  }

  @media (max-width: 320px) {
    width: 92%;
  }
`;

export default () => (
  <MainWrapper id="features">
    <ContentWrapper>
      <SectionHeader />
      <SectionContent />
    </ContentWrapper>
  </MainWrapper>
);
