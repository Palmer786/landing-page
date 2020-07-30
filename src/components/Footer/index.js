import React from 'react';
import styled from 'styled-components';

import FooterBottom from './FooterBottom';
import FooterContent from './FooterContent';

const MainWrapper = styled.footer`
  height: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #fafbfb;
`;

export default () => (
  <MainWrapper>
    <FooterContent />
    <FooterBottom />
  </MainWrapper>
);
