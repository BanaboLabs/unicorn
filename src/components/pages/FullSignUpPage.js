import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../customhooks/useInput";
import Blur from "../../images/blur.svg";

// Function to save the link info
const noRefresh = (event) => {
  event.preventDefault();
};

export default function FullSignUpPage() {
  const yourName = useInput("");
  const emailAddress = useInput("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <ParentWrapper>
      <Wrapper>
        <ContentWrapper>
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
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url(${Blur});
  min-width: 100vh;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 90vh;
  gap: 35px;
`;

const Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 50px;
  color: #ffffff;
`;

const SubText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 20px;
  color: #ffffff;
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

  :hover {
    background: linear-gradient(90deg, #0848e5, #8323fe);
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
