import React from "react";
import styled from "styled-components";
import logoblack from "../../../images/banabologoblack.svg";
import logogrid from "../../../images/logogrid.png";
import gdpr from "../../../images/gdpr.png";
import ccpa from "../../../images/ccpa.png";

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Line />
        <BigHStack>
          <BelowWrapper>
            <LeftHStack>
              <TopParent>
                <LogoHStack>
                  <img src={logoblack} />
                  <BanaboText>Banabo</BanaboText>
                </LogoHStack>
              </TopParent>
              <TopParent>
                <VStack>
                  <GrayText>
                    Built by a team of designers and engineers from{" "}
                  </GrayText>
                  <SmallIMG src={logogrid} />
                </VStack>
              </TopParent>
            </LeftHStack>
            <TopParent2>
              <BadgeHStack>
                <ShadowIMG src={gdpr} />
                <ShadowIMG src={ccpa} />
              </BadgeHStack>
            </TopParent2>
          </BelowWrapper>
        </BigHStack>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Line = styled.div`
  background: #eaeaea;
  transform: matrix(1, 0, 0, -1, 0, 0);
  width: 80vw;
  height: 3px;
`;

const BelowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const BigHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const LeftHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 10px;
  }
`;

const TopParent = styled.div`
  display: inline-block;
  vertical-align: top; /* here */
  padding-top: 30px;
`;

const TopParent2 = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 20px; /* here */
`;

const LogoHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: left;
    align-items: left;
  }
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: left;
  text-align: left;
`;

const BanaboText = styled.div`
  font-size: 26px;
  line-height: 32px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const GrayText = styled.div`
  font-size: 22px;
  line-height: 27px;
  font-family: "ProximaNovaRegular";
  color: #7f7f7f;
  width: 300px;
`;

const BadgeHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: center;
  align-items: center;
`;

const SmallIMG = styled.img`
  width: 70%;
  height: auto;

  @media (max-width: 1500px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 1200px) {
    width: 20%;
    height: 20%;
  }

  @media (max-width: 900px) {
    width: 35%;
    height: 35%;
  }
`;

const ShadowIMG = styled.img``;
