import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import logoImage from '../../images/logo.png';

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

export default () => (
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
);
