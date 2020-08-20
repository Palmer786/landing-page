import React from 'react';
import styled from 'styled-components';
import productionProject from '../../../images/production-project.png';

const StyledImg = styled.img`
  width: 100%;
  max-width: 948px;
  max-height: 576px;
`;

export default () => <StyledImg src={productionProject} alt="project" />;
