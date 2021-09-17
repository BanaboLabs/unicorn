import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Link } from "gatsby";

export default function HeaderBlack() {
  return (
    <Wrapper>
      <SubWrapper>
        <NavWrapper>
          <ParentGroup>
            <SubGroup1>
              <StyledLink to="/">
                <img src={logo} alt="growth" />
              </StyledLink>
              <StyledLink to="/">
                <Title>Sandbox</Title>
              </StyledLink>
            </SubGroup1>
            <SubGroup2>
              <MobileHidden>
                <StyledLink to="https://docs.startneon.com/">
                  <TabItem>Docs</TabItem>
                </StyledLink>
              </MobileHidden>
              <MobileHidden>
                <StyledLink to="/pricing">
                  <TabItem>Pricing</TabItem>
                </StyledLink>
              </MobileHidden>
              <MobileHidden>
                <StyledLink to="/contact">
                  <TabItem>Contact</TabItem>
                </StyledLink>
              </MobileHidden>
            </SubGroup2>
          </ParentGroup>
          <SubGroup2>
            <MobileHidden>
              <StyledLink to="https://app.startneon.com/login">
                <TabItem>Login</TabItem>
              </StyledLink>
            </MobileHidden>
            <StyledLink to="/signup">
              <Button>Sign Up</Button>
            </StyledLink>
          </SubGroup2>
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

const Title = styled.div`
  font-family: "ProximaNova-Bold";
  color: #252531;
  font-size: 30px;
`;

const TabItem = styled.div`
  font-family: "ProximaNova-Semibold";
  color: #252531;
  font-size: 19px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  font-family: "ProximaSoft-Bold";
  font-size: 19px;
  color: #ffffff;
  border: none;
  width: 180px;
  height: 50px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 6px;
  background-color: #252531;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: #53536b;
  }
`;

const ParentGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;
`;

const SubGroup1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 25px;
`;

const SubGroup2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;
`;

const MobileHidden = styled.div`
  @media (max-width: 840px) {
    display: none;
  }
`;
