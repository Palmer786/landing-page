import React from 'react';
import styled from 'styled-components';

import logo from '../../../images/footer-logo.png';
import twitterLogo from '../../../images/twitter-icon.png';
import instagramLogo from '../../../images/instagram-icon.png';
import facebookLogo from '../../../images/facebook-icon.png';

const MainWrapper = styled.div`
  width: 100%;
  height: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #f0f1f2;
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 15%;
  }

  @media (max-width: 768px) {
    width: 20%;
  }
`;

const SocialMediaLogo = styled.img`
  &:hover {
    filter: saturate(5);
  }
`;

export default () => (
  <MainWrapper>
    <ContentWrapper>
      <img src={logo} alt="logo" />
      <LogoBox>
        <a href="https://twitter.com/" target="_blank">
          <SocialMediaLogo src={twitterLogo} alt="twitter" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <SocialMediaLogo src={facebookLogo} alt="facebook" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <SocialMediaLogo src={instagramLogo} alt="instagram" />
        </a>
      </LogoBox>
    </ContentWrapper>
  </MainWrapper>
);
