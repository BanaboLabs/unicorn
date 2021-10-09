import React from "react";
import styled from "styled-components";
import heart from "../../../images/heartprod.svg";
import gear from "../../../images/gearprod.svg";
import contact from "../../../images/contactprod.svg";
import buttonarrow from "../../../images/buttonarrow.svg";
import { Link } from "gatsby";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function BottomSection() {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Wrapper>
      <ContentWrapper>
        {isDesktop ? <Title>Get started for free</Title> : null}
        <RectangleWrapper>
          <Rectangle>
            <InsideContentWrapper>
              <img src={heart} alt="free during beta" />
              <Text>Free during beta</Text>
              <SubText>
                See for yourself what Banabo has to offer. No credit card
                required
              </SubText>
              <StyledLink to="/signup">
                <StyledButton1>
                  <span>
                    Sign Up <img src={buttonarrow} alt="sign up" />
                  </span>
                </StyledButton1>
              </StyledLink>
            </InsideContentWrapper>
          </Rectangle>
          <Rectangle>
            <InsideContentWrapper>
              <img src={gear} alt="channel growth" />
              <Text>Simple to integrate</Text>
              <SubText>
                Add Banabo to your website within 5 minutes. It’s really that
                easy
              </SubText>
              <StyledLink href="https://docs.banabo.io/">
                <StyledButton2>
                  <span>
                    Read Docs <img src={buttonarrow} alt="read docs" />
                  </span>
                </StyledButton2>
              </StyledLink>
            </InsideContentWrapper>
          </Rectangle>
          <Rectangle>
            <InsideContentWrapper>
              <img src={contact} alt="channel growth" />
              <Text>Always ready support</Text>
              <SubText>
                We’re here to answer all your questions within 24 hours
              </SubText>
              <StyledLink to="/contact">
                <StyledButton3>
                  <span>
                    Contact Us <img src={buttonarrow} alt="contact us" />
                  </span>
                </StyledButton3>
              </StyledLink>
            </InsideContentWrapper>
          </Rectangle>
        </RectangleWrapper>
        <BottomSpacer />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  padding: 130px;
`;

const RectangleWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  line-height: 100px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
  @media (max-width: 700px) {
    font-size: 55px;
    line-height: 70px;
  }
`;

const Rectangle = styled.div`
  height: 360px;
  width: 400px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 20px;

  @media (max-width: 900px) {
    height: 288px;
    width: 321px;
  }
`;

const BottomSpacer = styled.div`
  padding-bottom: 150px;
`;

const InsideContentWrapper = styled.div`
  display: grid;
  gap: 35px;
  padding-left: 25px;
  padding-top: 25px;
  @media (max-width: 900px) {
    gap: 20px;
  }
`;

const Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 24px;
  color: #252531;
`;

const SubText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
  color: #8d8d8d;
  width: 290px;
  @media (max-width: 900px) {
    width: 240px;
  }
`;

const StyledButton1 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 117px;
  height: 46px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;

const StyledButton2 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 138px;
  height: 46px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;

const StyledButton3 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 144px;
  height: 46px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
