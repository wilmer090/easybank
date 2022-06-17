import React from "react";
import "../assets/styles/Card.css";
const Card = ({ thumbNail, author, title, text }) => {
  return (
    <div className="card_wrapper">
      <div
        style={{
          background: `url(${thumbNail})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "200px",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
      />
      <div className="spacing">
        <small>By {author}</small>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
