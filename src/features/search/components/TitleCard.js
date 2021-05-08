import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  h2 {
    font-size: 20px;
  }

  span {
    font-size: 30px;
  }

  p {
    font-color: green;
  }
`;

const TitleCard = ({ data }) => {
  const { title, year, blurb, rating } = data;
  return (
    <StyledCard>
      <h2>{title}</h2>
      <span>{year}</span>
      <p>{blurb}</p>
      <div>{rating}</div>
    </StyledCard>
  );
};

export default TitleCard;
