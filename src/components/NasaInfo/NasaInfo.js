import React from "react";
import Media from "../Media";

function NasaInfo(props) {
  let { title, media_type, explanation, url } = props.data;
  if (!title) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="Info">
      <div className="container">
        <h2 className="title">{title}</h2>
        <Media mediatype={media_type} url={url} />
        <p className="explanation">{explanation}</p>
      </div>
    </div>
  );
}

export default NasaInfo;
