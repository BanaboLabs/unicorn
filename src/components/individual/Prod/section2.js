import React, { useState } from "react";
import styled from "styled-components";
import ToggleSwitch from "./toggleswitch";
import bar from "../../../images/bar.png";
import withbanabo from "../../../images/withbanaboprod.svg";
import withoutbanabo from "../../../images/withoutbanaboprod.svg";
import downarrow from "../../../images/downarrowprod.svg";

export default function Section2() {
  const [isParentData, setIsParentData] = useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <VerticalWrapper1>
          <VerticalWrapper2>
            <HorizontalWrapper1>
              <YellowRectangle>
                <HorizontalWrapper2>
                  <img src={bar} />
                  <BlackText>Map out what influences a purchase</BlackText>
                </HorizontalWrapper2>
              </YellowRectangle>
              <ToggleSwitch
                toChild={isParentData}
                sendToParent={setIsParentData}
              />
            </HorizontalWrapper1>
            {isParentData == true ? (
              <img src={withbanabo} />
            ) : (
              <img src={withoutbanabo} />
            )}
          </VerticalWrapper2>
          <Button>
            <span>
              <HorizontalWrapper3>
                <img src={downarrow} alt="contact us" /> SEE HOW IT WORKS
              </HorizontalWrapper3>
            </span>
          </Button>
        </VerticalWrapper1>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 130px;
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;

const VerticalWrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 70px;
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const HorizontalWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const HorizontalWrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const YellowRectangle = styled.div`
  height: 99px;
  width: 553px;
  background: #fcde34;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlackText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 26px;
  line-height: 32px;
  color: #252531;
`;

const Button = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 24px;
  color: #ffffff;
  border: none;
  height: 84px;
  width: 395px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  background: #47475e;
  border-radius: 300px;

  transition: 0.2s ease-in-out;

  @media (max-width: 700px) {
    display: none;
  }

  :hover {
    background-color: #000000;
  }
`;
