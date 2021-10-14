import React from "react";
import styled from "styled-components";
import HeaderBlack from "../../components/individual/HeaderBlack";
import HeaderDropDownBlack from "../../components/individual/HeaderDropDownBlack";
import useMediaQuery from "../../hooks/useMediaQuery";
import Boat from "../../images/boat.gif";
import uno from "../../images/uno.svg";
import dos from "../../images/dos.svg";
import shopify from "../../images/shopifyimage.svg";
import react from "../../images/reactimage.svg";
import squarespace from "../../images/squarespaceimage.svg";
import webflow from "../../images/webflowimage.svg";
import { Link } from "gatsby";

export default function DocsPage() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <ParentWrapper>
      <Wrapper>
        {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
        <ContentWrapper>
          <VStack1>
            <HStack1>
              <VStack2>
                <HStack2>
                  <TheBoat src={Boat} />
                  <Title>Documentation</Title>
                </HStack2>
                <SubTitle>A quick guide for Banabo</SubTitle>
                <Spacer />
              </VStack2>
              <Rectangle>
                <InsideVStack>
                  <SubTitle>The Basics</SubTitle>
                  <InsideHStack>
                    <img src={uno} />
                    <InsideText>
                      Add a clickable Banabo link to each channel to uniquely
                      identify visitors
                    </InsideText>
                  </InsideHStack>
                  <InsideHStack>
                    <img src={dos} />
                    <InsideText>
                      Add the code snippet to your website
                    </InsideText>
                  </InsideHStack>
                </InsideVStack>
              </Rectangle>
            </HStack1>
            <CardVStack>
              <CardHStack>
                <StyledLink to="/shopify">
                  <Adjustableimg src={shopify} />{" "}
                </StyledLink>{" "}
                <StyledLink to="/react">
                  <Adjustableimg src={react} />
                </StyledLink>
              </CardHStack>
              <CardHStack>
                <StyledLink to="/squarespace">
                  <Adjustableimg src={squarespace} />
                </StyledLink>
                <StyledLink to="/webflow">
                  <Adjustableimg src={webflow} />
                </StyledLink>
              </CardHStack>
            </CardVStack>
          </VStack1>
        </ContentWrapper>
      </Wrapper>
    </ParentWrapper>
  );
}

const ParentWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Spacer = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: inline;
    padding-top: 50px;
  }
`;

const Adjustableimg = styled.img`
  @media (max-width: 900px) {
    width: 80%;
    height: 80%;
  }
`;

const HStack1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 180px;
  padding-top: 100px;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 900px) {
    gap: 0px;
    padding-top: 0px;
    padding-left: 0px;
  }
`;

const VStack1 = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;

  @media (max-width: 900px) {
    gap: 40px;
  }
`;

const VStack2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

const TheBoat = styled.img`
  width: 70px;
  height: 70px;
`;

const Title = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 70px;
  color: #252531;
  line-height: 85px;

  @media (max-width: 900px) {
    font-size: 35px;
    padding-left: 10px;
    line-height: 60px;
  }
`;

const SubTitle = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 30px;
  color: #252531;
  line-height: 45px;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

const Rectangle = styled.div`
  width: 533px;
  height: 276.77px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 900px) {
    width: 72vw;
    height: 189px;
  }
`;

const InsideVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 10px;
  padding-bottom: 10px;
  align-items: left;
  @media (max-width: 900px) {
    gap: 14px;
  }
`;

const InsideHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: flex-start;
`;

const InsideText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 22px;
  max-width: 370px;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

const CardVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
  @media (max-width: 900px) {
    gap: 0px;
  }
`;

const CardHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  @media (max-width: 900px) {
    gap: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 900px) {
    gap: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
