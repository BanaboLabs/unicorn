import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import computer from "../images/computer.svg";

export default function BottomPortion() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(true);
  const [opacityExtra, setOpacityExtra] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 4420) {
      setOpacity(false);
    }
    if (scrollPosition < 4420) {
      setOpacity(true);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (scrollPosition > 4420) {
      setOpacityExtra(scrollPosition - 4420);
    }
  }, [scrollPosition]);

  return (
    <Wrapper>
      <ContentWrapper>
        <SubContentWrapper>
          <Group1
            highlighted={opacity}
            scrollposition={scrollPosition}
            opacityExtra={opacityExtra}
          >
            <Header>Meet</Header>
            <Title>Sandbox</Title>
          </Group1>
          <Group2
            highlighted={opacity}
            scrollposition={scrollPosition}
            opacityExtra={opacityExtra}
          >
            <CenteredImg src={computer} alt="growth" />
          </Group2>
        </SubContentWrapper>

        <StyledButton
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Try Sandbox
        </StyledButton>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  align-items: center;
  background-color: #21212b;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px;
`;

const SubContentWrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-size: 80px;
  background: linear-gradient(90deg, #265de3, #af71ff);
  -webkit-background-clip: text;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  line-height: 100px;
  color: transparent;
`;

const Header = styled.div`
  font-family: "ProximaNova-Semibold";
  font-size: 22px;
  text-align: center;
  color: white;
`;

const Group1 = styled.div`
  display: grid;
  grid-gap: 0px;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) =>
    (props.scrollposition / 490) * 0.1 + props.opacityExtra * 0.01};
  transition-property: opacity;
  transition-duration: 1.5s;
  position: relative;
  max-width: 100%;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  margin-bottom: 50px;
  margin-top: 80px;

  @media (max-width: 1280px) {
    opacity: 1;
    transform: none;
  }
`;

// for each increment past 4420 increase the scroll position by one

const Group2 = styled.div`
  display: grid;
  grid-gap: 0px;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) =>
    (props.scrollposition / 4380) * 0.1 + props.opacityExtra * 0.01};
  transform: ${(props) => (props.scrollposition >= 4180 ? null : `scale(1.4)`)};
  transition-duration: 1.5s;
  transition-delay: 0.5s;
  transform-origin: 50% 50% 50%;
  margin: 0 auto;

  @media (max-width: 1280px) {
    opacity: 1;
    transform: none;
  }
`;

const CenteredImg = styled.img`
  margin: 0 auto;
  text-align: center;
  @media (max-width: 780px) {
    width: 600px;
  }
`;

const StyledButton = styled.button`
  font-family: "ProximaSoft-Bold";
  font-size: 19px;
  color: #ffffff;
  border: none;
  width: 180px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  background: linear-gradient(90deg, #265de3, #af71ff);
  margin-top: 50px;
  margin-bottom: 10px;
  padding-bottom: 5px;

  :hover {
    background: linear-gradient(90deg, #0848e5, #8323fe);
  }
`;

//  transform: ${(props) => (props.highlighted ? "scale(3)" : "scale(1)")};
