import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../customhooks/useInput";
import backgroundv2 from "../../images/backgroundv2.svg";
import mobilebackgroundv2 from "../../images/mobilebackgroundv2.svg";
import banabologo from "../../images/banabologo.svg";
import companylogos from "../../images/companylogos.svg";
import { motion, AnimatePresence } from "framer-motion";
import Illustration from "../individual/V2Signup/illustration";
import useMediaQuery from "../../hooks/useMediaQuery";
var moment = require("moment");

export default function FullV2SignupPage() {
  const emailAddress = useInput("");
  const [submitted, setSubmitted] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Function to save the link info
  const noRefresh = (event) => {
    event.preventDefault();
  };

  // Notion Api w/ SheetMonkey to save a users signup information
  useEffect(() => {
    if (submitted === true) {
      function postSignUp() {
        setShowNext(true);

        var templateParams = {
          Email: emailAddress.value,
          Time: moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        fetch("https://api.sheetmonkey.io/form/oXLbASvnJB8J8iKq7b16ud", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(templateParams),
        }).then((result) => {
          // Handle the result
        });
      }

      postSignUp();
    }
  }, [submitted]);

  return (
    <div>
      {isDesktop ? (
        <Wrapper>
          <MovementAnimationWrapper
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <LogoIMG1
              src={banabologo}
              initial="hidden"
              animate="visible"
              variants={variants}
            />
          </MovementAnimationWrapper>
          {showNext ? (
            <VStackAlt>
              <H1Text>Thank you!</H1Text>
              <H2Text>We have added your email address</H2Text>
              <H3Text2>
                We'll be launching our early access soon and we're ecstatic to
                have you be a part of it. One of our team members will reach out
                to you via email when your account is ready
              </H3Text2>
            </VStackAlt>
          ) : (
            <HStack>
              <ParentVStack>
                <MovementAnimationWrapper
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
                >
                  <ContentVStack
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ delay: 0.2 }}
                  >
                    <H1Text>
                      Cookieless <br /> Marketing Attribution
                    </H1Text>
                    <H2Text>
                      Capture every touchpoint with perfect accuracy
                    </H2Text>
                    <H3Text>
                      Built on top of anonymous identification. No need to
                      collect, process, or store a visitor’s personal data
                    </H3Text>
                  </ContentVStack>
                </MovementAnimationWrapper>
                <MovementAnimationWrapper
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.62, delay: 0.16 }}
                >
                  <LowerVStack
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ delay: 0.4 }}
                  >
                    <Form onSubmit={noRefresh}>
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        placeholderTextColor={"red"}
                        value={emailAddress.value}
                        onChange={emailAddress.onChange}
                      />
                      <StyledButton
                        type="submit"
                        onClick={() =>
                          emailAddress.value <= 5 ? null : setSubmitted(true)
                        }
                      >
                        Get Early Access
                      </StyledButton>
                    </Form>

                    <CompanyVStack>
                      <CreatedByText>Created by Engineers from</CreatedByText>
                      <LogoIMG2 src={companylogos} />
                    </CompanyVStack>
                  </LowerVStack>
                </MovementAnimationWrapper>
              </ParentVStack>
              <ParentVStack>
                <MovementAnimationWrapper
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.15 }}
                >
                  <Illustration
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ delay: 0.15 }}
                  />
                </MovementAnimationWrapper>
              </ParentVStack>
            </HStack>
          )}
        </Wrapper>
      ) : (
        <MobileWrapper>
          <MovementAnimationWrapper
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <MobileLogo
              src={banabologo}
              initial="hidden"
              animate="visible"
              variants={variants}
            />
          </MovementAnimationWrapper>
          {showNext ? (
            <MobileVStackAlt>
              <MobileH1Text>Thank you!</MobileH1Text>
              <MobileH22Text>We have added your email address</MobileH22Text>
              <MobileH3Text2>
                We'll be launching our early access soon and we're ecstatic to
                have you be a part of it. One of our team members will reach out
                to you via email when your account is ready
              </MobileH3Text2>
            </MobileVStackAlt>
          ) : (
            <div>
              <MovementAnimationWrapper
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
              >
                <MobileContentVStack
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ delay: 0.2 }}
                >
                  <MobileH1Text>
                    Cookieless <br /> Marketing Attribution
                  </MobileH1Text>
                  <MobileH2Text>
                    Capture every touchpoint with perfect accuracy
                  </MobileH2Text>
                  <MobileH3Text>
                    Built on top of anonymous identification. No need to
                    collect, process, or store a visitor’s personal data
                  </MobileH3Text>
                </MobileContentVStack>
              </MovementAnimationWrapper>

              <MovementAnimationWrapper
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 0.62, delay: 0.16 }}
              >
                <MobileForm
                  onSubmit={noRefresh}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ delay: 0.4 }}
                >
                  <MobileInput
                    type="email"
                    placeholder="Enter email address"
                    placeholderTextColor={"red"}
                    value={emailAddress.value}
                    onChange={emailAddress.onChange}
                  />
                  <MobileStyledButton
                    type="submit"
                    onClick={() =>
                      emailAddress.value <= 5 ? null : setSubmitted(true)
                    }
                  >
                    Get Early Access
                  </MobileStyledButton>
                </MobileForm>

                <MobileCompanyVStack>
                  <MobileCreatedByText>
                    Created by Engineers from
                  </MobileCreatedByText>
                  <MobileLogoIMG2 src={companylogos} />
                </MobileCompanyVStack>
              </MovementAnimationWrapper>
            </div>
          )}
        </MobileWrapper>
      )}
    </div>
  );
}
const MobileVStackAlt = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MobileWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  min-height: 100vh;
  min-width: 100vw;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url(${mobilebackgroundv2});
`;

const MobileH3Text2 = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 22px;
  color: #ffffff;
  padding-top: 45px;
  width: 75vw;
  line-height: 32px;
`;

const MobileCompanyVStack = styled.div`
  margin-top: 24px;
  margin-left: 45px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MobileLogoIMG2 = styled.img`
  width: 34%;
  height: 34%;
`;

const MobileCreatedByText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 17px;
  color: #ffffff;
`;

const MobileLogo = styled.img`
  margin-top: 60px;
  margin-left: 45px;
  width: 35%;
  height: 35%;
`;

const MobileContentVStack = styled(motion.div)`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
  margin-left: 45px;
`;

const MobileH1Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 31.5px;
  color: #ffffff;
  line-height: 39px;
`;

const MobileH2Text = styled.div`
  font-family: "ProximaNovaMedium";
  font-size: 22px;
  color: #ffffff;
  line-height: 26px;
  width: 70vw;
`;

const MobileH22Text = styled.div`
  font-family: "ProximaNovaMedium";
  font-size: 20px;
  color: #ffffff;
  line-height: 26px;
  width: 75vw;
`;

const MobileH3Text = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 15px;
  color: #ffffff;
  width: 72vw;
`;

const MobileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 60px;
  margin-left: 45px;
`;

const MobileInput = styled.input`
  font-family: "ProximaNovaSemibold";
  border: none;
  color: #ffffff;
  width: 70vw;
  height: 44px;
  text-decoration: none;
  font-size: 14px;
  background: rgba(40, 21, 45, 0.4);
  border-radius: 10px;
  transition: all 0.2s ease 0s;
  padding-left: 20px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  :focus {
    outline: none;
  }
`;

const MobileStyledButton = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  background: #0097ec;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  width: 76vw;
  height: 44px;

  :hover {
    background: #0087d3;
  }
`;

const Wrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  min-height: 100vh;
  min-width: 100vw;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url(${backgroundv2});
`;

const MovementAnimationWrapper = styled(motion.div)``;

const ParentVStack = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 100px;
`;

const HStack = styled.div`
  margin-left: 90px;
  margin-top: 90px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 190px;
  @media (min-width: 1700px) {
    gap: 420px;
    margin-left: 200px;
    margin-top: 90px;
  }
`;

const LogoIMG1 = styled(motion.img)`
  margin-top: 90px;
  margin-left: 90px;
  width: 15%;
  height: 15%;
  @media (min-width: 1700px) {
    margin-top: 90px;
    margin-left: 200px;
    width: 10%;
    height: 10%;
  }
`;

const LogoIMG2 = styled.img`
  width: 27%;
  height: 27%;
`;

const ContentVStack = styled(motion.div)`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 20px;
`;

const H1Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 60px;
  color: #ffffff;
`;

const H2Text = styled.div`
  font-family: "ProximaNovaMedium";
  font-size: 31px;
  color: #ffffff;
`;

const H3Text = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 22px;
  color: #ffffff;
  width: 540px;
`;

const H3Text2 = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 22px;
  color: #ffffff;
  padding-top: 45px;
  width: 600px;
  line-height: 32px;
`;

const VStackAlt = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LowerVStack = styled(motion.div)`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 27px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const Input = styled.input`
  font-family: "ProximaNovaSemibold";
  border: none;
  color: #ffffff;
  width: 440px;
  height: 62px;
  text-decoration: none;
  font-size: 18px;
  background: rgba(40, 21, 45, 0.4);
  border-radius: 10px;
  transition: all 0.2s ease 0s;
  padding-left: 20px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  :focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 20px;
  color: #ffffff;
  border: none;
  background: #0097ec;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  width: 200px;
  height: 62px;

  :hover {
    background: #0087d3;
  }
`;

const CompanyVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CreatedByText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 22px;
  color: #ffffff;
`;
