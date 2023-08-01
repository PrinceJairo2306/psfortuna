import "./menu.css";

import { useState, useContext } from "react";

import HamburgerBtn from "./Hamburger";
import CurtainEffect from "./Curtain";
import Icons from "../common/Icons";
import Links from "./MenuLinks";
import Footer from "./MenuFooter";
import { MenuContext } from "../../store/MenuContext.jsx";

const Menu = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const [ismenuFinishedOpenning, setIsMenuFinishedOpenning] = useState(false);
  const [isMenuFinishedDelayDone, setIsMenuFinishedDelayDone] = useState(false);

  const menuClickHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
    setTimeout(() => {
      setIsMenuFinishedOpenning((prevState) => !prevState);
      setTimeout(() => {
        setIsMenuFinishedDelayDone((prevState) => !prevState);
      }, 1000);
    }, 500);
  };

  return (
    <>
      <HamburgerBtn onClickHandler={menuClickHandler} />
      <CurtainEffect
        isMenuOpen={isMenuOpen}
        ismenuFinishedOpenning={ismenuFinishedOpenning}
      />
      <Icons
        isMenuOpen={isMenuOpen}
        isMenuFinishedDelayDone={isMenuFinishedDelayDone}
      />
      <Links
        isMenuOpen={isMenuOpen}
        ismenuFinishedOpenning={ismenuFinishedOpenning}
      />
      <Footer
        isMenuOpen={isMenuOpen}
        isMenuFinishedDelayDone={isMenuFinishedDelayDone}
      />
    </>
  );
};

export default Menu;
