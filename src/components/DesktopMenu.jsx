import React from "react";
import Button from "./Button";
import MenuList from "./MenuList";
import logo from "../assets/img/logo.svg";
import "../assets/styles/DesktopMenu.css";
const DesktopMenu = () => {
  return (
    <main className="desktop_menu_wrapper body-margin">
      <img src={`${logo}`} className="logo" />
      <MenuList />
      <Button title={"Request Invite"} />
    </main>
  );
};

export default DesktopMenu;
