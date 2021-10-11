import React from "react";

import styled from "styled-components";
import Section1 from "../individual/Prod/section1";
import Section2 from "../individual/Prod/section2";
import Section3 from "../individual/Prod/section3";
import Section4 from "../individual/Prod/section4";
import Section5 from "../individual/Prod/section5";
import Section6 from "../individual/Prod/section6";

// Alter drop shadows to match website

export default function FullIndexPage() {
  return (
    <ParentWrapper>
      <Wrapper>
        <ContentWrapper>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
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
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
