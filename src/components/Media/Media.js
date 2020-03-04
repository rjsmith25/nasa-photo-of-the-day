import React from "react";

function Media({ mediatype, url }) {
  if (mediatype === "video") {
    return (
      <iframe
        title="Nasa Video"
        className="video"
        width="500"
        height="300"
        src={url}
      ></iframe>
    );
  }
  if (mediatype === "image") {
    return (
      <img
        style={{ width: "500px", height: "300", maxWidth: "100%" }}
        src={url}
        alt="Nasa"
      />
    );
  }
}

export default Media;
