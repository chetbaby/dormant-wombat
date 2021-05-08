import React from "react";
import styled from "styled-components";

import {
  POSTER_BASE_URL,
  POSTER_PLACEHOLDER_URL,
} from "../../search/ducks/searchConstants";

const POSTER_SIZE = 200;

const StyledThumbnail = styled.img.attrs((props) => ({
  src: props.url,
  alt: props.title,
}))`
  width: 125px;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 150px;
  }
`;

const PosterThumbnail = ({ url, title }) => {
  let posterUrl = `${POSTER_BASE_URL}w${POSTER_SIZE}/${url}`;
  if (!url) {
    posterUrl = POSTER_PLACEHOLDER_URL;
  }
  return <StyledThumbnail url={posterUrl} title={title} />;
};

export default PosterThumbnail;
