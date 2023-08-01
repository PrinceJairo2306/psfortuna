import "./main.scss";

import { useContext, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { MenuContext } from "../../store/MenuContext";

import IntroQoutes from "./About/IntroQoutes";

import Menu from "../menu";

import Experience from "./Experience";
import MyStory from "./Background";
import Notice from "./Notice";
import SideContent from "../common/SideContent";
import About from "./About";

import IndexMobile from "./About/mobileIdex";

const Main = () => {
  const [isAboutVisible, setAboutVisible] = useState(true);

  const onClickHandler = () => {
    setAboutVisible(!isAboutVisible);
  };

  const { isMenuOpen } = useContext(MenuContext);
  const { isLastCurtainDone } = useContext(MenuContext);

  const tl = gsap.timeline({ defaults: { duration: 1 } });

  return (
    <>
      <Menu></Menu>

      {/* for bigger screen */}
      <IntroQoutes
        isAboutVisible={isAboutVisible}
        onClickHandler={onClickHandler}
      />

      <div className={isAboutVisible ? "hidden" : ""}>
        <section className="hidden md:flex bg-black ">
          <div className="pb-10 w-[45%] h-[100vh] "></div>

          <SideContent
            onClickHandler={onClickHandler}
            isAboutVisible={isAboutVisible}
          />

          <div className="w-full font-poppins pr-9 text-c_White">
            <div className=" pt-16 px-7">
              <About isAboutVisible={isAboutVisible} />
              <Experience isAboutVisible={isAboutVisible} />
              <MyStory isAboutVisible={isAboutVisible} />
              <Notice isAboutVisible={isAboutVisible} />
            </div>
          </div>
        </section>
      </div>
      {/* for bigger screen */}
      <IndexMobile></IndexMobile>
    </>
  );
};

export default Main;