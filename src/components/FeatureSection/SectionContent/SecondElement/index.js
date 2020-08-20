import React from 'react';
import styled from 'styled-components';

import {GridElement, Title, Circle, Description, TextBox} from '../index';
import ballIcon from '../../../../images/ball-icon.png';

const RedCircle = styled.div`
  background: #eb597b;
`;

export default () => (
  <GridElement>
    <RedCircle as={Circle}>
      <img src={ballIcon} alt="icon" />
    </RedCircle>
    <TextBox>
      <Title>Motivation In Life</Title>
      <Description>Maui By Air The Best Way Around The Island</Description>
    </TextBox>
  </GridElement>
);
