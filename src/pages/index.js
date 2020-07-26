import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import logoImage from '../images/logo.png';
import iphoneMock from '../images/iphonemock.png';
import clockIcon from '../images/clock-icon.png';
import boxIcon from '../images/box-icon.png';

const TopBarWrapper = styled.div`
  width: 100%;
  height: 154px;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.nav`
  width: 96%;
  height: 32px;
  margin: 17px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
`;

const ListWrapper = styled.ul`
  width: 80%;
  height: 100%;
  list-style: none;
  display: flex;
`;

const ListElement = styled.li`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  color: white;
`;

const SignInButton = styled.button`
  width: 20%;
  height: 100%;
  background: white;
  border: none;
  border-radius: 4px;
  color: #304156;
  font-size: 15px;
  cursor: pointer;
`;

const HeaderWrapper = styled.header`
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

const FeatureHeader = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: white;
  width: 90%;
`;

const FeatureText = styled.p`
  color: white;
  font-size: 18px;
  width: 90%;
`;

const FeatureListBox = styled.div`
  width: 100%;
  height: 121px;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const FeatureListElement = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
`;

const FeatureListElementCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b87ee5;
`;

const RedCircle = styled(FeatureListElementCircle)`
  background: #eb597b;
`;

const FeatureListElementLabel = styled.p`
  color: white;
  font-size: 18px;
  margin-left: 10px;
`;

const FeatureButton = styled.button`
  width: 35%;
  height: 48px;
  background: white;
  border: none;
  border-radius: 4px;
  color: #304156;
  font-size: 15px;
  cursor: pointer;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Landing page" />
    <TopBarWrapper>
      <TopBar>
        <LogoBox>
          <img src={logoImage} alt="logo" />
        </LogoBox>
        <NavBox>
          <ListWrapper>
            <ListElement>
              <StyledLink to="#">First</StyledLink>
            </ListElement>
            <ListElement>
              <StyledLink to="#">Second</StyledLink>
            </ListElement>
            <ListElement>
              <StyledLink to="#">Third</StyledLink>
            </ListElement>
            <ListElement>
              <StyledLink to="#">Fourth</StyledLink>
            </ListElement>
            <ListElement>
              <StyledLink to="#">Firth</StyledLink>
            </ListElement>
          </ListWrapper>
          <SignInButton>Sign In</SignInButton>
        </NavBox>
      </TopBar>
    </TopBarWrapper>
    <HeaderWrapper>
      <HeaderBox>
        <FeatureBox>
          <FeatureHeader>Facts Why Inkjet Printing Is Very </FeatureHeader>
          <FeatureText>
            The moment you think of buying a Web Hosting Plan, you know one
            thing. So many choices, which one to choose?{' '}
          </FeatureText>
          <FeatureListBox>
            <FeatureListElement>
              <FeatureListElementCircle>
                <img src={clockIcon} alt="icon" />
              </FeatureListElementCircle>
              <FeatureListElementLabel>So many choices</FeatureListElementLabel>
            </FeatureListElement>
            <FeatureListElement>
              <RedCircle>
                <img src={boxIcon} alt="icon" />
              </RedCircle>
              <FeatureListElementLabel>
                Whether you would want
              </FeatureListElementLabel>
            </FeatureListElement>
          </FeatureListBox>
          <FeatureButton>Button Name</FeatureButton>
        </FeatureBox>
        <img src={iphoneMock} alt="iphone" />
      </HeaderBox>
    </HeaderWrapper>
  </Layout>
);

export default IndexPage;
