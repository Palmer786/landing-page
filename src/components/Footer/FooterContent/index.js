import React from 'react';
import styled from 'styled-components';

import mailIcon from '../../../images/mail-icon.png';

const MainWrapper = styled.div`
  width: 70%;
  height: 67%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
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
`;

const Title = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #304156;
`;

const InputBox = styled.div`
  border: 2px solid #f0f1f2;
  border-radius: 4px;
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
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

const TableContainer = styled.table`
  width: 100%;
  height: 65%;
`;

const HeaderCell = styled.th`
  color: #304156;
  font-size: 11px;
  text-align: left;
`;

const TableCell = styled.td`
  color: #304156;
  font-size: 13px;
  text-align: left;
`;

export default () => (
  <MainWrapper>
    <ContentWrapper>
      <TableContainer>
        <thead>
          <tr>
            <HeaderCell>Company</HeaderCell>
            <HeaderCell>Company</HeaderCell>
            <HeaderCell>Product</HeaderCell>
            <HeaderCell>Product</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Blog</TableCell>
            <TableCell>Blog</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Price</TableCell>
          </tr>
          <tr>
            <TableCell>Privacy Policy</TableCell>
            <TableCell>Privacy Policy</TableCell>
            <TableCell>Features</TableCell>
            <TableCell>Features</TableCell>
          </tr>
          <tr>
            <TableCell>About</TableCell>
            <TableCell>About</TableCell>
            <TableCell>Review</TableCell>
            <TableCell>Review</TableCell>
          </tr>
          <tr>
            <TableCell>Terms & Cond.</TableCell>
            <TableCell>Terms & Cond.</TableCell>
            <TableCell>How It Works</TableCell>
          </tr>
        </tbody>
      </TableContainer>
    </ContentWrapper>
    <SubscribeWrapper>
      <SubscribeBox>
        <Title>Subscribe to newsletter</Title>
        <InputBox>
          <IconContainer>
            <img src={mailIcon} alt="icon" />
          </IconContainer>
          <InputContainer>
            <StyledInput type="text" placeholder="Email" />
          </InputContainer>
        </InputBox>
      </SubscribeBox>
    </SubscribeWrapper>
  </MainWrapper>
);
