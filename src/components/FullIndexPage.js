import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import BottomPortion from "./BottomPortion";
import GroupIllustrationsSmall from "../images/groupillustrationssmall.svg";
import WithSandbox from "../images/withsandbox.svg";
import WithoutSandbox from "../images/withoutsandbox.svg";
import GroupIllustration from "../images/groupillustrations.svg";

export default function FullIndexPage() {
  const [showSandbox, setShowSandbox] = useState(true);
  return (
    <ParentWrapper>
      <HeroSection />
      <Spacer />
      <Wrapper>
        <ContentWrapper>
          <CenteredImgLarge src={GroupIllustration} />
          <CenteredImgSmall src={GroupIllustrationsSmall} />
          <Spacer3 />
          {showSandbox ? (
            <CenteredImgLarge
              src={WithSandbox}
              onClick={() => {
                setShowSandbox(!showSandbox);
              }}
            />
          ) : (
            <CenteredImgLarge
              src={WithoutSandbox}
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
  background-color: #21212b;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px;
`;

const FeatureTitle = styled.div`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 800;
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
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
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
