import React, { useState } from "react";
import styled from "styled-components";
import logowhite from "../../images/banabologowhite.svg";
import { Link } from "gatsby";
import insidex from "../../images/insidex.svg";
import modaldocs from "../../images/modaldocs.png";
import modalcontact from "../../images/modalcontact.png";
import modalprice from "../../images/modalprice.png";
import rightarrow from "../../images/cuterightarrow.svg";

export default function HeaderDropDownWhite() {
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <SubWrapper>
        <NavWrapper>
          {active == false ? (
            <ParentGroup>
              <SubGroup1>
                <StyledLink to="/">
                  <img src={logowhite} alt="growth" />
                </StyledLink>
                <StyledLink to="/">
                  <Title>Banabo</Title>
                </StyledLink>
              </SubGroup1>
            </ParentGroup>
          ) : null}
          <ParentGroup>
            <DropDownWrapper>
              {active == false ? (
                <RectangleWrapper onClick={() => setActive(!active)}>
                  <InsideRectangleWrapper>
                    <InsideRectangle />
                    <InsideRectangle />
                    <InsideRectangle />
                  </InsideRectangleWrapper>
                </RectangleWrapper>
              ) : null}
              {active ? (
                <TheRectangleWrapper>
                  <TheRectangle>
                    <InsideVerticalWrapper1>
                      <InsideHorizontalWrapper1>
                        <InsideTitle>DIRECTORY</InsideTitle>
                        <StyledIMG
                          src={insidex}
                          onClick={() => setActive(!active)}
                        />
                      </InsideHorizontalWrapper1>
                      <StyledLink to="/docs">
                        <InsideItemHorizontalWrapper>
                          <FixedIMG src={modaldocs} />
                          <InsideItemVerticalWrapper>
                            <InsideTitle>Docs</InsideTitle>
                            <InsideGray>Getting Started</InsideGray>
                          </InsideItemVerticalWrapper>
                        </InsideItemHorizontalWrapper>{" "}
                      </StyledLink>
                      <StyledLink to="/contact">
                        <InsideItemHorizontalWrapper>
                          <FixedIMG src={modalcontact} />
                          <InsideItemVerticalWrapper>
                            <InsideTitle>Contact</InsideTitle>
                            <InsideGray>Quick Support</InsideGray>
                          </InsideItemVerticalWrapper>
                        </InsideItemHorizontalWrapper>
                      </StyledLink>
                      <StyledLink to="/pricing">
                        <InsideItemHorizontalWrapper>
                          <FixedIMG src={modalprice} />
                          <InsideItemVerticalWrapper>
                            <InsideTitle>Pricing</InsideTitle>
                            <InsideGray>Free During Beta</InsideGray>
                          </InsideItemVerticalWrapper>
                        </InsideItemHorizontalWrapper>
                      </StyledLink>
                      <VerticalWrapperNew>
                        <BlueRectangle>
                          <StyledLink to="/signup">
                            <StyledButton>
                              <span>Sign Up</span>
                            </StyledButton>
                          </StyledLink>
                        </BlueRectangle>
                      </VerticalWrapperNew>
                    </InsideVerticalWrapper1>
                  </TheRectangle>
                </TheRectangleWrapper>
              ) : null}
            </DropDownWrapper>
          </ParentGroup>
        </NavWrapper>
      </SubWrapper>
    </Wrapper>
  );
}

const TheRectangleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FixedIMG = styled.img`
  width: 40px;
  height: 40px;
`;

const VerticalWrapperNew = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIMG = styled.img`
  cursor: pointer;
`;

const TheRectangle = styled.div`
  width: 88vw;
  height: 358px;
  background: #ffffff;
  box-shadow: 0px 0px 30px 5px rgba(174, 174, 174, 0.18);
  border-radius: 10px;
`;

const BlueRectangle = styled.div`
  width: 89vw;
  height: 70px;
  background: #f4f8fb;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideVerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InsideHorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 23px;
`;

const InsideItemHorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding-left: 20px;
`;

const InsideItemVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const InsideTitle = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14px;
  line-height: 15px;
  color: #47475e;
`;

const InsideGray = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14px;
  line-height: 15px;
  color: #999ba8;
`;

const Wrapper = styled.div`
  min-height: 10vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const SubWrapper = styled.div`
  display: block;
  grid-auto-flow: row;
  justify-items: center;
  padding: 20px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParentGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;
`;

const RectangleWrapper = styled.div`
  width: 50px;
  height: 34px;
  background: #47475e;
  border-radius: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideRectangleWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const InsideRectangle = styled.div`
  width: 17px;
  height: 2px;
  background: #ffffff;
`;

const SubGroup1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const Title = styled.div`
  font-family: "ProximaNovaBold";
  color: #ffffff;
  font-size: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DropDownWrapper = styled.div`
  display: grid;
  gap: 30px;
  position: relative;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 12px;
  color: #ffffff;
  border: none;
  width: 100px;
  height: 32px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 300px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;
