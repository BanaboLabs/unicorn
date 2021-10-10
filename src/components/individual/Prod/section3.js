import React from "react";
import styled from "styled-components";
import step1 from "../../../images/step1.svg";
import step1small from "../../../images/step1small.svg";
import heart from "../../../images/heartgif.gif";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Section3() {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Wrapper>
      <ContentWrapper>
        <HorizontalWrapper1>
          <VerticalWrapper1>
            <Title>
              Connect your <br /> channels
            </Title>
            <SubTitle>
              Banabo creates a clickable link for each channel <br /> that
              uniquely identifies every website visitor
            </SubTitle>
          </VerticalWrapper1>
          {isDesktop ? (
            <Container>
              <img src={step1} />
              <THEImg src={heart} />
            </Container>
          ) : (
            <Container>
              <img src={step1small} />
              <THEImg src={heart} />
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
  background-color: #b4dbf6;
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
  top: 30px;
  left: 40px;
  height: 62px;
  width: 62px;
  @media (max-width: 900px) {
    height: 39px;
    width: 39px;
    top: 25px;
    left: 157px;
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
    font-size: 16px;
  }
`;
