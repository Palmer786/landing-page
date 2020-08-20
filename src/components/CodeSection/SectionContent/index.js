import React from 'react';
import styled from 'styled-components';

import quoteIcon from '../../../images/quote-icon.png';
import iconBg from '../../../images/icon-bg.png';

const ContentBox = styled.div`
  width: 50%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    align-items: center;
  }

  @media (max-width: 520px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
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

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
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
  transition: background 0.15s;

  &:hover {
    background: #1d9fff;
    transition: background 0.15s;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export default () => (
  <ContentBox>
    <IconContainer>
      <img src={quoteIcon} alt="icon" />
    </IconContainer>
    <Title>Embed Code</Title>
    <Description>
      The moment you think of buying a Web Hosting Plan, you know one thing. So
      many choices, which one to choose?
    </Description>
    <StyledButton>Purchase</StyledButton>
  </ContentBox>
);
