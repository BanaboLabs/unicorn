import React from "react";
import styled from "styled-components";
import HeaderWhite from "../HeaderWhite";

export default function FullPricingPage() {
  return (
    <Wrapper>
      <HeaderWhite />
      <ContentWrapper>
        <Headline>
          Sandbox is free during <br /> the Beta Release
        </Headline>
        <Subheadline>We will introduce pricing in 2022</Subheadline>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 80vh;
  gap: 35px;
`;

const Headline = styled.div`
  color: #f6f5f1;
  font-family: "ProximaNova-Bold";
  font-size: 50px;
  line-height: 1.2;
  min-width: 100%;
  text-align: center;
`;

const Subheadline = styled.div`
  color: #f6f5f1;
  font-family: "ProximaNova-regular";
  font-size: 20px;
  line-height: 1.2;
  min-width: 100%;
  text-align: center;
`;
