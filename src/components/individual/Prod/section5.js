import React from "react";
import styled from "styled-components";
import step3 from "../../../images/step3.svg";
import step3small from "../../../images/step3small.svg";
import goldheart from "../../../images/goldheart.gif";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Section5() {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Wrapper>
      <ContentWrapper>
        <HorizontalWrapper1>
          <VerticalWrapper1>
            <Title>
              Scores for <br /> every channel
            </Title>
            <SubTitle>
              Banabo analyzes each channel with our in-house machine learning
              model to attribute influence towards conversion
            </SubTitle>
          </VerticalWrapper1>
          {isDesktop ? (
            <Container>
              <img src={step3} />
              <THEImg src={goldheart} />
            </Container>
          ) : (
            <Container>
              <img src={step3small} />
              <THEImg src={goldheart} />
            </Container>
          )}
        </HorizontalWrapper1>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  background-color: #eff0f6;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  padding: 180px;
`;

const Container = styled.div`
  position: relative;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
  }
`;

const THEImg = styled.img`
  position: absolute;
  top: 60px;
  left: 65px;
  height: 62px;
  width: 62px;
  @media (max-width: 900px) {
    height: 39px;
    width: 39px;
    top: 29px;
    left: 20px;
  }
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-top: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
  }
`;

const Title = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 70px;
  color: #252531;
  line-height: 85px;
  @media (max-width: 900px) {
    font-size: 35px;
    line-height: 43px;
  }
`;

const SubTitle = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 24px;
  line-height: 29px;
  color: #3a3a3a;
  width: 620px;
  @media (max-width: 900px) {
    font-size: 16px;
    width: 300px;
  }
`;
