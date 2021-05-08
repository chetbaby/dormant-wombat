import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Title = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default Title;

