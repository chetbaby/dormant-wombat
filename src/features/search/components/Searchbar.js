import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 75%;
  max-width: 400px;
  display: block;
  height: 28px;
  padding: 0 5px;
  font-size: 20px;
  letter-spacing: 0.01rem;
  margin: 15px auto;
  background-color: white;

  @media (min-width: 768px) {
    height: 36px;
    font-size: 30px;
    margin: 30px auto;
  }
`;

const Searchbar = (props) => {
  return <StyledInput {...props} />;
};

export default Searchbar;
