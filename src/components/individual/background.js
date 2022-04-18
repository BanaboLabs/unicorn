import React, { useState, useEffect } from "react";
import styled from "styled-components";
import unicorn from "../../images/unicornbackground.svg";

export default function BackgroundMain() {
  return (
    <ParentWrapper>
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
      <Background src={unicorn} />
    </ParentWrapper>
  );
}

const ParentWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0;
`;

const Background = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
