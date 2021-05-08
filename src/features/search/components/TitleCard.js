import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import { POSTER_BASE_URL } from "../../search/ducks/searchConstants";
import PosterThumbnail from "./PosterThumbnail";

const POSTER_SIZE = 200;

const StyledCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;

  h2 {
    margin: 0;
    font-size: 20px;
    line-height: 20px;
  }

  span {
    display: inline-block;
    margin-top: 5px;
    font-size: 15px;
    font-style: italic;
    color: dimGray;
  }

  p {
    margin: 5px 0;
    color: dimGray;
    font-size: 15px;
    display: block;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const CopyWrapper = styled.div`
  margin-left: 15px;
`;

const TitleCard = ({ data }) => {
  const { poster, title, year, blurb, rating } = data;
  return (
    <StyledCard>
      <PosterThumbnail
        url={`${POSTER_BASE_URL}w${POSTER_SIZE}/${poster}`}
        alt={title}
      />
      <CopyWrapper>
        <h2>{title}</h2>
        <span>{format(new Date(year), "y")}</span>
        <p>{blurb}</p>
        <div>{rating}</div>
      </CopyWrapper>
    </StyledCard>
  );
};

export default TitleCard;
