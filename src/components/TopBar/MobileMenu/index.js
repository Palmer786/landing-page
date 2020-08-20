import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'gatsby';

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

export default ({isMenuOpen, toggleMenuOpen}) => {
  const handleLinkOnClick = () => toggleMenuOpen(false);

  return (
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
  );
};
