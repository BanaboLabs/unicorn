import React from "react";
import styled from "styled-components";
import HeaderBlack from "../HeaderBlack";
import lightbulb from "../../../images/lightbulb.gif";
import { Link } from "gatsby";
import section1productprod from "../../../images/section1productprod.svg";
import background1 from "../../../images/backgroundprod.svg";
import background2 from "../../../images/backgroundprod2.svg";
import productsmall from "../../../images/productsmall.svg";
import logostrip from "../../../images/logostrip.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import HeaderDropDownBlack from "../HeaderDropDownBlack";

export default function Section1() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <Wrapper>
      {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
      <ContentWrapper>
        <VerticalWrapper11>
          <HorizontalWrapper1>
            <VerticalWrapper1>
              <HorizontalWrapper2>
                <LightBulb src={lightbulb} />
                <Title>Know the impact.</Title>
              </HorizontalWrapper2>
              <Title>For every channel.</Title>
              <LittleLittleSpacer />
              <SubTitle>
                Get precise influence scores on the growth channels that drive
                website conversions, with Banabo
              </SubTitle>
              <BigBigSpacer />
              <StyledLink to="/signup">
                <StyledButton>Sign Up</StyledButton>
              </StyledLink>
            </VerticalWrapper1>
            <Product src={section1productprod} />
          </HorizontalWrapper1>
          <ProductSmall src={productsmall} />
          <BigSpacer />
          <VStack>
            <SubHead>
              No matter your growth stack, Banabo can connect to any platform
            </SubHead>
            <LogoStrip src={logostrip} />
          </VStack>
        </VerticalWrapper11>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  background-image: url(${background1});

  @media (min-width: 1800px) {
    background-image: url(${background2});
  }

  @media (max-width: 900px) {
    background-image: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;

  @media (max-width: 1600px) {
    gap: 60px;
  }
`;

const HorizontalWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media (max-width: 900px) {
    gap: 0px;
  }
`;

const VerticalWrapper11 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  @media (max-width: 900px) {
    padding-top: 0px;
  }

  @media (max-height: 900px) {
    padding-top: 25px;
  }
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  @media (max-height: 900px) {
    padding-top: 20px;
  }
`;

const Title = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 70px;
  color: #252531;
  line-height: 85px;

  @media (max-width: 900px) {
    font-size: 35px;
    padding-left: 10px;
    line-height: 60px;
  }
`;

const BigBigSpacer = styled.div`
  padding-top: 35px;
  @media (max-width: 900px) {
    padding-top: 20px;
  }
`;

const LittleLittleSpacer = styled.div`
  padding-top: 35px;
  @media (max-width: 900px) {
    padding-top: 20px;
  }
`;

const BigSpacer = styled.div`
  padding-top: 85px;

  @media (max-height: 900px) {
    padding-top: 10px;
  }
`;

const SubTitle = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 24px;
  line-height: 29px;
  color: #737180;
  width: 600px;

  @media (max-width: 900px) {
    font-size: 18px;
    width: 350px;
    padding-left: 12px;
  }
`;

const SubHead = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  text-align: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LightBulb = styled.img`
  width: 70px;
  height: 70px;
`;

const Product = styled.img`
  @media (max-width: 900px) {
    display: none;
  }
`;

const LogoStrip = styled.img`
  @media (max-width: 900px) {
    display: none;
  }

  @media (max-height: 700px) {
    height: 80%;
    width: 80%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 900px) {
    padding-left: 12px;
  }
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 19px;
  color: #ffffff;
  border: none;
  width: 180px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 300px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  @media (max-width: 900px) {
    width: 100px;
    height: 32px;
    font-size: 13px;
  }

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductSmall = styled.img`
  display: none;

  @media (max-width: 900px) {
    display: inline;
    padding-top: 40px;
  }
`;
