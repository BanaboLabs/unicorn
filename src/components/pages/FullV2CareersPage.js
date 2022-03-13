import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../customhooks/useInput";
import backgroundv2 from "../../images/backgroundv3.svg";
import mobilebackgroundv2 from "../../images/mobilebackgroundv2.svg";
import banabologo from "../../images/banabologonew.png";
import companylogos from "../../images/companylogos.svg";
import { motion } from "framer-motion";
import Illustration from "../individual/V2Signup/illustration";
var moment = require("moment");

export default function FullV2SCareersPage() {
  const emailAddress = useInput("");
  const [submitted, setSubmitted] = useState(false);
  const [showNext, setShowNext] = useState(false);

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
    <Wrapper>
      <H1TextWrapper>
        <H1Text>
          Join The <br /> Banabo Team
        </H1Text>
      </H1TextWrapper>
      <BigVStack>
        <BigHStack>
          <LittleVStack>
            <MainText>Product Designer</MainText>
            <BlueRectangle>
              <LittleText>See Role</LittleText>
            </BlueRectangle>
          </LittleVStack>
          <LittleVStack>
            <MainText>Customer Success</MainText>
            <BlueRectangle>
              <LittleText>See Role</LittleText>
            </BlueRectangle>
          </LittleVStack>
        </BigHStack>
        <BigHStack>
          <LittleVStack>
            <MainText>Front-End Engineer</MainText>
            <BlueRectangle>
              <LittleText>See Role</LittleText>
            </BlueRectangle>
          </LittleVStack>
          <LittleVStack>
            <MainText>Back-End Engineer</MainText>
            <BlueRectangle>
              <LittleText>See Role</LittleText>
            </BlueRectangle>
          </LittleVStack>
        </BigHStack>
      </BigVStack>
      <LogoWrapper src={banabologo} />
    </Wrapper>
  );
}

const H1TextWrapper = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 130px;
`;

const LogoWrapper = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

const BigVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 95px;
`;

const LittleVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BigHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 350px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MainText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 31px;
  color: #ffffff;
`;
const BlueRectangle = styled.div`
  width: 105px;
  height: 44.73px;
  background: linear-gradient(0deg, #0097ec, #0097ec), #28152d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;
const LittleText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #ffffff;
`;

const H1Text = styled(motion.div)`
  @media (max-width: 900px) {
    font-size: 31px;
    width: 90vw;
  }
  font-family: "ProximaNovaBold";
  font-size: 60px;
  color: #ffffff;
  line-height: 70px;
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
  @media (max-width: 1000px) {
    background-image: url(${mobilebackgroundv2});
  }
`;

const MovementAnimationWrapper = styled(motion.div)``;

const ParentVStack = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 90px;

  @media (min-width: 1700px) {
    gap: 100px;
  }
`;

const ParentVStack5 = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 90px;

  @media (max-width: 1200px) {
    gap: 100px;
    display: none;
  }
`;

const HStack = styled.div`
  margin-top: 6vh;
  margin-left: 7vw;
  margin-right: 7vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 60px;

  @media (min-width: 900px) and (max-width: 1600px) and (min-height: 720px) {
    margin-top: 9vh;
  }

  @media (min-width: 900px) and (max-width: 1600px) and (max-height: 700px) {
    margin-top: 3vh;
  }

  @media (min-width: 1700px) {
    margin-top: 9vh;
    margin-left: 15vw;
    margin-right: 15vw;
  }
  @media (min-width: 2300px) {
    margin-top: 9vh;
    margin-left: 23vw;
    margin-right: 23vw;
    gap: 80px;
  }
`;

const LogoIMG1 = styled(motion.img)`
  @media (max-width: 900px) {
    width: 35%;
    height: 35%;
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    width: 10%;
    height: 10%;
  }

  @media (max-height: 800px) and (min-width: 1200px) {
    margin-top: 3vh;
    width: 10%;
    height: 10%;
  }

  margin-top: 6vh;
  margin-left: 7vw;
  margin-right: 7vw;
  width: 12%;
  height: 12%;
  @media (min-width: 1700px) {
    margin-top: 9vh;
    margin-left: 15vw;
    margin-right: 15vw;
    width: 9%;
    height: 9%;
  }
  @media (min-width: 2300px) {
    margin-top: 9vh;
    margin-left: 23vw;
    margin-right: 23vw;
  }
`;

const LogoIMG2 = styled.img`
  width: 27%;
  height: 27%;
  @media (max-width: 900px) {
    width: 40%;
    height: 40%;
  }
  @media (min-width: 900px) and (max-width: 1000px) {
    width: 20%;
    height: 20%;
  }
`;

const ContentVStack = styled(motion.div)`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 900px) {
    gap: 15px;
  }
`;

const H2Text = styled(motion.div)`
  @media (max-width: 900px) {
    font-size: 22px;
    width: 72vw;
    line-height: 26px;
  }
  font-family: "ProximaNovaMedium";
  font-size: 31px;
  color: #ffffff;
`;

const H3Text = styled(motion.div)`
  @media (max-width: 900px) {
    font-size: 16px;
    width: 80vw;
  }
  font-family: "ProximaNovaRegular";
  font-size: 22px;
  color: #ffffff;
  width: 540px;
`;

const H2Text2 = styled.div`
  @media (max-width: 900px) {
    font-size: 22px;
    width: 66vw;
    line-height: 26px;
    padding-top: 5px;
  }
  font-family: "ProximaNovaMedium";
  font-size: 31px;
  color: #ffffff;
`;

const H3Text2 = styled.div`
  @media (max-width: 900px) {
    font-size: 18px;
    width: 80vw;
    padding-top: 20px;
  }
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
  margin-bottom: 45px;
  @media (min-width: 1700px) {
    margin-bottom: 0px;
  }
`;

const Form = styled.form`
  @media (max-width: 900px) {
    flex-direction: column;
  }
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const Input = styled.input`
  @media (max-width: 900px) {
    width: 70vw;
    height: 44px;
    text-decoration: none;
    font-size: 14px;
  }

  font-family: "ProximaNovaSemibold";
  border: none;
  color: #ffffff;
  width: 440px;
  height: 62px;
  text-decoration: none;
  font-size: 18px;
  background: rgba(40, 21, 45, 0.45);
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
  @media (max-width: 900px) {
    width: 77.5vw;
    height: 44px;
    font-size: 16px;
  }

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
  gap: 10px;
`;

const CreatedByText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 22px;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;