import React from 'react';
import styled from 'styled-components';

import SubscribeBox from './SubscribeBox';
import FirstElement from './FirstElement';
import SecondElement from './SecondElement';
import ThirdElement from './ThirdElement';
import FourthElement from './FourthElement';

const MainWrapper = styled.div`
  width: 70%;
  height: 67%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 520px) {
    height: 80%;
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 90%;
    height: 65%;
  }
`;

export const GridElement = styled.table`
  width: 100%;
  height: 80%;
`;

export const HeaderCell = styled.th`
  color: #304156;
  font-size: 11px;
  text-align: left;
`;

export const TableCell = styled.td`
  font-size: 13px;
  text-align: left;
`;

export const StyledLink = styled.a`
  color: #304156;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #004dc6;
  }
`;

export default () => (
  <MainWrapper>
    <ContentWrapper>
      <FirstElement />
      <SecondElement />
      <ThirdElement />
      <FourthElement />
    </ContentWrapper>
    <SubscribeBox />
  </MainWrapper>
);
