import React from 'react';
import styled from 'styled-components';

import logo1 from '../../../images/logo-1.png';
import logo2 from '../../../images/logo-2.png';
import logo3 from '../../../images/logo-3.png';
import logo4 from '../../../images/logo-4.png';
import logo5 from '../../../images/logo-5.png';

const ImageGrid = styled.div`
  width: 40%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 45%;
  }

  @media (max-width: 520px) {
    width: 96%;
  }

  @media (max-width: 370px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const GridElement = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

  @media (max-width: 370px) {
    right: 9%;
  }
`;

const SecondCircle = styled(Circle)`
  width: 110px;
  height: 110px;
  background: #fafbfb;
  top: 5px;
  right: 10%;

  @media (max-width: 370px) {
    right: 25%;
    bottom: 15%;
  }
`;

const ThirdCircle = styled(Circle)`
  width: 64px;
  height: 64px;
  background: #f2f4f4;
  top: 40%;

  @media (max-width: 370px) {
    top: 0;
    bottom: 20%;
    left: 12%;
  }
`;

const FourthCircle = styled(Circle)`
  width: 126px;
  height: 126px;
  background: #f2f4f4;
  bottom: 7%;

  @media (max-width: 370px) {
    bottom: 0;
    top: 5%;
  }
`;

const FifthCircle = styled(Circle)`
  width: 143px;
  height: 143px;
  background: #fafbfb;
  left: 12%;
  bottom: 2%;

  @media (max-width: 370px) {
    left: 22%;
    bottom: 0;
  }
`;

export default () => (
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
);
