import React from 'react';
import styled from 'styled-components';

import mailIcon from '../../../../images/mail-icon.png';

const Icon = styled.img`
  &:hover {
    filter: saturate(5);
  }
`;

const SubscribeWrapper = styled.div`
  width: 40%;
  height: 100%;

  @media (max-width: 520px) {
    width: 90%;
    height: 25%;
  }
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
    height: 60%;
  }
`;

const Title = styled.p`
  font-size: 13px;
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
    height: 55%;
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

export default () => (
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
);
