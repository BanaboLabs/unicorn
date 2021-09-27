import React, { useState } from "react";
import styled from "styled-components";
import logoblack from "../../images/banabologowhite.svg";
import { Link } from "gatsby";
import hearticon from "../../images/hearticonwhite.svg";
import keyicon from "../../images/keyiconwhite.svg";
import docsicon from "../../images/docsiconwhite.svg";
import staricon from "../../images/stariconwhite.svg";
import personicon from "../../images/personiconwhite.svg";

export default function HeaderDropDownWhite() {
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <SubWrapper>
        <NavWrapper>
          <ParentGroup>
            <SubGroup1>
              <StyledLink to="/">
                <img src={logoblack} alt="growth" />
              </StyledLink>
              <StyledLink to="/">
                <Title>Banabo</Title>
              </StyledLink>
            </SubGroup1>
          </ParentGroup>
          <ParentGroup>
            <DropDownWrapper>
              <RectangleWrapper onClick={() => setActive(!active)}>
                <InsideRectangleWrapper>
                  <InsideRectangle />
                  <InsideRectangle />
                  <InsideRectangle />
                </InsideRectangleWrapper>
              </RectangleWrapper>
              {active ? (
                <TheImage>
                  <DropDownInsideWrapper>
                    <Headline>Options</Headline>
                    <StyledLink href="/signup">
                      <StyledButton1>
                        <Align>
                          <img src={hearticon} /> Sign Up
                        </Align>
                      </StyledButton1>
                    </StyledLink>

                    <StyledLink href="https://docs.banabo.io">
                      <StyledButton3>
                        <Align>
                          <img src={docsicon} /> <Span>Docs</Span>
                        </Align>
                      </StyledButton3>
                    </StyledLink>
                    <StyledLink href="/pricing">
                      <StyledButton4>
                        <Align>
                          <img src={staricon} /> <Span>Pricing</Span>
                        </Align>
                      </StyledButton4>
                    </StyledLink>
                    <StyledLink href="/contact">
                      <StyledButton5>
                        <Align>
                          <img src={personicon} /> <Span>Contact</Span>
                        </Align>
                      </StyledButton5>
                    </StyledLink>
                  </DropDownInsideWrapper>
                </TheImage>
              ) : null}
            </DropDownWrapper>
          </ParentGroup>
        </NavWrapper>
      </SubWrapper>
    </Wrapper>
  );
}

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
  width: 51px;
  height: 45px;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
`;

const InsideRectangleWrapper = styled.div`
  display: grid;
  gap: 4px;
  padding-left: 15px;
  padding-top: 14px;
`;

const InsideRectangle = styled.div`
  width: 20px;
  height: 3px;
  background: #47475e;
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

const TheImage = styled.div`
  width: 340px;
  height: 320px;
  position: absolute;
  top: 80px;
  right: 0;
  background: #ffffff;
  box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
`;

const Headline = styled.div`
  font-family: "ProximaNovaBold";
  color: #252531;
  font-size: 19px;
`;

const StyledButton1 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 122px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(90deg, #265de3, #af71ff);
  box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.18);
  border-radius: 10px;

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;

const StyledButton2 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 90px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  background: #47475d;
  box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.18);
  border-radius: 10px;

  :hover {
    background: #000000;
  }
`;

const StyledButton3 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 86px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  background: #47475d;
  box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.18);
  border-radius: 10px;

  :hover {
    background: #000000;
  }
`;

const StyledButton4 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 102px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  background: #47475d;
  box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.18);
  border-radius: 10px;

  :hover {
    background: #000000;
  }
`;

const StyledButton5 = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  width: 109px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  background: #47475d;
  box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.18);
  border-radius: 10px;

  :hover {
    background: #000000;
  }
`;

const DropDownInsideWrapper = styled.div`
  padding-left: 40px;
  padding-top: 30px;
  display: grid;
  gap: 20px;
`;

const Align = styled.div`
  display: flex;
  padding-left: 5px;
  gap: 10px;
`;

const Span = styled.span`
  padding-top: 3px;
`;
