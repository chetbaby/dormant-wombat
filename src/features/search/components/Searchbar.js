import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
  display: block;
  height: 28px;
  padding: 0 5px;
  font-size: 20px;
  letter-spacing: 0.01rem;
  margin: 15px auto;
`;

const Searchbar = (props) => {
  return <StyledInput {...props} />;
};

export default Searchbar;
