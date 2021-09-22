import React from "react";
import styled from "styled-components";
import featuregroup from "../../images/featuregroup.svg";
import GroupIllustrationsSmall from "../../images/groupillustrationssmall.svg";

export default function MiddleSection() {
  return (
    <ContentWrapper>
      <CenteredImgLarge src={featuregroup} alt="growth" />
      <CenteredImgSmall src={GroupIllustrationsSmall} alt="growth" />
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

const CenteredImgLarge = styled.img`
  text-align: center;
  @media (max-width: 1280px) {
    display: none;
  }
  @media (min-width: 2100px) {
    margin-left: 40px;
  }
`;

const CenteredImgSmall = styled.img`
  text-align: center;
  display: none;
  @media (max-width: 1280px) {
    display: block;
  }
  @media (max-width: 780px) {
    width: 600px;
  }
`;
