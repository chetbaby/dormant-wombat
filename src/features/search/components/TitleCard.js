import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

import PosterThumbnail from "./PosterThumbnail";

const StyledCard = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 15px 0;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    line-height: 20px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 24px;
    }
  }

  span {
    display: inline-block;
    margin-top: 5px;
    font-size: 15px;
    font-style: italic;
    color: dimGray;

    @media (min-width: 768px) {
      margin-top: 10px;
      font-size: 20px;
    }
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

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

const CopyWrapper = styled.div`
  margin-left: 15px;

  @media (min-width: 768px) {
    margin-left: 25px;
  }
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
