import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

import PosterThumbnail from "./PosterThumbnail";

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
      <PosterThumbnail url={poster} alt={title} />
      <CopyWrapper>
        <h2>{title}</h2>
        <span>{year}</span>
        <p>{blurb}</p>
        <ReactStars size={20} value={rating / 2} edit={false} />
      </CopyWrapper>
    </StyledCard>
  );
};

export default TitleCard;
