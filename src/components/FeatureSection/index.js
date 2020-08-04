import React from 'react';
import styled from 'styled-components';

import noteIcon from '../../images/note-icon.png';
import ballIcon from '../../images/ball-icon.png';
import monitorIcon from '../../images/monitor-icon.png';

const MainWrapper = styled.div`
  width: 100%;
  height: 670px;
  background: #fafbfb;
`;

const ContentWrapper = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
`;

const Header = styled.h1`
  color: #304156;
  font-size: 32px;
  text-align: center;
`;

const FeatureGrid = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;
`;

const GridElement = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
`;

const GreenCircle = styled.div`
  height: 48px;
  width: 48px;
  background: #8cd31a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedCircle = styled(GreenCircle)`
  background: #eb597b;
`;

const BlueCircle = styled(GreenCircle)`
  background: #03c4c6;
`;

const PurpleCircle = styled(GreenCircle)`
  background: #b87ee5;
`;

const TextBox = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #304156;
`;

const Description = styled.p`
  font-size: 15px;
  color: #828d99;
`;

export default () => (
  <MainWrapper id="features">
    <ContentWrapper>
      <Header>Awesome Features</Header>
      <FeatureGrid>
        <GridElement>
          <GreenCircle>
            <img src={noteIcon} alt="icon" />
          </GreenCircle>
          <TextBox>
            <Title>Online Messages</Title>
            <Description>
              The moment you think of buying a Web Hosting Plan.{' '}
            </Description>
          </TextBox>
        </GridElement>
        <GridElement>
          <RedCircle>
            <img src={ballIcon} alt="icon" />
          </RedCircle>
          <TextBox>
            <Title>Motivation In Life</Title>
            <Description>
              Maui By Air The Best Way Around The Island
            </Description>
          </TextBox>
        </GridElement>
        <GridElement>
          <BlueCircle>
            <img src={noteIcon} alt="icon" />
          </BlueCircle>
          <TextBox>
            <Title>E Banks That Accept</Title>
            <Description>
              The moment you think of buying a Web Hosting Plan.{' '}
            </Description>
          </TextBox>
        </GridElement>
        <GridElement>
          <PurpleCircle>
            <img src={monitorIcon} alt="icon" />
          </PurpleCircle>
          <TextBox>
            <Title>Promotional Advertising</Title>
            <Description>
              Tips For Designing An Effective Business Card
            </Description>
          </TextBox>
        </GridElement>
      </FeatureGrid>
    </ContentWrapper>
  </MainWrapper>
);
