import React from "react";
import styled from "styled-components";
import step1 from "../../../images/step1.svg";
import heart from "../../../images/heartgif.gif";

export default function Section3() {
  return (
    <Wrapper>
      <ContentWrapper>
        <HorizontalWrapper1>
          <VerticalWrapper1>
            <Title>
              Connect your <br /> channels
            </Title>
            <SubTitle>
              Banabo will create a unqiue link that maps visitors <br /> from
              each channel to your website destination
            </SubTitle>
          </VerticalWrapper1>
          <Container>
            <img src={step1} />
            <IMG src={heart} />
          </Container>
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
`;

const Container = styled.div`
  position: relative;
`;

const IMG = styled.img`
  position: absolute;
  top: 30px;
  left: 35px;
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
