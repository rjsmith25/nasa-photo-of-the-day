import React from "react";

function Media(props) {
  if (props.mediatype === "video") {
    return (
      <iframe
        title="Nasa Video"
        className="video"
        width="500"
        height="300"
        src={props.url}
      ></iframe>
    );
  }
  if (props.mediatype === "image") {
    return (
      <img
        style={{ width: "500px", height: "300", maxWidth: "100%" }}
        src={props.url}
        alt="Nasa"
      />
    );
  }
}

export default Media;
