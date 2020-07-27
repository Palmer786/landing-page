import React from 'react';
import styled from 'styled-components';

import iconBg from '../../images/icon-bg.png';
import quoteIcon from '../../images/quote-icon.png';
import codeImg from '../../images/code-image.png';

const MainWrapper = styled.div`
  width: 100%;
  height: 549px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.section`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  width: 50%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 91px;
  height: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7) !important;
  background-image: url(${iconBg});
  background-repeat: no-repeat;
  background-blend-mode: color;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #304156;
`;

const Description = styled.p`
  color: #304156;
  font-size: 18px;
  width: 60%;
`;

const StyledButton = styled.button`
  height: 48px;
  width: 25%;
  background: #0093ff;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default () => (
  <MainWrapper>
    <ContentWrapper>
      <ContentBox>
        <IconContainer>
          <img src={quoteIcon} alt="icon" />
        </IconContainer>
        <Title>Embed Code</Title>
        <Description>
          The moment you think of buying a Web Hosting Plan, you know one thing.
          So many choices, which one to choose?
        </Description>
        <StyledButton>Purchase</StyledButton>
      </ContentBox>
      <ImageBox>
        <img src={codeImg} alt="code" />
      </ImageBox>
    </ContentWrapper>
  </MainWrapper>
);
