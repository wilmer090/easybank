import React from "react";
import "../assets/styles/Modal.css";
import MenuList from "./MenuList";
const Modal = ({ updateMenu }) => {
  const handleClose = () => {
    updateMenu(false);
  };
  return (
    <div className="modal_wrapper">
      <div className="modal_content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <MenuList />
      </div>
    </div>
  );
};

export default Modal;
