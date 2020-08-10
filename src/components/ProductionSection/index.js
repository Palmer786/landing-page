import React from 'react';
import styled from 'styled-components';

import productionProject from '../../images/production-project.png';
import searchIcon from '../../images/search-icon.png';

const MainWrapper = styled.section`
  width: 95%;
  height: 1070px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 520px) {
    height: 970px;
  }
`;

const ContentBox = styled.div`
  width: 50%;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    height: 240px;
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
    height: 260px;
  }

  @media (max-width: 520px) {
    width: 90%;
    height: 310px;
  }

  @media (max-width: 320px) {
    height: 340px;
  }
`;

const GreenCircle = styled.div`
  height: 48px;
  width: 48px;
  background: #8cd31a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #304156;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h2`
  font-weight: 400;
  color: #304156;
  text-align: center;
  font-size: 18px;
  line-height: 1.7;

  @media (max-width: 320px) {
    font-size: 17px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 948px;
  max-height: 576px;
`;

export default () => (
  <MainWrapper id="production">
    <ContentBox>
      <GreenCircle>
        <img src={searchIcon} alt="icon" />
      </GreenCircle>
      <Title>Closer Look at Items</Title>
      <SubTitle>
        The moment you think of buying a Web Hosting Plan, you know one thing.
        So many choices, which one to choose?The moment you think of buying a
        Web Hosting Plan, you know one thing.
      </SubTitle>
    </ContentBox>
    <StyledImg src={productionProject} alt="project" />
  </MainWrapper>
);
