import { useRef, useEffect, useContext, useState } from "react";

import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { DiYii } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import SvnLogo from "../../../assets/svn.png";

const About = (props) => {
  const profileContext = useRef(null);
  const arsenalBox1 = useRef(null);
  const arsenalBox2 = useRef(null);

  useEffect(() => {
    const profileContextEl = profileContext.current;
    const arsenalBox1El = arsenalBox1.current;
    const arsenalBox2El = arsenalBox2.current;

    gsap.fromTo(
      profileContextEl,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );

    gsap.fromTo(
      arsenalBox1El,
      { y: 50, opacity: 0 },
      { duration: 1, y: 0, x: 0, opacity: 1, delay: 0.4 }
    );

    gsap.fromTo(
      arsenalBox2El,
      { y: 50, opacity: 0 },
      { duration: 1, y: 0, x: 0, opacity: 1, delay: 0.7 }
    );
  }, [props.isAboutVisible]);

  return (
    <>
      <div className="space-y-6 h-[100vh]">
        <div className="">
          <h1 className="text-3xl font-semibold pb-2 ">PROFILE</h1>
          <div ref={profileContext} className="profile-context">
            <p className="leading-loose mx-auto opacity-95 indent-10 ">
              Currently based in the Philippines, I am a full-stack developer
              who specializes in web development. If not{" "}
              <span className="text-c_Orange">coding</span>, you'll usually find
              me reading <span className="text-c_Orange">manga</span> and{" "}
              <span className="text-c_Orange">manhwa</span> or browsing
              <span className="text-c_Orange"> tech-related stuff</span> on the
              internet. If you have any cool web-related ideas, let's make them
              happen! I love exploring and executing new things. Recently, I've
              also taken an interest in studying UX, with the goal of enhancing
              my skills in that area.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold pb-5  ">ARSENAL</h1>
          {/* bg-[#1a1a1a] */}
          <div className=" ">
            <div className="mx-auto opacity-95 pb-2 indent-10 text-justify">
              <div className="flex justify-around">
                <div
                  ref={arsenalBox1}
                  className="flex  bg-[#1a1a1a] px-12 py-6    rounded-md "
                >
                  <div className="space-y-4 ">
                    <span className="flex ">
                      <SiJavascript className="text-[35px]" />
                      <p className="text-sm relative -left-7 ">
                        Javascript(ES6+)
                      </p>
                    </span>
                    <span className="flex items-center  ">
                      <GrReactjs className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">React</p>
                    </span>
                    <span className="flex items-center  ">
                      <SiRedux className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Redux</p>
                    </span>
                    <span className="flex items-center  ">
                      <FaNodeJs className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">NodeJs</p>
                    </span>
                  </div>
                  <div className="space-y-4">
                    <span className="flex ">
                      <SiPhp className="text-[35px]" />
                      <p className="text-sm relative -left-7 ">Php</p>
                    </span>
                    <span className="flex items-center  ">
                      <SiLaravel className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Laravel</p>
                    </span>
                    <span className="flex items-center  ">
                      <DiYii className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Yii(1.1)</p>
                    </span>
                    <span className="flex items-center  ">
                      <SiJquery className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Jquery</p>
                    </span>
                  </div>
                </div>
                <div
                  ref={arsenalBox2}
                  className="flex bg-[#1a1a1a] px-12 py-6 rounded-md"
                >
                  <div className="space-y-4 ">
                    <span className="flex ">
                      <SiMicrosoftsqlserver className="text-[35px]" />
                      <p className="text-sm relative -left-7 ">MsSQL</p>
                    </span>
                    <span className="flex items-center  ">
                      <SiMysql className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Mysql</p>
                    </span>
                    <span className="flex items-center  ">
                      <BsGit className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Git</p>
                    </span>
                    <span className="flex items-center  ">
                      <img className="w-[40px]" src={SvnLogo} alt="" />
                      <p className="text-sm relative -left-8">Tortoise SVN</p>
                    </span>
                  </div>
                  <div className="space-y-4">
                    <span className="flex ">
                      <IoLogoCss3 className="text-[35px]" />
                      <p className="text-sm relative -left-7 ">Css</p>
                    </span>
                    <span className="flex items-center  ">
                      <SiTailwindcss className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Tailwind</p>
                    </span>
                    <span className="flex items-center  ">
                      <FaBootstrap className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">Bootstrap</p>
                    </span>
                    <span className="flex items-center  ">
                      <BiDotsHorizontalRounded className="text-[35px] " />
                      <p className="text-sm relative -left-7 ">(etc)</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
