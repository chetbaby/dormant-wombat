import React from "react";
import styled from "styled-components";

const StyledThumbnail = styled.img.attrs((props) => ({
  src: props.url,
  alt: props.title,
}))`
  width: 125px;
  object-fit: contain;
`;

const PosterThumbnail = ({ url, title }) => (
  <StyledThumbnail url={url} title={title} />
);

export default PosterThumbnail;
