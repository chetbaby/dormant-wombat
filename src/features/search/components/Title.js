import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 0 0 20px;
  text-transform: uppercase;

  @media (min-width: 768px) {
  font-size: 44px;
  margin-bottom: 25px;
  }
`;

const Title = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default Title;

