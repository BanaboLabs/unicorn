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
          <MiddleParent>
            <MiddleSection />
            <ToggleSection />
          </MiddleParent>
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
  flex-direction: column;
  gap: 135px;
`;

const MiddleParent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
