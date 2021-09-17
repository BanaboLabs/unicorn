import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderBlack from "./HeaderBlack";
import visualization1 from "../images/visualization1.svg";
import TheWrapper from "../images/Wrapper.svg";
import blackbackground from "../images/blackbackground.svg";
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
          <StyledButton>Try Sandbox</StyledButton>
        </StyledLink>
        <CenteredImgRelative src={blackbackground} alt="growth" />
        <CenteredImgAbsolute src={visualization1} alt="growth" />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background: url(${TheWrapper});
  background-size: 100% 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 80px;
  background: linear-gradient(90deg, #265de3, #af71ff);
  -webkit-background-clip: text;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  line-height: 100px;
  color: transparent;
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
  font-family: "ProximaNova-Semibold";
  font-size: 20px;
  text-align: center;
  line-height: 24px;
`;

const SubSubHead = styled.div`
  font-family: "ProximaNova-Regular";
  font-size: 16px;
  text-align: center;
  line-height: 24px;
`;

const SemiBold = styled.span`
  font-family: "ProximaNova-Semibold";
`;

const StyledButton = styled.button`
  font-family: "ProximaSoft-Bold";
  font-size: 19px;
  color: #ffffff;
  border: none;
  width: 180px;
  height: 50px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  background-color: #2194ff;
  margin: 0 auto;
  :hover {
    background-color: #5db1fe;
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
