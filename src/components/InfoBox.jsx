import React from "react";
import "../assets/styles/InfoBox.css";
const InfoBox = ({ thumbNail, header, text }) => {
  return (
    <div className="infobox_wrapper center-item center-text">
      <img src={`${thumbNail}`} alt="" />
      <h2 className="light-text">{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default InfoBox;
