import React from 'react';
import styled from 'styled-components';

import productionProject from '../../images/production-project.png';
import searchIcon from '../../images/search-icon.png';

const MainWrapper = styled.section`
  width: 80%;
  height: 1010px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ContentBox = styled.div`
  width: 50%;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
`;

const SubTitle = styled.h2`
  font-weight: bold;
  color: #304156;
  text-align: center;
  font-size: 18px;
  line-height: 1.7;
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
    <img src={productionProject} alt="project" />
  </MainWrapper>
);
