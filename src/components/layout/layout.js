import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 3rem auto;
  max-width: 600px;
  background: red;
  margin-top: 500px;
`;

export default ({ site, frontmatter = {}, children }) => {
  return <Section>{children}</Section>;
};
