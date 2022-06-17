import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import useWindowSize from "../customHooks/useWindowSize";
import DesktopMenu from "./DesktopMenu";
import DesktopFooter from "./DesktopFooter";

const Layout = ({ children }) => {
  const size = useWindowSize();

  return (
    <>
      {size.width < 700 ? <Menu /> : <DesktopMenu />}
      <main>{children}</main>
      {size.width < 700 ? <Footer /> : <DesktopFooter />}
    </>
  );
};

export default Layout;
