import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderBlack from "./HeaderBlack";
import product from "../../images/product.svg";
import { Link } from "gatsby";

export default function HeroSection() {
  return (
    <Wrapper>
      <HeaderBlack />
      <ContentWrapper>
        <Title>
          Growth. <br /> Made Easy
        </Title>
        <SubHead>
          Map the source of every visitor interaction on your <br /> website all
          the way through conversion
        </SubHead>
        <SubSubHead>
          Sign up to reserve your spot in our <SemiBold>Beta Release</SemiBold>
          <br />
          We’ll let you in as soon as we can.
        </SubSubHead>
        <StyledLink to="/signup">
          <StyledButton>Try Banabo</StyledButton>
        </StyledLink>
        <img src={product} alt="growth" />
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

const SubHead = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern";
`;

const SubSubHead = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  text-rendering: optimizeLegibility;
  font-feature-settings: "kern";
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
    background: linear-gradient(90deg, #0848e5, #8323fe);
  }
`;

const CenteredImgRelative = styled.img`
  text-align: center;
  padding-top: 280px;
  margin: 0 auto;
  min-width: 100%;
  position: relative;
`;

const CenteredImgAbsolute = styled.img`
  text-align: center;
  top: 700px;
  margin: 0 auto;
  max-width: 100%;
  position: absolute;
  @media (min-width: 2100px) {
    min-width: 55%;
  }
  @media (max-width: 780px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

/* const CenteredImgRelative = styled.img`
  text-align: center;
  padding-top: 280px;
  margin: 0 auto;
  min-width: 100%;
  position: relative;
`;

const CenteredImgAbsolute = styled.img`
  text-align: center;
  top: 700px;
  margin: 0 auto;
  max-width: 100%;
  position: absolute;
  @media (min-width: 2100px) {
    min-width: 55%;
  }
  @media (max-width: 780px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`; */
