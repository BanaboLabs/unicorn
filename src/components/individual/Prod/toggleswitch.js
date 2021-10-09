import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ToggleSwitch(props) {
  const [toggle, toggleSelected] = useState(true);
  const [rightvalue, rightValueSelected] = useState(true);
  const [widthvalue, widthValueSelected] = useState(true);
  const [current, setCurrent] = useState(false);

  useEffect(() => {
    rightValueSelected(!rightvalue);
    widthValueSelected(!widthvalue);
    setCurrent(!current);
  }, [toggle]);

  useEffect(() => {
    props.sendToParent(current); // This is the mounting part
  }, [current]);

  return (
    <ContentWrapper>
      <Container
        onClick={() => toggleSelected(!toggle)}
        positionvalue={rightvalue}
      >
        <Button widthvalue={widthvalue}></Button>
        <TextWrapper>
          <Text1 positionvalue={rightvalue}>Without Banabo</Text1>
          <Text2 positionvalue={rightvalue}>With Banabo</Text2>
        </TextWrapper>
      </Container>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 560px;
  height: 73px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 60px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 900px) {
    background-image: none;
    width: 331px;
    height: 43px;
  }
`;

const Button = styled.div`
  width: ${(props) => (props.widthvalue ? 290 : 275)}px;
  height: 72px;
  background: #379eff;
  border-radius: 60px;
  transition: all 0.25s linear;
  transition-timing-function: ease-in-out;
  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  position: absolute;
  left: ${(props) => (props.widthvalue ? 0 : 285)}px;

  @media (max-width: 900px) {
    left: ${(props) => (props.widthvalue ? 0 : 170)}px;
    width: ${(props) => (props.widthvalue ? 180 : 160)}px;
    height: 43px;
  }
`;

const TextWrapper = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  display: flex;
  flex-direction: row;
  gap: 100px;
  position: absolute;
  padding: 60px;
  @media (max-width: 900px) {
    gap: 25px;
    padding: 30px;
  }
`;

const Text1 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 26px;
  color: "#252531";
  @media (max-width: 900px) {
    font-size: 16px;
    width: 150px;
  }
`;

const Text2 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 26px;
  color: "#252531";
  @media (max-width: 900px) {
    font-size: 16px;
    width: 150px;
  }
`;
