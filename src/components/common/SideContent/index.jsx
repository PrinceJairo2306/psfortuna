import { useRef, useEffect, useContext, useState } from "react";

import moonImage from "./moon-photo.png";
import DisplayPicture from "../../../assets/nobackgroundsquare.jpg.png";
import cvFile from "../../../assets/pdf/Resume - Prince Jairo Fortuna.pdf";

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
      <div className="pb-10 pl-10 fixed  w-[30%] h-[100vh] rounded flex items-end 2xl:items-center  bg-[#1a1a1a]">
        {/* put the side scroll here  bg-[#1a1a1a]*/}

        <div className=" pt-48">
          {/* intro */}
          <div className="w-3/4    font-poppins flex  text-c_White ">
            <GiFrogPrince
              onClick={props.onClickHandler}
              className=" text-[50px] text-c_Orange  z-30 absolute top-5 left-5"
            />
            <div>
              <div className=" 2xl:space-y-3">
                <p ref={animateHello} className="text-[16px] 2xl:text-[22px]">
                  {" "}
                  Hello, I'm{" "}
                </p>

                <div
                  ref={animateFullName}
                  className="text-3xl 2xl:text-5xl font-bold "
                >
                  <h1>PRINCE JAIRO </h1>
                  <span className="text-[56px] 2xl:text-[88px] text-c_Orange">
                    FORTUNA.
                  </span>
                </div>
                <p
                  ref={animateJobTitle}
                  className="text-base 2xl:text-[26px] text-c_Orange font-extrabold"
                >
                  Software Developer
                </p>

                <div className="space-y-6 pt-2 ">
                  <div
                    ref={animateIntroMessage}
                    className="text-left text-sm w-[67%]  2xl:w-[66%] 2xl:text-[16px]"
                  >
                    {" "}
                    People would usually call me Prince or Jai. However, any
                    name you <br className="hidden 2xl:block" /> use is
                    perfectly fine with me. <br className="hidden 2xl:block" />{" "}
                    Just refrain from calling me{" "}
                    <br className="hidden 2xl:block" /> cute , I wouldn't want
                    to start believing it.
                  </div>

                  <a
                    ref={animateDownloadCvBtn}
                    className="inline-block bg-c_Black border text-white border-c_Orange p-3 2xl:p-6 2xl:px-10  font-extralight"
                    href={cvFile}
                    download="CV - Prince Jairo Fortuna.pdf"
                  >
                    Download CV
                  </a>

                  <div className="text-2xl 2xl:text-3xl text-c_Orange flex justify-between w-44 2xl:w-60">
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
          </div>
        </div>
        {/* image */}

        <div className="absolute w-[180px] left-52 bottom-36 2xl:w-[260px] 2xl:left-72 2xl:bottom-48">
          <img
            className="border-r-2 border-c_Orange rounded-[100%]"
            src={DisplayPicture}
            alt=""
          />
          <div
            className="absolute inset-4 rounded-full animate-blob2"
            style={{
              backgroundImage: `url(${moonImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1, // Set a negative z-index to position it behind the image
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SideContent;
