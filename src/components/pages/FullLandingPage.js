import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../customhooks/useInput";
import LeftSide from "../../images/leftside.svg";

// Function to save the link info
const noRefresh = (event) => {
  event.preventDefault();
};

export default function FullLandingPage() {
  // Information Captured
  const yourName = useInput("");
  const emailAddress = useInput("");
  // Tells us whether the user has submitted or not
  const [submitted, setSubmitted] = useState(false);

  // Notion Api w/ SheetMonkey to save a users signup information
  useEffect(() => {
    if (submitted == true) {
      function postSignUp() {
        const data = {
          Email: yourName.value,
          Name: emailAddress.value,
        };

        fetch("https://api.sheetmonkey.io/form/uRgMbCEDTTRYcGuiGbLyxv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((result) => {
          // Handle the result
        });
      }

      postSignUp();
    }
  }, [submitted]);

  // UI Code
  return (
    <ParentWrapper>
      <Wrapper>
        <ContentWrapper>
          <Background1>
            <StyledIMG src={LeftSide} />
          </Background1>
          <Background2>
            <NewWrapper>
              <StyledDiv>
                <Form onSubmit={noRefresh}>
                  {submitted == false ? (
                    <InputWrapper>
                      <Text>Sign Up</Text>
                      <SubTextWrapper>
                        <SubText>
                          Sign up to reserve your spot in our Beta Release.
                        </SubText>
                        <SubText>We’ll let you in as soon as we can</SubText>
                      </SubTextWrapper>
                      <Input1
                        type="text"
                        placeholder="Your Name"
                        value={yourName.value}
                        onChange={yourName.onChange}
                      />
                      <Input1
                        type="email"
                        placeholder="Email Address"
                        value={emailAddress.value}
                        onChange={emailAddress.onChange}
                      />
                      <StyledButton
                        type="submit"
                        onClick={() => setSubmitted(true)}
                      >
                        Sign Up{" "}
                      </StyledButton>
                    </InputWrapper>
                  ) : (
                    <InputWrapper>
                      <Text>Thank You!</Text>
                      <SubTextWrapper>
                        <SubText>
                          We’ll send an email when it’s ready for you
                        </SubText>
                      </SubTextWrapper>
                    </InputWrapper>
                  )}
                </Form>
              </StyledDiv>
            </NewWrapper>
          </Background2>
        </ContentWrapper>
      </Wrapper>
    </ParentWrapper>
  );
}

const ParentWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
`;

const NewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 35px;
  padding-bottom: 300px;
`;

const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  @media (max-width: 1600px) {
    display: grid;
  }
`;

const Background1 = styled.div`
  width: 50%;
  height: 100vh;
  background: #192c66;
  @media (max-width: 1600px) {
    display: none;
  }
`;

const Background2 = styled.div`
  width: 50%;
  height: 100vh;
  background: #252531;
  @media (max-width: 1600px) {
    width: 100%;
  }
`;

const Text = styled.h1`
  font-family: "ProximaNovaBold";
  font-size: 60px;
  color: #ffffff;
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

const SubText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 24px;
  color: #ffffff;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Input1 = styled.input`
  border: none;
  color: #7f848d;
  width: 500px;
  height: 50px;
  font-size: 18px;
  font-family: "ProximaNovaRegular";
  background: rgba(74, 74, 86, 0.44);
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease 0s;
  padding: 6px 20px;

  @media (max-width: 700px) {
    width: 300px;
  }

  :focus {
    box-shadow: 0 0 1pt 1pt #40a3ff;
  }
`;

const Form = styled.form`
  display: flex;
  margin-top: 0em;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: grid;
  gap: 25px;
  justify-items: center;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 19px;
  color: #ffffff;
  border: none;
  width: 542px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  @media (max-width: 700px) {
    width: 340px;
  }

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
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

const StyledIMG = styled.img`
  padding-top: 220px;
  width: 90%;
  height: 90%;
`;
