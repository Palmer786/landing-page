import React from 'react';
import styled from 'styled-components';

import clockIcon from '../../images/clock-icon.png';
import boxIcon from '../../images/box-icon.png';
import iphoneMock from '../../images/iphonemock.png';

const MainWrapper = styled.header`
  width: 100%;
  height: 890px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 980px;
  }

  @media (max-width: 520px) {
    height: 860px;
  }

  @media (max-width: 320px) {
    height: 1140px;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const HeaderBox = styled.div`
  width: 78%;
  height: 688px;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 900px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    height: 970px;
  }

  @media (max-width: 520px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 96%;
  }
`;

const FeatureBox = styled.div`
  width: 40%;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 80%;
    height: 830px;
    align-items: center;
  }

  @media (max-width: 520px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    height: 500px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: white;
  width: 90%;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
  width: 90%;

  @media (max-width: 1024px) {
    width: 80%;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const ListBox = styled.div`
  width: 100%;
  height: 250px;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    align-items: center;
    width: 80%;
  }
`;

const ListElement = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
`;

const PurpleCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b87ee5;
`;

const RedCircle = styled(PurpleCircle)`
  background: #eb597b;
`;

const ElementLabel = styled.p`
  color: white;
  font-size: 18px;
  margin-left: 10px;
`;

const StyledButton = styled.button`
  width: 35%;
  height: 48px;
  background: white;
  border: none;
  border-radius: 4px;
  color: #304156;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    transition: background 0.15s;
    background: #f5f5f5;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }
`;

const ImageBox = styled.div`
  width: 60%;
  max-width: 651px;
  height: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 520px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    max-height: 350px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 651px;
  max-height: 689px;

  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

export default () => (
  <MainWrapper>
    <HeaderBox>
      <FeatureBox>
        <Title>Facts Why Inkjet Printing Is Very </Title>
        <Description>
          The moment you think of buying a Web Hosting Plan, you know one thing.
          So many choices, which one to choose?
        </Description>
        <ListBox>
          <ListElement>
            <PurpleCircle>
              <img src={clockIcon} alt="icon" />
            </PurpleCircle>
            <ElementLabel>So many choices</ElementLabel>
          </ListElement>
          <ListElement>
            <RedCircle>
              <img src={boxIcon} alt="icon" />
            </RedCircle>
            <ElementLabel>Whether you would want</ElementLabel>
          </ListElement>
          <StyledButton>Button Name</StyledButton>
        </ListBox>
      </FeatureBox>
      <ImageBox>
        <StyledImg src={iphoneMock} alt="iphone" />
      </ImageBox>
    </HeaderBox>
  </MainWrapper>
);
