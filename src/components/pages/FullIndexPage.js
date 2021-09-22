import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroSection from "../individual/HeroSection";
import background from "../../images/background.svg";
import ToggleSection from "../individual/ToggleSection";
import BottomSection from "../individual/BottomSection";
import MiddleSection from "../individual/MiddleSection";

export default function FullIndexPage() {
  return (
    <ParentWrapper>
      <Wrapper>
        <ContentWrapper>
          <HeroSection />
          <Spacer />
          <MiddleSection />
          <Spacer3 />
          <ToggleSection />
          <Spacer3 />
          <BottomSection />
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
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url("${background}");
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px;
`;

const FeatureTitle = styled.div`
  font-family: "ProximaNovaExtraBold";
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
`;

const Spacer = styled.div`
  padding-bottom: 300px;
  background-color: #21212b;
`;

const Spacer2 = styled.div`
  padding-bottom: 40px;
  background-color: #21212b;
  @media (max-width: 840px) {
    padding-bottom: 10px;
  }
`;

const Spacer3 = styled.div`
  padding-bottom: 80px;
  background-color: #21212b;
  @media (max-width: 840px) {
    padding-bottom: 10px;
  }
`;

const FeatureSubhead = styled.div`
  font-family: ProximaNovaRegular;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
`;

const CenteredImgLarge = styled.img`
  text-align: center;
  @media (max-width: 1280px) {
    display: none;
  }
  @media (min-width: 2100px) {
    margin-left: 40px;
  }
`;

const CenteredImgSmall = styled.img`
  text-align: center;
  display: none;
  @media (max-width: 1280px) {
    display: block;
  }
  @media (max-width: 780px) {
    width: 600px;
  }
`;

/*

<ParentWrapper>
      <HeroSection />
      <Spacer />
      <Wrapper>
        <ContentWrapper>
          <CenteredImgLarge src={GroupIllustration} alt="growth" />
          <CenteredImgSmall src={GroupIllustrationsSmall} alt="growth" />
          <Spacer3 />
          {showSandbox ? (
            <CenteredImgLarge
              src={WithSandbox}
              alt="growth"
              onClick={() => {
                setShowSandbox(!showSandbox);
              }}
            />
          ) : (
            <CenteredImgLarge
              src={WithoutSandbox}
              alt="growth"
              onClick={() => {
                setShowSandbox(!showSandbox);
              }}
            />
          )}
          <Spacer2 />
          <BottomPortion />
        </ContentWrapper>
      </Wrapper>
    </ParentWrapper>

const ParentWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px;
`;

const FeatureTitle = styled.div`
  font-family: "ProximaNovaExtraBold";
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
`;

const Spacer = styled.div`
  padding-bottom: 100px;
  background-color: #21212b;
`;

const Spacer2 = styled.div`
  padding-bottom: 40px;
  background-color: #21212b;
  @media (max-width: 840px) {
    padding-bottom: 10px;
  }
`;

const Spacer3 = styled.div`
  padding-bottom: 80px;
  background-color: #21212b;
  @media (max-width: 840px) {
    padding-bottom: 10px;
  }
`;

const FeatureSubhead = styled.div`
  font-family: ProximaNovaRegular;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
`;

const CenteredImgLarge = styled.img`
  text-align: center;
  @media (max-width: 1280px) {
    display: none;
  }
  @media (min-width: 2100px) {
    margin-left: 40px;
  }
`;

const CenteredImgSmall = styled.img`
  text-align: center;
  display: none;
  @media (max-width: 1280px) {
    display: block;
  }
  @media (max-width: 780px) {
    width: 600px;
  }
`; */
