import React from 'react';
import styled from 'styled-components';

import SectionContent from './SectionContent';
import SectionImageGrid from './SectionImageGrid';

const MainWrapper = styled.section`
  width: 100%;
  height: 522px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 732px;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 370px) {
    height: 833px;
  }
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 85%;
    flex-direction: column-reverse;
  }

  @media (max-width: 520px) {
    width: 95%;
  }
`;

export default () => (
  <MainWrapper id="client">
    <ContentWrapper>
      <SectionImageGrid />
      <SectionContent />
    </ContentWrapper>
  </MainWrapper>
);
