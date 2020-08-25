import React from 'react';
import styled from 'styled-components';

import iphoneMock from '../../../images/iphonemock.png';

const ImageBox = styled.div`
  width: 60%;
  max-width: 651px;
  height: 100%;
  animation: MoveToLeft 1.5s ease-in-out;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 520px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    max-height: 350px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 651px;
  max-height: 689px;

  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

export default () => (
  <ImageBox>
    <StyledImg src={iphoneMock} alt="iphone" />
  </ImageBox>
);
