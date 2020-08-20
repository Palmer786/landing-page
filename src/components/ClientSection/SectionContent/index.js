import React from 'react';
import styled from 'styled-components';

const ContentBox = styled.div`
  width: 40%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 75%;
    align-items: center;
    height: 45%;
    justify-content: space-around;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  color: #304156;
  font-size: 32px;
`;

const Description = styled.p`
  color: #304156;
  font-size: 18px;
  width: 80%;

  @media (max-width: 768px) {
    width: 70%;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  background: #0093ff;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  width: 25%;
  height: 48px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #1d9fff;
    transition: background 0.15s;
  }

  @media (max-width: 1440px) {
    width: 40%;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export default () => (
  <ContentBox>
    <Title>Our Clients</Title>
    <Description>
      Click on the link website-hosting-reviews-free and you would know why a
      lot of people
    </Description>
    <StyledButton>Button Name</StyledButton>
  </ContentBox>
);
