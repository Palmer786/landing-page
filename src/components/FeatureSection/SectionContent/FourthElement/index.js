import React from 'react';
import styled from 'styled-components';

import {GridElement, Title, Circle, Description, TextBox} from '../index';
import monitorIcon from '../../../../images/monitor-icon.png';

const PurpleCircle = styled.div`
  background: #b87ee5;
`;

export default () => (
  <GridElement>
    <PurpleCircle as={Circle}>
      <img src={monitorIcon} alt="icon" />
    </PurpleCircle>
    <TextBox>
      <Title>Promotional Advertising</Title>
      <Description>Tips For Designing An Effective Business Card</Description>
    </TextBox>
  </GridElement>
);
