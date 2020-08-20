import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import SectionSlider from './SectionSlider';

const MainWrapper = styled.section`
  width: 100%;
  height: 588px;
  background: #fafbfb;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default () => (
  <MainWrapper id="testimonials">
    <SectionHeader />
    <SectionSlider />
  </MainWrapper>
);
