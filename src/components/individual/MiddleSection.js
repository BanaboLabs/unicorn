import React from "react";
import styled from "styled-components";
import featuregrouplarge from "../../images/featuregrouplarge.svg";
import featuregroupsmall from "../../images/featuregroupsmall.svg";
import featuregrouptiny from "../../images/featuregrouptiny.svg";

export default function MiddleSection() {
  return (
    <ParentWrapper>
      <Wrapper>
        <ContentWrapper>
          <CenteredImgLarge src={featuregrouplarge} alt="growth" />
          <CenteredImgSmall src={featuregroupsmall} alt="growth" />
          <CenteredImgTiny src={featuregrouptiny} alt="growth" />
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
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: -webkit-flexbox; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-flexbox; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5vh;
`;

const CenteredImgLarge = styled.img`
  text-align: center;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const CenteredImgSmall = styled.img`
  text-align: center;
  display: none;
  @media (max-width: 720px) {
    width: 100%;
  }
  @media (min-width: 720px) {
    display: block;
  }
  @media (min-width: 1080px) {
    display: none;
  }
`;

const CenteredImgTiny = styled.img`
  text-align: center;
  display: none;
  @media (max-width: 720px) {
    display: block;
    width: 100%;
  }
`;
