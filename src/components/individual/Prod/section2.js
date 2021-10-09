import React, { useState } from "react";
import styled from "styled-components";
import ToggleSwitch from "./toggleswitch";
import bar from "../../../images/bar.png";
import withbanabo from "../../../images/withbanaboprod.svg";
import withoutbanabo from "../../../images/withoutbanaboprod.svg";
import downarrow from "../../../images/downarrowprod.svg";
import withbanabosmall from "../../../images/withbanabosmall.svg";
import withoutbanabosmall from "../../../images/withoutbanabosmall.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Section2() {
  const [isParentData, setIsParentData] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Wrapper>
      <ContentWrapper>
        <VerticalWrapper1>
          <VerticalWrapper2>
            <HorizontalWrapper1>
              <YellowRectangle>
                <HorizontalWrapper2>
                  <AlterIMG src={bar} />
                  <BlackText>Map out what influences a purchase</BlackText>
                </HorizontalWrapper2>
              </YellowRectangle>
              {isDesktop ? (
                <ToggleSwitch
                  toChild={isParentData}
                  sendToParent={setIsParentData}
                />
              ) : null}
            </HorizontalWrapper1>
            {isParentData == true && isDesktop == true ? (
              <img src={withbanabo} />
            ) : isParentData == false && isDesktop == true ? (
              <img src={withoutbanabo} />
            ) : isParentData == true && isDesktop == false ? (
              <img src={withbanabosmall} />
            ) : (
              <img src={withoutbanabosmall} />
            )}
          </VerticalWrapper2>
          {isDesktop ? null : (
            <ToggleSwitch
              toChild={isParentData}
              sendToParent={setIsParentData}
            />
          )}
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
  @media (max-width: 900px) {
    padding: 0px;
    padding-bottom: 60px;
  }
`;

const AlterIMG = styled.img`
  @media (max-width: 900px) {
    width: 25px;
    height: 25px;
  }
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  @media (max-width: 900px) {
    gap: 40px;
  }
`;

const VerticalWrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  @media (max-width: 900px) {
    gap: 40px;
  }
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const HorizontalWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 300px;
  }
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

  @media (max-width: 900px) {
    height: 56px;
    width: 323px;
    border-radius: 20px;
  }
`;

const BlackText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 26px;

  color: #252531;

  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 10px;
  }
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
