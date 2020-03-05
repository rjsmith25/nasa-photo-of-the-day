import React from "react";
import styled from "styled-components";

const Video = styled.iframe`
  width: 500px;
  height: 300px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 500px;
  height: 300px;
  max-width: 100%;
`;

function Media({ mediatype, url }) {
  if (mediatype === "video") {
    return <Video title="Nasa Video" src={url} />;
  }
  if (mediatype === "image") {
    return <Image src={url} alt="Nasa" />;
  }
}

export default Media;
