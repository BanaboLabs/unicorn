import React from "react";
import styled from "styled-components";
import HeaderBlack from "../HeaderBlack";
import lightbulb from "../../../images/lightbulb.gif";
import { Link } from "gatsby";
import product from "../../../images/product.png";
import background1 from "../../../images/background.png";
import background2 from "../../../images/background.png";
import productsmall from "../../../images/productsmall.svg";
import logostrip from "../../../images/logostrip.svg";
import logostripsmall from "../../../images/logostripsmall.png";
import useMediaQuery from "../../../hooks/useMediaQuery";
import HeaderDropDownBlack from "../HeaderDropDownBlack";

export default function Section1() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Wrapper>
      {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
      <ContentWrapper>
        <VerticalWrapper11>
          <HorizontalWrapper1>
            {isDesktop ? null : <Product src={product} />}
            <VerticalStack>
              <VerticalWrapper1>
                <Title>Convert more website visitors</Title>
                <SubHead>
                  Know the exact impact of each marketing channel on a website
                  conversion with Banabo
                </SubHead>
                <StyledLink to="/signup">
                  <StyledButton>Try Banabo Free</StyledButton>
                </StyledLink>
              </VerticalWrapper1>
              <MiniVStack>
                <GrayTitle>CONNECT TO EVERY CHANNEL</GrayTitle>
                {isDesktop ? (
                  <Logos src={logostrip} />
                ) : (
                  <Logos src={logostripsmall} />
                )}
              </MiniVStack>
            </VerticalStack>
            {isDesktop ? <Product src={product} /> : null}
          </HorizontalWrapper1>
        </VerticalWrapper11>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  background-image: url(${background1});
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;

  @media (max-width: 1500px) {
    gap: 80px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const VerticalWrapper11 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  align-items: center;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 10px;
  }
`;

const Logos = styled.img`
  width: 70%;
  height: 70%;
`;

const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const MiniVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const GrayTitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #9695a8;
  font-family: "ProximaNovaSemibold";
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-items: left;
  align-content: left;
  gap: 30px;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 74px;
  color: #252531;
  width: 600px;
  line-height: 70px;

  @media (max-width: 1500px) {
    font-size: 50px;
    width: 400px;
    line-height: 50px;
  }

  @media (max-width: 1200px) {
    font-size: 38px;
    width: 300px;
    line-height: 45px;
  }
`;

const SubHead = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-family: "ProximaNovaSemibold";
  color: #252531;
  width: 430px;
  @media (max-width: 1200px) {
    width: 80vw;
  }
`;

const Product = styled.img`
  @media (max-width: 1500px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 1200px) {
    width: 75%;
    height: 75%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaSemiBold";
  font-size: 17px;
  color: #ffffff;
  border: none;
  height: 45px;
  width: 193px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 300px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;
