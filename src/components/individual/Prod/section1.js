import React from "react";
import styled from "styled-components";
import HeaderBlack from "../HeaderBlack";
import lightbulb from "../../../images/lightbulb.gif";
import { Link } from "gatsby";
import section1product from "../../../images/section1product.svg";
import background1 from "../../../images/backgroundprod.svg";
import background2 from "../../../images/backgroundprod2.svg";
import logostrip from "../../../images/logostrip.svg";

export default function Section1() {
  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderBlack />
        <VerticalWrapper1>
          <HorizontalWrapper1>
            <VerticalWrapper1>
              <HorizontalWrapper2>
                <LightBulb src={lightbulb} />
                <Title>Know the impact.</Title>
              </HorizontalWrapper2>
              <Title>For every channel.</Title>
              <Spacer />
              <SubTitle>
                Get precise influence scores on the growth channels that drive
                website conversions, with Banabo
              </SubTitle>
              <Spacer />
              <StyledLink to="/signup">
                <StyledButton>See it in action</StyledButton>
              </StyledLink>
            </VerticalWrapper1>
            <Product src={section1product} />
          </HorizontalWrapper1>
          <BigSpacer />
          <VStack>
            <SubHead>
              No matter your growth stack, Banabo can connect to any platform
            </SubHead>
            <img src={logostrip} />
          </VStack>
        </VerticalWrapper1>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  background-image: url(${background1});

  @media (min-width: 1800px) {
    background-image: url(${background2});
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
`;

const HorizontalWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const Title = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 70px;
  color: #252531;
  line-height: 85px;
`;

const Spacer = styled.div`
  padding-top: 40px;
`;

const BigSpacer = styled.div`
  padding-top: 85px;
`;

const SubTitle = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 24px;
  line-height: 29px;
  color: #737180;
  width: 600px;
`;

const SubHead = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  text-align: center;
`;

const LightBulb = styled.img`
  width: 70px;
  height: 70px;
`;

const Product = styled.img``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 19px;
  color: #ffffff;
  border: none;
  width: 180px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 300px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
