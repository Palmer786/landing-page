import React from 'react';
import styled from 'styled-components';

import clockIcon from '../../images/clock-icon.png';
import boxIcon from '../../images/box-icon.png';
import iphoneMock from '../../images/iphonemock.png';

const MainWrapper = styled.header`
  width: 100%;
  height: 763px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderBox = styled.div`
  width: 78%;
  height: 688px;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
`;

const FeatureBox = styled.div`
  width: 40%;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: white;
  width: 90%;
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
  width: 90%;
`;

const ListBox = styled.div`
  width: 100%;
  height: 250px;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
      <img src={iphoneMock} alt="iphone" />
    </HeaderBox>
  </MainWrapper>
);
