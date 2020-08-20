import React from 'react';
import styled from 'styled-components';

import {GridElement, Title, Circle, Description, TextBox} from '../index';
import noteIcon from '../../../../images/note-icon.png';

const BlueCircle = styled.div`
  background: #03c4c6;
`;

export default () => (
  <GridElement>
    <BlueCircle as={Circle}>
      <img src={noteIcon} alt="icon" />
    </BlueCircle>
    <TextBox>
      <Title>E Banks That Accept</Title>
      <Description>
        The moment you think of buying a Web Hosting Plan.{' '}
      </Description>
    </TextBox>
  </GridElement>
);
