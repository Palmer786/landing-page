import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'gatsby';

import logoImage from '../../images/logo.png';

const TopBarWrapper = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: #03c4c6;
  z-index: 4;

  @media (max-width: 1024px) {
    position: fixed;
  }
`;

const TopBar = styled.nav`
  width: 96%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #03c4c6;

  @media (max-width: 1024px) {
    width: 94%;
  }

  @media (max-width: 768px) {
    width: 88%;
  }
`;

const LogoBox = styled.div`
  width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-height: 18px;
  max-width: 130px;
`;

const NavBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    width: 32px;
    height: 28px;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const Line = styled.div`
  display: none;

  :nth-child(2) {
    transition: width 0.2s;
    ${({isMenuOpen}) =>
      !isMenuOpen
        ? css`
            width: 100%;
          `
        : css`
            width: 70%;
          `}
  }

  :nth-child(3) {
    transition: width 0.4s;
    ${({isMenuOpen}) =>
      !isMenuOpen
        ? css`
            width: 100%;
          `
        : css`
            width: 40%;
          `}
  }

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    height: 4px;
    background: white;
    border-radius: 5px;
  }
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
  transition: color 0.15s;

  &:hover {
    transition: color 0.15s;
    color: #eeeeee;
  }
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
  transition: background 0.15s;

  &:hover {
    transition: background 0.15s;
    background: #f5f5f5;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    width: 100%;
    height: 0;
    background: #03c4c6;
    z-index: 3;

    ${({isMenuOpen}) =>
      isMenuOpen &&
      css`
        height: 100vh;
      `}
  }
`;

const MobileNav = styled.div`
  width: 100%;
  height: 194px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 74px;
  margin-bottom: 15px;

  ${({isMenuOpen}) =>
    isMenuOpen
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;

const MobileNavElement = styled.div`
  width: 94%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 88%;
  }
`;

const MobileLink = styled(Link)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1.5px;
`;

const SignInWrapper = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({isMenuOpen}) =>
    isMenuOpen
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;

const SignInBox = styled.div`
  width: 94%;
  height: 100%;
  border-top: 1px solid rgba(20, 20, 20, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 88%;
  }
`;

const MobileButton = styled.button`
  width: 20%;
  height: 45%;
  background: white;
  border: none;
  border-radius: 4px;
  color: #304156;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s;

  @media (max-width: 768px) {
    width: 25%;
  }

  @media (max-width: 520px) {
    width: 35%;
  }

  @media (max-width: 320px) {
    width: 50%;
  }

  &:active {
    transition: background 0.15s;
    background: #f5f5f5;
  }
`;

export default () => {
  const [isMenuOpen, toggleMenuOpen] = React.useState(false);

  const handleMenuOpen = () => toggleMenuOpen(!isMenuOpen);

  const handleLinkOnClick = () => toggleMenuOpen(false);

  return (
    <>
      <TopBarWrapper>
        <TopBar>
          <LogoBox>
            <Logo src={logoImage} alt="logo" />
          </LogoBox>
          <NavBox>
            <ListWrapper>
              <ListElement>
                <StyledLink to="#production">First</StyledLink>
              </ListElement>
              <ListElement>
                <StyledLink to="#features">Second</StyledLink>
              </ListElement>
              <ListElement>
                <StyledLink to="#code">Third</StyledLink>
              </ListElement>
              <ListElement>
                <StyledLink to="#testimonials">Fourth</StyledLink>
              </ListElement>
              <ListElement>
                <StyledLink to="#client">Firth</StyledLink>
              </ListElement>
            </ListWrapper>
            <SignInButton>Sign In</SignInButton>
          </NavBox>
          <MobileMenuIcon onClick={() => handleMenuOpen()}>
            <Line />
            <Line isMenuOpen={isMenuOpen} />
            <Line isMenuOpen={isMenuOpen} />
          </MobileMenuIcon>
        </TopBar>
      </TopBarWrapper>
      <MobileMenu isMenuOpen={isMenuOpen}>
        <MobileNav isMenuOpen={isMenuOpen}>
          <MobileNavElement>
            <MobileLink to="#production" onClick={() => handleLinkOnClick()}>
              First
            </MobileLink>
          </MobileNavElement>
          <MobileNavElement>
            <MobileLink to="#features" onClick={() => handleLinkOnClick()}>
              Second
            </MobileLink>
          </MobileNavElement>
          <MobileNavElement>
            <MobileLink to="#code" onClick={() => handleLinkOnClick()}>
              Third
            </MobileLink>
          </MobileNavElement>
          <MobileNavElement>
            <MobileLink to="#testimonials" onClick={() => handleLinkOnClick()}>
              Fourth
            </MobileLink>
          </MobileNavElement>
          <MobileNavElement>
            <MobileLink to="#client" onClick={() => handleLinkOnClick()}>
              Firth
            </MobileLink>
          </MobileNavElement>
        </MobileNav>
        <SignInWrapper isMenuOpen={isMenuOpen}>
          <SignInBox>
            <MobileButton onClick={() => handleLinkOnClick()}>
              Sign In
            </MobileButton>
          </SignInBox>
        </SignInWrapper>
      </MobileMenu>
    </>
  );
};
