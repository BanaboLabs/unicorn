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
      <Wrapper></Wrapper>
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
  width: 82vw;
  margin-top: 20px;
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
  margin-top: 55px;
  margin-left: 45px;
  width: 35%;
  height: 35%;
`;

const MobileContentVStack = styled(motion.div)`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  margin-left: 45px;
`;

const MobileH1Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 31px;
  color: #ffffff;
  line-height: 37px;
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
  width: 85vw;
`;

const MobileH3Text = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 15px;
  color: #ffffff;
  margin-top: 4px;
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
  gap: 90px;

  @media (min-width: 1700px) {
    gap: 100px;
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
  margin-top: 6vh;
  margin-left: 7vw;
  margin-right: 7vw;
  width: 11%;
  height: 11%;
  @media (min-width: 1700px) {
    margin-top: 9vh;
    margin-left: 15vw;
    margin-right: 15vw;
    width: 10%;
    height: 10%;
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
  margin-bottom: 45px;
  @media (min-width: 1700px) {
    margin-bottom: 0px;
  }
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
