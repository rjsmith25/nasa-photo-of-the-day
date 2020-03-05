import React from "react";
import Media from "../Media";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 32px;
  color: white;
  margin-bottom: 10px;
`;

const Explanation = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
`;

function NasaInfo(props) {
  let { title, media_type, explanation, url } = props.data;
  if (!title) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="Info">
      <div className="container">
        <Title>{title}</Title>
        <Media mediatype={media_type} url={url} />
        <Explanation>{explanation}</Explanation>
      </div>
    </div>
  );
}

export default NasaInfo;
