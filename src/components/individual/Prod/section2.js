import React, { useState } from "react";
import styled from "styled-components";
import ToggleSwitch from "./toggleswitch";
import bar from "../../../images/bar.png";
import withbanabo from "../../../images/withbanabo.svg";
import withoutbanabo from "../../../images/withoutbanabo.svg";
import withbanabosmall from "../../../images/withbanabosmall.svg";
import withoutbanabosmall from "../../../images/withoutbanabosmall.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import background2 from "../../../images/background2.png";

export default function Section2() {
  const [isParentData, setIsParentData] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Wrapper>
      <ContentWrapper>
        <VerticalWrapper1>
          <VerticalWrapper2>
            <HorizontalWrapper>
              <BigBlackText>
                Uncover every channel that contributes to a purchase
              </BigBlackText>
              {isDesktop ? (
                <ToggleSwitch
                  toChild={isParentData}
                  sendToParent={setIsParentData}
                />
              ) : null}{" "}
            </HorizontalWrapper>
            {isParentData == true && isDesktop == true ? (
              <EditIMG src={withbanabo} />
            ) : isParentData == false && isDesktop == true ? (
              <EditIMG src={withoutbanabo} />
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
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  @media (max-width: 1200px) {
    min-height: 60vh;
  }
`;

const HorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1500px) {
    gap: 60px;
  }
`;

const EditIMG = styled.img`
  width: 180%;
  height: 180%;

  @media (max-width: 1500px) {
    width: 160%;
    height: 160%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 1200px) {
    padding: 0px;
    padding-bottom: 60px;
  }
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 1200px) {
    gap: 40px;
  }
`;

const VerticalWrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
    width: 300px;
  }
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

  @media (max-width: 1200px) {
    height: 56px;
    width: 323px;
    border-radius: 20px;
  }
`;

const BigBlackText = styled.div`
  font-size: 44px;
  line-height: 54px;
  text-align: center;
  width: 600px;
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  @media (max-width: 1500px) {
    text-align: center;
  }

  @media (max-width: 1200px) {
    padding-top: 40px;
    text-align: center;
    font-size: 22px;
    width: 70vw;
    line-height: 27px;
  }
`;

const BlackText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 26px;

  color: #252531;

  @media (max-width: 1200px) {
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
