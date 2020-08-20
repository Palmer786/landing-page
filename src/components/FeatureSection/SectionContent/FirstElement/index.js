import React from 'react';
import styled from 'styled-components';

import {GridElement, Title, Circle, Description, TextBox} from '../index';
import noteIcon from '../../../../images/note-icon.png';

const GreenCircle = styled.div`
  background: #8cd31a;
`;

export default () => (
  <GridElement>
    <GreenCircle as={Circle}>
      <img src={noteIcon} alt="icon" />
    </GreenCircle>
    <TextBox>
      <Title>Online Messages</Title>
      <Description>
        The moment you think of buying a Web Hosting Plan.
      </Description>
    </TextBox>
  </GridElement>
);
