import React from "react";
import styled from "styled-components";
import step2 from "../../../images/step2.svg";
import horn from "../../../images/horn.gif";

export default function Section4() {
  return (
    <Wrapper>
      <ContentWrapper>
        <HorizontalWrapper1>
          <Container>
            <img src={step2} />
            <IMG src={horn} />
          </Container>
          <VerticalWrapper1>
            <Title>
              See paths leading <br /> to conversion
            </Title>
            <SubTitle>
              See which combination of touch-points with <br /> your brand leads
              to a signup or purchase
            </SubTitle>
          </VerticalWrapper1>
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
`;

const Container = styled.div`
  position: relative;
`;

const IMG = styled.img`
  position: absolute;
  top: 60px;
  left: 60px;
  height: 62px;
  width: 62px;
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-top: 20px;
`;

const Title = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 70px;
  color: #252531;
  line-height: 85px;
`;

const SubTitle = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 24px;
  line-height: 29px;
  color: #3a3a3a;
  width: 600px;
`;
