import React from 'react';
import styled from 'styled-components';

import logo1 from '../../images/logo-1.png';
import logo2 from '../../images/logo-2.png';
import logo3 from '../../images/logo-3.png';
import logo4 from '../../images/logo-4.png';
import logo5 from '../../images/logo-5.png';

const MainWrapper = styled.section`
  width: 100%;
  height: 522px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageGrid = styled.div`
  width: 40%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const GridElement = styled.div`
  width: 100%;
  height: 100%;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
`;

const FirstCircle = styled(Circle)`
  width: 80px;
  height: 80px;
  background: #fafbfb;
`;

const SecondCircle = styled(Circle)`
  width: 110px;
  height: 110px;
  background: #fafbfb;
   top: 5px;
   right: 10%;
`;

const ThirdCircle = styled(Circle)`
  width: 64px;
  height: 64px;
  background: #f2f4f4;
  top: 40%;
`;

const FourthCircle = styled(Circle)`
  width: 126px;
  height: 126px;
  background: #f2f4f4;
  bottom: 7%;
`;

const FifthCircle = styled(Circle)`
  width: 143px;
  height: 143px;
  background: #fafbfb;
  left: 12%;
  bottom: 2%;
`;

const ContentBox = styled.div`
  width: 40%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #304156;
  font-size: 32px;
`;

const Description = styled.p`
  color: #304156;
  font-size: 18px;
  width: 80%;
`;

const StyledButton = styled.button`
  background: #0093ff;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  width: 25%;
  height: 48px;
`;

export default () => (
  <MainWrapper>
    <ContentWrapper>
      <ImageGrid>
        <GridElement>
          <FirstCircle>
            <img src={logo1} alt="logo" />
          </FirstCircle>
        </GridElement>
        <GridElement>
          <SecondCircle>
            <img src={logo2} alt="logo" />
          </SecondCircle>
        </GridElement>
        <GridElement>
          <ThirdCircle>
            <img src={logo3} alt="logo" />
          </ThirdCircle>
        </GridElement>
        <GridElement>
          <FourthCircle>
            <img src={logo4} alt="logo" />
          </FourthCircle>
        </GridElement>
        <GridElement>
          <FifthCircle>
            <img src={logo5} alt="logo" />
          </FifthCircle>
        </GridElement>
      </ImageGrid>
      <ContentBox>
        <Title>Our Clients</Title>
        <Description>
          Click on the link website-hosting-reviews-free and you would know why
          a lot of people
        </Description>
        <StyledButton>Button Name</StyledButton>
      </ContentBox>
    </ContentWrapper>
  </MainWrapper>
);
