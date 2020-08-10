import React from 'react';
import styled from 'styled-components';

import mailIcon from '../../../images/mail-icon.png';

const MainWrapper = styled.div`
  width: 70%;
  height: 67%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 520px) {
    height: 80%;
    width: 90%;
  }
`;

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const GridElement = styled.table`
  width: 100%;
  height: 80%;
`;

const SubscribeWrapper = styled.div`
  width: 40%;
  height: 100%;
`;

const SubscribeBox = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    align-items: center;
  }

  @media (max-width: 520px) {
    height: 15%;
  }
`;

const Title = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #304156;

  @media (max-width: 1024px) {
    align-self: center;
  }
`;

const InputBox = styled.div`
  border: 2px solid #f0f1f2;
  border-radius: 4px;
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 520px) {
    height: 35%;
  }
`;

const IconContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 520px) {
    justify-content: center;
    width: 25%;
  }
`;

const InputContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  color: #828d99;
  font-size: 15px;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
`;

const HeaderCell = styled.th`
  color: #304156;
  font-size: 11px;
  text-align: left;
`;

const TableCell = styled.td`
  font-size: 13px;
  text-align: left;
`;

const StyledLink = styled.a`
  color: #304156;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #004dc6;
  }
`;

const Icon = styled.img`
  &:hover {
    filter: saturate(5);
  }
`;

export default () => (
  <MainWrapper>
    <ContentWrapper>
      <GridElement>
        <thead>
          <tr>
            <HeaderCell>Company</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>
              <StyledLink href="#">Blog</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Privacy Policy</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">About</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Terms & Cond. </StyledLink>
            </TableCell>
          </tr>
        </tbody>
      </GridElement>
      <GridElement>
        <thead>
          <tr>
            <HeaderCell>Company</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>
              <StyledLink href="#">Blog</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Privacy Policy</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">About</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Terms & Cond. </StyledLink>
            </TableCell>
          </tr>
        </tbody>
      </GridElement>
      <GridElement>
        <thead>
          <tr>
            <HeaderCell>Product</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>
              <StyledLink href="#">Price</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Features</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Review</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">How It Works </StyledLink>
            </TableCell>
          </tr>
        </tbody>
      </GridElement>
      <GridElement>
        <thead>
          <tr>
            <HeaderCell>Product</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>
              <StyledLink href="#">Price</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Features</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">Review</StyledLink>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <StyledLink href="#">How It Works </StyledLink>
            </TableCell>
          </tr>
        </tbody>
      </GridElement>
    </ContentWrapper>
    <SubscribeWrapper>
      <SubscribeBox>
        <Title>Subscribe to newsletter</Title>
        <InputBox>
          <IconContainer>
            <label htmlFor="email">
              <Icon src={mailIcon} alt="icon" />
            </label>
          </IconContainer>
          <InputContainer>
            <StyledInput type="text" placeholder="Email" id="email" />
          </InputContainer>
        </InputBox>
      </SubscribeBox>
    </SubscribeWrapper>
  </MainWrapper>
);
