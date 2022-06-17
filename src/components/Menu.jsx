import React, { useState } from "react";
import burger from "../assets/img/icon-hamburger.svg";
import logo from "../assets/img/logo.svg";
import Modal from "./Modal";
const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (e) => {
    setOpenMenu((openMenu) => !openMenu);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img src={`${logo}`} style={{ padding: "1em" }} alt="" />
      </div>
      <div>
        <img
          src={`${burger}`}
          style={{ transform: "translate(-70%, 15px)" }}
          onClick={handleClick}
          alt=""
        />
      </div>
      {openMenu && <Modal updateMenu={setOpenMenu} />}
    </div>
  );
};

export default Menu;
