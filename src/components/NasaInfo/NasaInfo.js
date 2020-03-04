import React from "react";
import Media from "../Media";

function NasaInfo(props) {
  if (!props.data.title) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="Info">
      <div className="container">
        <h2 className="title">{props.data.title}</h2>
        <Media mediatype={props.data.media_type} url={props.data.url} />
        <p className="explanation">{props.data.explanation}</p>
      </div>
    </div>
  );
}

export default NasaInfo;
