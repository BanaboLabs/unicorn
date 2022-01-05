import React, { useState, useEffect } from "react";
import styled from "styled-components";
import v2whitearrow from "../../../images/v2whitearrow.svg";
import v2graydownarrow from "../../../images/v2graydownarrow.svg";
import v2facebooklogo from "../../../images/v2facebooklogo.svg";
import v2googlelogo from "../../../images/v2googlelogo.svg";
import v2linkedinlogo from "../../../images/v2linkedinlogo.svg";
import v2dollarlogo from "../../../images/v2dollarlogo.svg";
import v2hoverbackground from "../../../images/v2hoverbackground.svg";

export default function Illustration() {
  const [model, setModel] = useState("ML Model");
  const [dropdown, setDropdown] = useState(false);
  const [slotA, setSlotA] = useState("$13");
  const [slotB, setSlotB] = useState("$20");
  const [slotC, setSlotC] = useState("$16");

  useEffect(() => {
    if (model === "ML Model") {
      setSlotA("$13");
      setSlotB("$20");
      setSlotC("$16");
    }
    if (model === "First Touch") {
      setSlotA("$49");
      setSlotB("$0");
      setSlotC("$0");
    }
    if (model === "Last Touch") {
      setSlotA("$0");
      setSlotB("$0");
      setSlotC("$49");
    }
    if (model === "U Shape") {
      setSlotA("$20");
      setSlotB("$9");
      setSlotC("$20");
    }
    if (model === "Linear") {
      setSlotA("$16.3");
      setSlotB("$16.3");
      setSlotC("$16.3");
    }
  }, [model]);

  return (
    <ParentVStack>
      <TopHStack>
        <TopLeftRectangle>
          <InsideWhiteText>Visitor 1342</InsideWhiteText>
        </TopLeftRectangle>
        <TopRightRectangle onClick={() => setDropdown(!dropdown)}>
          <InsideHStack>
            <InsideWhiteText>{model}</InsideWhiteText>
            <WhiteArrow isDropdown={dropdown} src={v2whitearrow} />
          </InsideHStack>
        </TopRightRectangle>
      </TopHStack>
      {dropdown ? (
        <GrandpaHStack>
          <ItemParentVStack3>
            <ItemParentHStack>
              <ItemSubParentHStack>
                <ItemRectangle>
                  <img src={v2facebooklogo} />
                </ItemRectangle>
                <ItemTextVStack>
                  <ItemTrafficSource>Facebook Ad</ItemTrafficSource>
                  <ItemTimestamp>June 3rd 2:58pm</ItemTimestamp>
                </ItemTextVStack>
              </ItemSubParentHStack>
            </ItemParentHStack>
            <GrayDownArrow2 src={v2graydownarrow} />
            <ItemParentHStack>
              <ItemSubParentHStack>
                <ItemRectangle>
                  <img src={v2googlelogo} />
                </ItemRectangle>
                <ItemTextVStack>
                  <ItemTrafficSource>Google SEO</ItemTrafficSource>
                  <ItemTimestamp>June 4th 5:46pm</ItemTimestamp>
                </ItemTextVStack>
              </ItemSubParentHStack>
            </ItemParentHStack>
            <GrayDownArrow2 src={v2graydownarrow} />
            <ItemParentHStack2>
              <ItemSubParentHStack>
                <ItemRectangle>
                  <img src={v2linkedinlogo} />
                </ItemRectangle>
                <ItemTextVStack>
                  <ItemTrafficSource>LinkedIn Ad</ItemTrafficSource>
                  <ItemTimestamp>June 7th 1:12pm</ItemTimestamp>
                </ItemTextVStack>
              </ItemSubParentHStack>
            </ItemParentHStack2>
            <GrayDownArrow2 src={v2graydownarrow} />
            <ItemParentHStack>
              <ItemSubParentHStack>
                <ItemRectangle>
                  <img src={v2dollarlogo} />
                </ItemRectangle>
                <ItemTextVStack>
                  <ItemTrafficSource>Website Purchase</ItemTrafficSource>
                  <ItemTimestamp>June 7th 1:16pm</ItemTimestamp>
                </ItemTextVStack>
              </ItemSubParentHStack>
            </ItemParentHStack>
          </ItemParentVStack3>
          <BigGrayBox isDropdown={dropdown}>
            <InsideBigGrayBoxVStack>
              <InsideBigGrayBoxTextWrapper>
                <InsideBigGrayBoxText1
                  isModel={model}
                  onClick={() => {
                    setModel("ML Model");
                    setDropdown(!dropdown);
                  }}
                >
                  ML
                </InsideBigGrayBoxText1>
              </InsideBigGrayBoxTextWrapper>
              <InsideBigGrayBoxTextWrapper>
                <InsideBigGrayBoxText2
                  isModel={model}
                  onClick={() => {
                    setModel("First Touch");
                    setDropdown(!dropdown);
                  }}
                >
                  First Touch
                </InsideBigGrayBoxText2>
              </InsideBigGrayBoxTextWrapper>
              <InsideBigGrayBoxTextWrapper>
                <InsideBigGrayBoxText3
                  isModel={model}
                  onClick={() => {
                    setModel("Last Touch");
                    setDropdown(!dropdown);
                  }}
                >
                  Last Touch
                </InsideBigGrayBoxText3>
              </InsideBigGrayBoxTextWrapper>
              <InsideBigGrayBoxTextWrapper>
                <InsideBigGrayBoxText4
                  isModel={model}
                  onClick={() => {
                    setModel("U Shape");
                    setDropdown(!dropdown);
                  }}
                >
                  U Shape
                </InsideBigGrayBoxText4>
              </InsideBigGrayBoxTextWrapper>
              <InsideBigGrayBoxTextWrapper>
                <InsideBigGrayBoxText5
                  isModel={model}
                  onClick={() => {
                    setModel("Linear");
                    setDropdown(!dropdown);
                  }}
                >
                  Linear
                </InsideBigGrayBoxText5>
              </InsideBigGrayBoxTextWrapper>
            </InsideBigGrayBoxVStack>
          </BigGrayBox>
        </GrandpaHStack>
      ) : (
        <ItemParentVStack3>
          <ItemParentHStack>
            <ItemSubParentHStack>
              <ItemRectangle>
                <img src={v2facebooklogo} />
              </ItemRectangle>
              <ItemTextVStack>
                <ItemTrafficSource>Facebook Ad</ItemTrafficSource>
                <ItemTimestamp>June 3rd 2:58pm</ItemTimestamp>
              </ItemTextVStack>
            </ItemSubParentHStack>
            <ItemRectangle2 isDropdown={dropdown}>
              <ItemInsideRectangleWhiteText>
                {slotA}
              </ItemInsideRectangleWhiteText>
            </ItemRectangle2>
          </ItemParentHStack>
          <GrayDownArrow src={v2graydownarrow} />
          <ItemParentHStack>
            <ItemSubParentHStack>
              <ItemRectangle>
                <img src={v2googlelogo} />
              </ItemRectangle>
              <ItemTextVStack>
                <ItemTrafficSource>Google SEO</ItemTrafficSource>
                <ItemTimestamp>June 4th 5:46pm</ItemTimestamp>
              </ItemTextVStack>
            </ItemSubParentHStack>
            <ItemRectangle2 isDropdown={dropdown}>
              <ItemInsideRectangleWhiteText>
                {slotB}
              </ItemInsideRectangleWhiteText>
            </ItemRectangle2>
          </ItemParentHStack>
          <GrayDownArrow src={v2graydownarrow} />
          <ItemParentHStack2>
            <ItemSubParentHStack>
              <ItemRectangle>
                <img src={v2linkedinlogo} />
              </ItemRectangle>
              <ItemTextVStack>
                <ItemTrafficSource>LinkedIn Ad</ItemTrafficSource>
                <ItemTimestamp>June 7th 1:12pm</ItemTimestamp>
              </ItemTextVStack>
            </ItemSubParentHStack>
            <ItemRectangle2 isDropdown={dropdown}>
              <ItemInsideRectangleWhiteText>
                {slotC}
              </ItemInsideRectangleWhiteText>
            </ItemRectangle2>
          </ItemParentHStack2>
          <GrayDownArrow src={v2graydownarrow} />
          <ItemParentHStack>
            <ItemSubParentHStack>
              <ItemRectangle>
                <img src={v2dollarlogo} />
              </ItemRectangle>
              <ItemTextVStack>
                <ItemTrafficSource>Website Purchase</ItemTrafficSource>
                <ItemTimestamp>June 7th 1:16pm</ItemTimestamp>
              </ItemTextVStack>
            </ItemSubParentHStack>
          </ItemParentHStack>
        </ItemParentVStack3>
      )}
    </ParentVStack>
  );
}

const ItemParentVStack3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const GrandpaHStack = styled.div`
  display: flex;
  flex-direction: row;
`;

const ParentVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-bottom: 5px;
`;

const InsideHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const WhiteArrow = styled.img`
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.isDropdown ? "rotate(180deg)" : "rotate(0deg)"};
`;

const TopLeftRectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 219px;
  height: 54px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 6px;
`;

const TopRightRectangle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 151px;
  height: 54px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 6px;
  :hover {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const InsideWhiteText = styled.div`
  font-family: "ProximaNovaExtraBold";
  font-size: 20px;
  color: #ffffff;
`;

const ItemParentHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 90px;
`;

const ItemParentHStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const ItemSubParentHStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

const ItemRectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 74px;
  height: 71px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border-radius: 6px;
`;

const ItemRectangle2 = styled.div`
  display: flex;
  opacity: ${(props) => (props.isDropdown ? "0%" : "100%")};
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 74px;
  height: 71px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border-radius: 6px;
  margin-left: 14px;
`;

const ItemTextVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemTrafficSource = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 20.3px;
  color: #ffffff;
`;

const ItemTimestamp = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 18px;
  color: #ffffff;
`;

const ItemInsideRectangleWhiteText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 22px;
  color: #ffffff;
`;

const GrayDownArrow = styled.img`
  width: 13%;
  height: 13%;
  padding-left: 22px;
`;

const GrayDownArrow2 = styled.img`
  width: 20.7%;
  height: 20.7%;
  padding-left: 22px;
`;

const BigGrayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isDropdown ? "100%" : "0%")};
  width: 149px;
  height: 243px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border-radius: 6px;
`;

const InsideBigGrayBoxVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InsideBigGrayBoxTextWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 136px;
  height: 36px;
  background: none;
  border-radius: 4px;
  :hover {
    background: #413b65;
  }
`;

const InsideBigGrayBoxText1 = styled.div`
  font-family: ${(props) =>
    props.isModel == "ML Model"
      ? "ProximaNovaExtraBold"
      : "ProximaNovaSemiBold"};
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

const InsideBigGrayBoxText2 = styled.div`
  font-family: ${(props) =>
    props.isModel == "First Touch"
      ? "ProximaNovaExtraBold"
      : "ProximaNovaSemiBold"};
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;
const InsideBigGrayBoxText3 = styled.div`
  font-family: ${(props) =>
    props.isModel == "Last Touch"
      ? "ProximaNovaExtraBold"
      : "ProximaNovaSemiBold"};
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;
const InsideBigGrayBoxText4 = styled.div`
  font-family: ${(props) =>
    props.isModel == "U Shape"
      ? "ProximaNovaExtraBold"
      : "ProximaNovaSemiBold"};
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;
const InsideBigGrayBoxText5 = styled.div`
  font-family: ${(props) =>
    props.isModel == "Linear" ? "ProximaNovaExtraBold" : "ProximaNovaSemiBold"};
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;
