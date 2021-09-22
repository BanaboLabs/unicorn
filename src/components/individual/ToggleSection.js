import React, { useState, useEffect } from "react";
import styled from "styled-components";
import withbanabo from "../../images/withbanabo.svg";
import withoutbanabo from "../../images/withoutbanabo.svg";

export default function ToggleSection() {
  const [toggle, toggleSelected] = useState(false);
  const [rightvalue, rightValueSelected] = useState(false);
  const [widthvalue, widthValueSelected] = useState(false);

  useEffect(() => {
    rightValueSelected(!rightvalue);
    widthValueSelected(!widthvalue);
  }, [toggle]);

  return (
    <ContentWrapper>
      <Container onClick={() => toggleSelected(!toggle)}>
        <Button rightvalue={rightvalue} widthvalue={widthvalue} />
        <TextWrapper>
          <Text>Without Banabo</Text>
          <Text>With Banabo</Text>
        </TextWrapper>
      </Container>
      <div>
        {toggle == true ? (
          <img src={withoutbanabo} />
        ) : (
          <img src={withbanabo} />
        )}
      </div>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: -webkit-flexbox; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-flexbox; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5vh;
`;

const Container = styled.div`
  width: 278px;
  height: 38px;
  background: #47475e;
  border-radius: 60px;
  position: relative;
  cursor: pointer;
  transition: all 0.9s ease;
`;

const Button = styled.div`
  width: ${(props) => (props.widthvalue ? 154 : 134)}px;
  height: 38px;
  background: #2194ff;
  border-radius: 60px;
  position: absolute;
  will-change: transform;
  transition: transform 0.4s ease-out;
  right: ${(props) => (props.rightvalue ? "none" : 0)};
`;

// 1) Needs to move
// 2) Needs to expand

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 290px;
`;

const Text = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: white;
  padding-top: 10px;
  padding-left: 20px;
  width: 200px;
  height: 32px;
`;

/*

{toggle == true ? (
          <img src={withoutbanabo} />
        ) : (
          <img src={withbanabo} />
        )} */
