import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../customhooks/useInput";
import LeftSide from "../../images/leftside.svg";
import SmallBanabo from "../../images/smallbanabo.svg";
import beta from "../../images/betalandingpage.svg";
import left from "../../images/leftlandingpage.svg";
import emailjs from "emailjs-com";
import blackleft from "../../images/blackleft.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

// Function to save the link info
const noRefresh = (event) => {
  event.preventDefault();
};

export default function FullLandingPage() {
  const isDesktop = useMediaQuery("(max-width: 800px)");

  // Information Captured
  const yourName = useInput("New Customer");
  const emailAddress = useInput("");
  const yourMessage = useInput("Landing Page Conversion");
  // Tells us whether the user has submitted or not
  const [submitted, setSubmitted] = useState(false);

  // Notion Api w/ SheetMonkey to save a users signup information
  useEffect(() => {
    if (submitted == true) {
      function postSignUp() {
        var templateParams = {
          Email: emailAddress.value,
          Name: yourName.value,
          Message: yourMessage.value,
        };

        emailjs
          .send(
            "service_08aea5o",
            "template_2eqvm3a",
            templateParams,
            "user_m6r5vskSYkTsBvEoBHTxg"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      }

      postSignUp();
    }
  }, [submitted]);

  // UI Code
  return (
    <ParentWrapper>
      {isDesktop ? (
        <Wrapper>
          <ContentWrapper>
            <Background2>
              {submitted == false ? (
                <VStack2>
                  <Text>Sign up for free</Text>
                  <SubVStack>
                    <SmallTextGray>
                      Turn website traffic into sales
                    </SmallTextGray>
                    <SmallTextBlack>
                      We’ll email you an access link
                    </SmallTextBlack>
                  </SubVStack>
                  <Form onSubmit={noRefresh}>
                    <Input11
                      type="email"
                      placeholder="email"
                      value={emailAddress.value}
                      onChange={emailAddress.onChange}
                    />
                    <StyledButton
                      type="submit"
                      onClick={() =>
                        emailAddress.value <= 1 ? null : setSubmitted(true)
                      }
                    >
                      Get Started
                    </StyledButton>
                  </Form>
                  <Fixedimg src={blackleft} />
                </VStack2>
              ) : (
                <VStack2>
                  <Text>Sign up for free</Text>
                  <SubVStack>
                    <SmallTextGray>
                      Turn website traffic into sales
                    </SmallTextGray>
                    <SmallTextBlack>
                      You've been added to the list!
                    </SmallTextBlack>
                  </SubVStack>
                  <Form onSubmit={noRefresh}>
                    <StyledButton>Expect an email soon!</StyledButton>
                  </Form>
                </VStack2>
              )}
            </Background2>
          </ContentWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <ContentWrapper>
            <Background1>
              <StyledIMG1 src={left} />
              <AbsoluteIMG src={beta} />
            </Background1>
            <Background2>
              {submitted == false ? (
                <VStack>
                  <Text>Sign up for free</Text>
                  <SubVStack>
                    <SmallTextGray>
                      Turn website traffic into sales
                    </SmallTextGray>
                    <SmallTextBlack>
                      We’ll email you an access link
                    </SmallTextBlack>
                  </SubVStack>
                  <Form onSubmit={noRefresh}>
                    <Input1
                      type="email"
                      placeholder="email"
                      value={emailAddress.value}
                      onChange={emailAddress.onChange}
                    />
                    <StyledButton
                      type="submit"
                      onClick={() =>
                        emailAddress.value <= 1 ? null : setSubmitted(true)
                      }
                    >
                      Get Started
                    </StyledButton>
                  </Form>
                </VStack>
              ) : (
                <VStack>
                  <Text>Sign up for free</Text>
                  <SubVStack>
                    <SmallTextGray>
                      Turn website traffic into sales
                    </SmallTextGray>
                    <SmallTextBlack>
                      You've been added to the list
                    </SmallTextBlack>
                  </SubVStack>
                  <Form onSubmit={noRefresh}>
                    <StyledButton>Expect an email soon!</StyledButton>
                  </Form>
                </VStack>
              )}
            </Background2>
          </ContentWrapper>
        </Wrapper>
      )}
    </ParentWrapper>
  );
}

const ParentWrapper = styled.div``;

const Wrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
`;

const Fixedimg = styled.img``;

const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  @media (max-width: 900px) {
    display: grid;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: left;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: left;
  align-items: left;
  text-align: left;
`;

const VStack2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: left;
  align-items: left;
  text-align: left;
`;

const SubVStack = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 6px;
`;

const Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 40px;
  color: #000000;
`;

const SmallTextGray = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #8d8c8f;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  background: linear-gradient(88.63deg, #1bcdf4 6.03%, #1b8cf4 93.77%);
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  width: 281px;
  height: 45px;
  @media (max-width: 900px) {
    width: 70vw;
  }

  :hover {
    background: linear-gradient(88.63deg, #17b9dd 6.03%, #1980de 93.77%);
  }
`;

const SmallTextBlack = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #000000;
`;

const Background1 = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(39.83deg, #1bcdf4 6.97%, #1b8cf4 94.52%);
  @media (max-width: 900px) {
    display: none;
  }
`;

const Background2 = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background: #ffffff;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Input1 = styled.input`
  border: none;
  color: #7f848d;
  width: 258px;
  height: 30px;
  font-size: 18px;
  font-family: "ProximaNovaRegular";
  background: #ffffff;
  border-radius: 5px;

  transition: all 0.2s ease 0s;
  padding: 6px 10px;
  outline: 2px solid #8d8c8f;
  @media (max-width: 900px) {
    width: 65.5vw;
  }

  :focus {
    box-shadow: 0 0 1pt 1pt #40a3ff;
  }
`;

const Input11 = styled.input`
  border: none;
  color: #7f848d;
  width: 258px;
  height: 30px;
  font-size: 18px;
  font-family: "ProximaNovaRegular";
  background: #ffffff;
  border-radius: 5px;

  transition: all 0.2s ease 0s;
  padding: 6px 10px;
  outline: 2px solid #8d8c8f;
  @media (max-width: 900px) {
    width: 64.5vw;
  }

  :focus {
    box-shadow: 0 0 1pt 1pt #40a3ff;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTextWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  text-align: center;
`;

const AbsoluteIMG = styled.img`
  position: absolute;
  top: -10px;
  left: 0px;
`;

const StyledIMG1 = styled.img``;

const StyledIMG2 = styled.img`
  padding-top: 40px;
  width: 80%;
  height: 80%;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;
