import React from 'react';
import styled from 'styled-components';

import SectionContent from './SectionContent';
import SectionImage from './SectionImage';

const MainWrapper = styled.header`
  width: 100%;
  height: 890px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding-top: 250px;
  }

  @media (max-width: 768px) {
    height: 980px;
  }

  @media (max-width: 520px) {
    height: 860px;
    padding-top: 350px;
  }

  @media (max-width: 320px) {
    height: 1140px;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 150px;
  }
`;

const HeaderBox = styled.div`
  width: 78%;
  height: 688px;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 900px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    height: 970px;
  }

  @media (max-width: 520px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 96%;
  }
`;

export default () => (
  <MainWrapper>
    <HeaderBox>
      <SectionContent />
      <SectionImage />
    </HeaderBox>
  </MainWrapper>
);
