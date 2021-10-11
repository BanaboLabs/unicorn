import React from "react";
import styled from "styled-components";
import step2 from "../../../images/step2.svg";
import step2small from "../../../images/step2small.svg";
import horn from "../../../images/horn.gif";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Section4() {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Wrapper>
      <ContentWrapper>
        <HorizontalWrapper1>
          {isDesktop ? (
            <Container1>
              <img src={step2} />
              <THEImg src={horn} />
            </Container1>
          ) : (
            <Container1>
              <img src={step2small} />
              <THEImg src={horn} />
            </Container1>
          )}
          <VerticalWrapper1>
            <Title>
              See conversion <br /> paths
            </Title>
            <SubTitle>
              Understand the exact combination of touch-points <br /> with your
              brand that leads to a signup or purchase
            </SubTitle>
          </VerticalWrapper1>
          {isDesktop ? (
            <Container2>
              <img src={step2} />
              <THEImg src={horn} />
            </Container2>
          ) : (
            <Container2>
              <img src={step2small} />
              <THEImg src={horn} />
            </Container2>
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
  background-color: #ffc95f;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  padding: 180px;
  @media (max-width: 900px) {
    padding: 0px;
    padding-top: 60px;
  }
`;

const Container1 = styled.div`
  position: relative;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Container2 = styled.div`
  position: relative;
  display: none;
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
  left: 60px;
  height: 62px;
  width: 62px;
  @media (max-width: 900px) {
    height: 39px;
    width: 39px;
    top: 25px;
    left: 35px;
  }
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 60px;
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
  width: 600px;
  @media (max-width: 900px) {
    font-size: 14px;
    width: 350px;
  }
`;
