import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../customhooks/useInput";
import chatIcon from "../../images/chaticon.svg";
import HeaderWhite from "../individual/HeaderWhite";

export default function FullContactPage() {
  const yourName = useInput("");
  const emailAddress = useInput("");
  const yourMessage = useInput("");
  // Tells us whether the user has submitted or not
  const [submitted, setSubmitted] = useState(false);

  // Function to save the link info
  const noRefresh = (event) => {
    event.preventDefault();
  };

  // Notion Api w/ SheetMonkey to save a users messsage information
  useEffect(() => {
    if (submitted == true) {
      function postSignUp() {
        const data = {
          Email: yourName.value,
          Name: emailAddress.value,
          Message: yourMessage.value,
        };

        fetch("https://api.sheetmonkey.io/form/kwSXEApTeEbZy4XcYK4PnU", {
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

  return (
    <ParentWrapper>
      <Wrapper>
        <HeaderWhite />
        <ContentWrapper>
          <StyledDiv>
            <Form onSubmit={noRefresh}>
              <InputWrapper>
                <Text>Contact Us</Text>
                <SubTextWrapper>
                  <SubText>We’re always ready to answer questions</SubText>
                  <SubText>You’ll hear back within 24 hours</SubText>{" "}
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
                <TextArea
                  placeholder="Write your message here..."
                  value={yourMessage.value}
                  onChange={yourMessage.onChange}
                ></TextArea>
                <StyledButton type="submit" onClick={() => setSubmitted(true)}>
                  {" "}
                  Send Message{" "}
                </StyledButton>
              </InputWrapper>
            </Form>
          </StyledDiv>
          <StyledImg src={chatIcon} />
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

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  min-height: 80vh;
  gap: 100px;
  margin-top: 80px;
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
  justify-items: left;
`;

const TextArea = styled.textarea`
  border: none;
  color: #7f848d;
  width: 500px;
  height: 300px;
  font-size: 18px;
  font-family: "ProximaNovaRegular";
  background: rgba(74, 74, 86, 0.44);
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease 0s;
  padding: 14px 20px;
  resize: none;

  :focus {
    box-shadow: 0 0 1pt 1pt #40a3ff;
  }
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

const StyledImg = styled.img`
  margin-bottom: 800px;
  @media (max-width: 1040px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTextWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  text-align: left;
`;

////
