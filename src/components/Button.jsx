import React from "react";
import "../assets/styles/Button.css";

const Button = ({ title }) => {
  return (
    <>
      <button className="primary_button">{title}</button>
    </>
  );
};

export default Button;
