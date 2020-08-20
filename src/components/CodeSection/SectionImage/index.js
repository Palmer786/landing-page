import React from 'react';
import styled from 'styled-components';

import codeImg from '../../../images/code-image.png';

const ImageBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 456px;
  max-height: 292px;

  @media (max-width: 520px) {
    transform: scale(1.5);
  }
`;

export default () => (
  <ImageBox>
    <StyledImg src={codeImg} alt="code" />
  </ImageBox>
);
