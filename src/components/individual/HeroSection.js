import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderBlack from "./HeaderBlack";
import HeaderDropDownBlack from "./HeaderDropDownBlack";
import product from "../../images/product.svg";
import { Link } from "gatsby";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function HeroSection() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <Wrapper>
      {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
      <ContentWrapper>
        <Title>
          Growth. <br /> Made Easy
        </Title>
        {isDesktop ? (
          <SubHead>
            Understand which of your growth channels turn <br /> website
            visitors into conversions
          </SubHead>
        ) : (
          <SubHead>
            Understand which of your growth channels turn <br /> website
            visitors into conversions
          </SubHead>
        )}
        <SubSubHead>
          Sign up to reserve your spot in our <SemiBold>Beta Release</SemiBold>
          <br />
          We’ll let you in as soon as we can.
        </SubSubHead>
        <StyledLink to="/signup">
          <StyledButton>Try Banabo</StyledButton>
        </StyledLink>
        <CenteredImg src={product} alt="channel growth" />
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
  display: -webkit-flexbox; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-flexbox; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5vh;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 80px;
  background: linear-gradient(90deg, #265de3, #af71ff);
  -webkit-background-clip: text;
  font-family: "ProximaNovaExtraBold";
  font-style: normal;
  text-align: center;
  line-height: 100px;
  color: transparent;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern";

  @media (max-width: 700px) {
    line-height: 70px;
    font-size: 55px;
  }

  @media (max-width: 780px) {
    width: 80%;
  }
  @media (max-width: 1380px) {
    display: 70%;
  }
  @media (max-width: 2100px) {
    display: 80%;
  }
`;

const SubHead = styled.h2`
  font-family: "ProximaNovaSemiBold";
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern";
  @media (max-width: 700px) {
    width: 95%;
    font-size: 17px;
  }
`;

const SubSubHead = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern";
  @media (max-width: 700px) {
    width: 95%;
    font-size: 15px;
  }
`;

const SemiBold = styled.span`
  font-family: "ProximaNovaSemiBold";
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern";
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
  border-radius: 6px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CenteredImg = styled.img`
  text-align: center;
  top: 700px;
  margin: 0 auto;
  max-width: 100%;
  @media (min-width: 2100px) {
    min-width: 55%;
  }
  @media (max-width: 780px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;
