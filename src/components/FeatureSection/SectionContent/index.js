import React from 'react';
import styled from 'styled-components';

import FirstElement from './FirstElement';
import SecondElement from './SecondElement';
import ThirdElement from './ThirdElement';
import FourthElement from './FourthElement';

const FeatureGrid = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 75%;
  }
`;

export const GridElement = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;

  @media (max-width: 768px) {
    height: 20%;
  }
`;

export const Circle = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #304156;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #828d99;
`;

export default () => (
  <FeatureGrid>
    <FirstElement />
    <SecondElement />
    <ThirdElement />
    <FourthElement />
  </FeatureGrid>
);
