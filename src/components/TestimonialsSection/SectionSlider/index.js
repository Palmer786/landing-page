import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import arrowLeft from '../../../images/arrow_left.png';
import firstPerson from '../../../images/person-1.jpg';
import secondPerson from '../../../images/person-2.jpg';
import thirdPerson from '../../../images/person-3.jpg';
import arrowRight from '../../../images/arrow_right.png';

const SliderWrapper = styled.div`
  width: 70%;
  height: 242px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 520px) {
    width: 95%;
  }
`;

const SliderButtonLeft = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #fafbfb;

  @media (max-width: 520px) {
    width: 10%;
  }
`;

const SliderButtonRight = styled(SliderButtonLeft)`
  justify-content: flex-end;
`;

const WhiteCircle = styled.div`
  height: 48px;
  width: 48px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: whitesmoke;
  }
`;

const SliderContent = styled.div`
  width: 90%;
  height: 242px;
  background: white;
  display: flex;
  position: relative;

  @media (max-width: 520px) {
    width: 80%;
  }
`;

const SliderElement = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  background: white;
  z-index: 1;
  transition: all 0.2s;
  box-shadow: 0 0 5px 0.1px rgba(225, 225, 225, 0.8);
  cursor: pointer;

  ${({currentElement, sliderId}) =>
    currentElement === sliderId &&
    css`
      z-index: 3;
      transform: scale(1.1);
      box-shadow: 0 0 5px 0.1px #666;
      cursor: default;

      @media (max-width: 520px) {
        transform: scale(1);
      }
    `};

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const FirstSliderElement = styled(SliderElement)``;

const SecondSliderElement = styled(SliderElement)`
  margin-left: 27.5%;
  z-index: 2;

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

const ThirdSliderElement = styled(SliderElement)`
  margin-left: 54.5%;

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #333;
`;

const PersonImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-position: center;
`;

const Name = styled.h4`
  text-align: center;
  color: #304156;
  font-size: 15px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Work = styled.p`
  text-align: center;
  color: #828d99;
  font-size: 15px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Description = styled.p`
  text-align: center;
  color: #304156;
  font-size: 14px;
  height: 80px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

export default () => {
  const [currentElement, setCurrentElement] = useState(2);

  const selectNextElement = () => {
    if (currentElement === 3) return;
    setCurrentElement((el) => el + 1);
  };

  const selectPrevElement = () => {
    if (currentElement === 1) return;
    setCurrentElement((el) => el - 1);
  };

  const setCurrentElementOnClick = (id) => setCurrentElement(id);

  return (
    <SliderWrapper>
      <SliderButtonLeft>
        <WhiteCircle onClick={() => selectPrevElement()}>
          <img src={arrowLeft} alt="left" />
        </WhiteCircle>
      </SliderButtonLeft>
      <SliderContent>
        <FirstSliderElement
          currentElement={currentElement}
          sliderId={1}
          onClick={() => setCurrentElementOnClick(1)}
        >
          <Avatar>
            <PersonImage src={firstPerson} alt="avatar" />
          </Avatar>
          <Name>Richard Riley</Name>
          <Work>Apple</Work>
          <Description>
            Do you want to download free song for ipod? 👍 If so, reading this
            article could save you from getting in to trouble!
          </Description>
        </FirstSliderElement>
        <SecondSliderElement
          currentElement={currentElement}
          sliderId={2}
          onClick={() => setCurrentElementOnClick(2)}
        >
          <Avatar>
            <PersonImage src={secondPerson} alt="avatar" />
          </Avatar>
          <Name>Brandon Griffith</Name>
          <Work>Apple</Work>
          <Description>
            Do you want to download free song for ipod? 👍 If so, reading this
            article could save you from getting in to trouble!
          </Description>
        </SecondSliderElement>
        <ThirdSliderElement
          currentElement={currentElement}
          sliderId={3}
          onClick={() => setCurrentElementOnClick(3)}
        >
          <Avatar>
            <PersonImage src={thirdPerson} alt="avatar" />
          </Avatar>
          <Name>Max Clayton</Name>
          <Work>Apple</Work>
          <Description>Cheap Romantic Vacations</Description>
        </ThirdSliderElement>
      </SliderContent>
      <SliderButtonRight>
        <WhiteCircle onClick={() => selectNextElement()}>
          <img src={arrowRight} alt="right" />
        </WhiteCircle>
      </SliderButtonRight>
    </SliderWrapper>
  );
};
