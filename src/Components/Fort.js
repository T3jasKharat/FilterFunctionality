// Fort.js

import React from "react";

const Fort = ({ imageUrlData, searchResult, typeOfData }) => {
  const imageUrl = imageUrlData.url;
  const title = searchResult.title;
  const truncatedTitle =
    title.length > 15 ? title.substring(0, 15) + "..." : title;
  // const type = typeOfData.values.value;

  return (
    <div className="forts">
      <img className="img" src={imageUrl} alt="fort" />
      <div className="overlay-text">{truncatedTitle}</div>
      <div className="overlay-text">Type: {typeOfData}</div>
    </div>
  );
};

export default Fort;
