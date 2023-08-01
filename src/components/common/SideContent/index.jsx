import { useRef, useEffect, useContext, useState } from "react";

import moonImage from "../../../assets/moon-photo.png";
import DisplayPicture from "../../../assets/nobackgroundsquare.jpg.png";

import { GiFrogPrince } from "react-icons/gi";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const SideContent = (props) => {
  const animateHello = useRef(null);
  const animateFullName = useRef(null);
  const animateJobTitle = useRef(null);
  const animateIntroMessage = useRef(null);
  const animateDownloadCvBtn = useRef(null);

  useEffect(() => {
    const animateJobTitleEl = animateJobTitle.current;
    const animateFullNameEl = animateFullName.current;
    const animateHelloEl = animateHello.current;
    const animateIntroMessageEl = animateIntroMessage.current;
    const animateDownloadCvBtnEl = animateDownloadCvBtn.current;
    gsap.fromTo(
      animateHelloEl,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    );
    gsap.fromTo(
      animateFullNameEl,
      { x: -500, opacity: 1 },
      { x: 0, opacity: 1, duration: 1.5, ease: "elastic(.4, 0.3)" }
    );
    gsap.fromTo(
      animateJobTitleEl,
      { y: 10, opacity: 0 },
      { y: 0, x: 0, opacity: 1, delay: 0.7 }
    );
    gsap.fromTo(
      animateIntroMessageEl,
      { y: 10, opacity: 0 },
      { y: 0, x: 0, opacity: 1, delay: 0.9 }
    );
    gsap.fromTo(
      animateDownloadCvBtnEl,
      { y: 10, opacity: 0 },
      { y: 0, x: 0, opacity: 1, delay: 1.2 }
    );
  }, [props.isAboutVisible]);
  return (
    <>
      {" "}
      <div className="pb-10 pl-10 fixed  w-[30%] h-[100vh] rounded flex justify-end items-end  bg-[#1a1a1a]">
        {/* put the side scroll here  bg-[#1a1a1a]*/}

        <div className="py-2">
          {/* intro */}
          <div className="w-3/4    font-poppins flex  text-c_White ">
            <GiFrogPrince
              onClick={props.onClickHandler}
              className=" text-[50px] text-c_Orange  z-30 absolute top-5 left-5"
            />
            <div>
              <div className=" ">
                <p ref={animateHello} className="text-[16px]">
                  {" "}
                  Hello, I'm{" "}
                </p>

                <div ref={animateFullName} className="text-3xl font-bold">
                  <h1>PRINCE JAIRO </h1>
                  <span className="text-[56px] md:text-6xl text-c_Orange">
                    FORTUNA.
                  </span>
                </div>
                <p
                  ref={animateJobTitle}
                  className="text-base text-c_Orange font-extrabold"
                >
                  Software Developer
                </p>

                <div className="space-y-6 pt-2 ">
                  <div
                    ref={animateIntroMessage}
                    className=" text-left text-sm w-[67%]  "
                  >
                    {" "}
                    People would usually call me Prince or Jai. However, any
                    name you use is perfectly
                    <div>
                      fine with me. Just refrain <br /> from calling me cute , I
                      wouldn't want to start believing it.
                    </div>
                  </div>

                  <button
                    ref={animateDownloadCvBtn}
                    className="bg-c_Black border text-white border-c_Orange p-3 font-extralight"
                  >
                    Download CV
                  </button>

                  <div className="text-2xl text-c_Orange flex justify-between w-40 md:w-44">
                    <span>
                      <GrLinkedin className="" />
                    </span>
                    <span>
                      <GrTwitter className="" />
                    </span>
                    <span>
                      <GrFacebook className="" />
                    </span>
                    <span>
                      <GrGithub className="" />
                    </span>
                    <span>
                      <GrMail className="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* image */}
            <div></div>
            <div className="absolute z-10 top-[47%] left-[40%]  ">
              <img
                className="border-r-2 border-c_Orange  w-[250px]  rounded-[100%]"
                src={DisplayPicture}
                alt=""
              />
            </div>
            <div className="z-0 absolute left-[200px] bottom-[110px]">
              <div className="">
                <div
                  className={`md:w-[170px] opacity-100  rounded-full  filter animate-blob2 `}
                >
                  <img className="" src={moonImage} alt="" />
                </div>
              </div>
            </div>

            <div></div>
            {/* content */}
          </div>
          {/* intro */}
        </div>
      </div>
    </>
  );
};

export default SideContent;
