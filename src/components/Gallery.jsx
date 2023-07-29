import React from "react";
import "../css/Gallery.css";

export default function Gallery({ array, size }) {


  return (
    <>
      <div className="gallery-page">
        {array.map((link, index) => (
          <img key={index} src={link} className={`gallery-img ${size}-img`} alt="" />
        ))}
      </div>
    </>
  );
}
