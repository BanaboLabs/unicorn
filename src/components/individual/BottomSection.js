import React from "react";
import styled from "styled-components";
import star from "../../images/staricon.svg";
import bolt from "../../images/bolticon.svg";
import person from "../../images/personicon.svg";
import buttonarrow from "../../images/buttonarrow.svg";
import { Link } from "gatsby";

export default function BottomSection() {
  return (
    <ContentWrapper>
      <Title>Banabo. Get Started</Title>
      <RectangleWrapper>
        <Rectangle>
          <InsideContentWrapper>
            <img src={star} />
            <Text>Free during beta</Text>
            <SubText>
              See for yourself what Banabo has to offer. No credit card required
            </SubText>
            <StyledLink to="/signup">
              <StyledButton1>
                <span>
                  Sign Up <img src={buttonarrow} />
                </span>
              </StyledButton1>
            </StyledLink>
          </InsideContentWrapper>
        </Rectangle>
        <Rectangle>
          <InsideContentWrapper>
            <img src={bolt} />
            <Text>Simple to integrate</Text>
            <SubText>
              Add Banabo to your website within 5 minutes. It’s really that easy
            </SubText>
            <StyledLink href="https://docs.startneon.com/">
              <StyledButton2>
                <span>
                  Read Docs <img src={buttonarrow} />
                </span>
              </StyledButton2>
            </StyledLink>
          </InsideContentWrapper>
        </Rectangle>
        <Rectangle>
          <InsideContentWrapper>
            <img src={person} />
            <Text>Always ready support</Text>
            <SubText>
              We’re here to answer all your questions within 24 hours
            </SubText>
            <StyledLink to="/contact">
              <StyledButton3>
                <span>
                  Contact Us <img src={buttonarrow} />
                </span>
              </StyledButton3>
            </StyledLink>
          </InsideContentWrapper>
        </Rectangle>
      </RectangleWrapper>
      <BottomSpacer />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;

const Title = styled.div`
  font-size: 80px;
  background: linear-gradient(90deg, #265de3, #af71ff);
  -webkit-background-clip: text;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  line-height: 100px;
  color: transparent;
  font-family: "ProximaNovaExtraBold";
`;

const RectangleWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;

  @media (max-width: 1140px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Rectangle = styled.div`
  width: 349px;
  height: 333px;
  background: #47475d;
  border: 2px solid #7b7b8c;
  box-sizing: border-box;
  box-shadow: 0px 4px 80px 5px rgba(119, 105, 244, 0.2);
  border-radius: 10px;
`;

const BottomSpacer = styled.div`
  padding-bottom: 150px;
`;

const InsideContentWrapper = styled.div`
  display: grid;
  gap: 35px;
  padding-left: 25px;
  padding-top: 25px;
`;

const Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 24px;
  color: #ffffff;
`;

const SubText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
  color: #dfdede;
  width: 300px;
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
