import LogoImage from "../../../assets/FinalLogo-removebg.png";
import DisplayPicture from "../../../assets/nobackgroundsquare.jpg.png";
import moonImage from "../../../assets/moon-photo.png";
import In1goLogo from "../../../assets/1go-logo.svg";
import cvFile from "../../../assets/pdf/Resume - Prince Jairo Fortuna.pdf";
import { useRef, useEffect, useContext, useState } from "react";
import "../main.scss";
import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { MenuContext } from "../../../store/MenuContext";

import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

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
import { BsFillSignDeadEndFill } from "react-icons/bs";

import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { GiImbricatedArrows } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineCopyright } from "react-icons/ai";
import SvnLogo from "../../../assets/svn.png";

import IntroQoutes from "./IntroQoutes";
import SplitType from "split-type";
import Menu from "../../menu";

const IndexMobile = () => {
  const profileImage = useRef(null);
  // const moonBlobRef = useRef(null);
  // const blob = useRef(null);

  const [isTriggerActivated, setIsTriggerActivated] = useState(false);

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
    ScrollTrigger.create({
      trigger: animateHelloEl,
      start: "top bottom",
      end: "center center",
      // markers:true,
      scrub: true,

      onEnter: () => {
        gsap.fromTo(
          animateHelloEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5 }
        );
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
      },
    });
  }, []);

  //the first scroll
  const moon = useRef(null);
  const moonImagetest = useRef(null);
  useEffect(() => {
    const moonEl = moon.current;
    const moonImageEl = moonImagetest.current;
    ScrollTrigger.create({
      trigger: moonEl,
      start: "top 80%",
      end: "center center",
      // markers:true,
      scrub: true,
      onEnter: () => {
        gsap.to(moonImageEl, {
          scale: 1.4,
          y: "800px",
          x: "130px",
          duration: 3.0,
        });
      },
      onLeave: () => {
        gsap.to(moonImageEl, { scale: 1, y: "800px", x: "260px", duration: 3 });
      },
    });
  }, []);
  //second scroll
  useEffect(() => {
    const profileImageEl = profileImage.current;
    // const moonBlobRefEl = moonBlobRef.current;
    // const blobEl = blob.current;
    const moonImageEl = moonImagetest.current;

    ScrollTrigger.create({
      trigger: profileImageEl,
      start: "top 50%",
      end: "top 20%",
      // markers: true,
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          profileImageEl,
          { y: 100, x: -100, opacity: 0 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            onComplete: () => setIsTriggerActivated(true),
          }
        );
        gsap.to(moonImageEl, {
          scale: 1,
          y: "1244px",
          x: "130px",
          duration: 2,
          opacity: 0,
        });
        // gsap.fromTo(
        //   moonBlobRefEl,
        //   {
        //     opacity: 0,
        //     duration: 1,
        //     onComplete: () => setIsTriggerActivated(true),
        //   },
        //   {
        //     opacity: 1,
        //     delay: 2,
        //   }
        // );
      },
    });
  }, []);
  useEffect(() => {
    // Get the panels and create ScrollTriggers for each panel
    let panels = gsap.utils.toArray(".panel");
    let tops = panels.map((panel) =>
      ScrollTrigger.create({ trigger: panel, start: "top top" })
    );

    // Create ScrollTriggers for pinning and snapping
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        // markers: true,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    // Clean up the ScrollTriggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const profileContext = useRef(null);
  const arsenalBox1 = useRef(null);
  const arsenalBox2 = useRef(null);

  useEffect(() => {
    const profileContextEl = profileContext.current;
    const arsenalBox1El = arsenalBox1.current;
    const arsenalBox2El = arsenalBox2.current;

    ScrollTrigger.create({
      trigger: profileContextEl,
      start: "top bottom",
      end: "top center",
      // markers: true,
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          profileContextEl,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );
      },
      onLeave: () => {
        gsap.fromTo(
          arsenalBox1El,
          { y: 50, opacity: 0 },
          { duration: 2, y: 0, x: 0, opacity: 1, delay: 0.4 }
        );

        gsap.fromTo(
          arsenalBox2El,
          { y: 50, opacity: 0 },
          { duration: 3, y: 0, x: 0, opacity: 1, delay: 0.7 }
        );
      },
    });
  }, []);

  const myExperienceRef = useRef(null);
  const myExperienceIntroRef = useRef(null);
  const myExperienceBodyRef = useRef(null);
  const myExperienceBody2Ref = useRef(null);

  useEffect(() => {
    const myExperienceRefEl = myExperienceRef.current;
    const myExperienceIntroRefEl = myExperienceIntroRef.current;
    const myExperienceBodyRefEl = myExperienceBodyRef.current;
    const myExperienceBody2RefEl = myExperienceBody2Ref.current;

    ScrollTrigger.create({
      trigger: myExperienceRefEl,
      start: "top 80%",
      end: "top center",
      scrollContainer: window,
      // markers: true,
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          myExperienceIntroRefEl,
          { x: 200, y: 0, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );
      },
      onLeave: () => {
        gsap.fromTo(
          myExperienceBodyRefEl,
          { y: 50, opacity: 0 },
          { duration: 1, y: 0, x: 0, opacity: 1, delay: 0.6 }
        );

        gsap.fromTo(
          myExperienceBody2RefEl,
          { y: 50, opacity: 0 },
          { duration: 1, y: 0, x: 0, opacity: 1, delay: 1.5 }
        );
      },
    });
  }, []);

  const qoutesRef = useRef(null);

  useEffect(() => {
    const qoutesRefEl = qoutesRef.current;
    ScrollTrigger.create({
      trigger: qoutesRefEl,
      start: "80% bottom",
      end: "top center",
      scrollContainer: window,
      // markers: true,
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          qoutesRefEl,
          { y: "50px", opacity: 0 },
          { y: 0, opacity: 1, duration: 2, delay: 0.5 }
        );
      },
    });
  });

  const myStory = useRef(null);
  const storyFirstParagraph = useRef(null);
  const storySecondParagraph = useRef(null);
  const storyThirdParagraph = useRef(null);

  useEffect(() => {
    const myStoryEl = myStory.current;
    const storyFirstParagraphEl = storyFirstParagraph.current;
    const storySecondParagraphEl = storySecondParagraph.current;
    const storyThirdParagraphEl = storyThirdParagraph.current;

    ScrollTrigger.create({
      trigger: storyThirdParagraphEl,
      start: "top 100%",
      // markers: true,
      scrollContainer: window,
      scrub: true,
      onEnter: () => {
        gsap.from(storyThirdParagraphEl, {
          opacity: 0,
          x: -80,
          duration: 2,
        });
        gsap.to(storyThirdParagraphEl, {
          opacity: 1,
          x: 0,
          duration: 2,
        });
      },
    });

    ScrollTrigger.create({
      trigger: myStoryEl,
      start: "top 90%",
      end: "700% 90%",
      // markers: true,
      scrollContainer: window,
      scrub: true,
      onEnter: () => {
        gsap.from(storyFirstParagraphEl, {
          opacity: 0,
          x: -80,
          duration: 2,
        });
        gsap.to(storyFirstParagraphEl, {
          opacity: 1,
          x: 0,

          duration: 2,
        });
      },
      onLeave: () => {
        gsap.from(storySecondParagraphEl, {
          opacity: 0,
          x: -80,
          duration: 2,
        });
        gsap.to(storySecondParagraphEl, {
          opacity: 1,
          x: 0,
          duration: 2,
        });
      },
    });
  }, []);

  const noticeRef = useRef(null);
  const noticeIntroRef = useRef(null);
  const noticeBodyRef = useRef(null);

  useEffect(() => {
    const noticeRefEl = noticeRef.current;
    const noticeIntroRefEl = noticeIntroRef.current;
    const noticeBodyRefEl = noticeBodyRef.current;

    ScrollTrigger.create({
      trigger: noticeRefEl,
      start: "10% bottom",
      end: "42% bottom",
      // markers: true,
      scrollContainer: window,
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          noticeIntroRefEl,
          {
            opacity: 0,
            x: -80,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
          }
        );
      },
      onLeave: () => {
        gsap.fromTo(
          noticeBodyRefEl,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
          }
        );
      },
    });
  });

  //lenis.js

  return (
    <>
      <div className="md:hidden">
        <Menu></Menu>
      </div>
      {/* for mobile */}
      <div className="md:hidden panel bg-slate-950  h-[100vh] ">
        <div className="w-screen flex justify-center items-center h-screen px-70 font-poppins ">
          <div className="md:w-3/4 lg:w-5/6  flex justify-center items-center">
            <div className=" text-c_White px-8  max-w-sm text-center space-y-6 font-extrabold text-3xl   md:max-w-4xl md:text-5xl lg:max-w-max lg:text-6xl  flex flex-col ">
              {/* <div ref={frogAnimateRef} className="absolute bottom-20 right-9">
                <GiFrogPrince className="hidden md:block text-c_Orange text-[50px]" />
              </div> */}

              <span className="leading-tight ">
                The most <span className="">Knowledgeable Experience </span>
                is the
                <span className="text-c_Orange"> Experience</span> that has
                <span className="text-c_Orange"> Failure</span>.
              </span>
              <span className="leading-tight">
                Not the <span className="text-c_Orange">Experience</span> full
                of <span className="text-c_Orange">Perfection </span>
                and Immediate <span className="animate-pulse">Success</span>.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div ref={moon} className="md:hidden panel bg-black  h-[100vh] ">
        <div className="  ">
          <img
            ref={moonImagetest}
            className="moon w-36 h-36 relative -top-[44rem] -left-[9rem] mx-auto z-0"
            src={moonImage}
            alt=""
          />
        </div>
      </div>

      <section className=" md:hidden bg-black text-c_White">
        {/* <div className="fixed top-4 left-4">
          <img className="w-[50px] " src={LogoImage} alt="" />
        </div> */}
        <div className=" px-6">
          <div className="">
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

                  <a
                    ref={animateDownloadCvBtn}
                    href={cvFile}
                    download="CV - Prince Jairo Fortuna.pdf"
                    className="inline-block bg-c_Black border text-white border-c_Orange p-3 font-extralight"
                  >
                    Download CV
                  </a>

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
          </div>
          {/* content */}
          <div className="md:hidden bg-black pt-5 w-full">
            <div className=" pb-8 ">
              <img
                ref={profileImage}
                className={`border-l-2 border-c_Orange z-10 relative mx-auto w-60 rounded-[100%] ${
                  isTriggerActivated ? "" : ""
                }`}
                src={DisplayPicture}
                alt=""
              />
              {/* -top-[170px] left-[70px] */}
              {/* <div
                ref={moonBlobRef}
              
                className={`z-0 relative  animate-blob filter ${
                  isTriggerActivated ? "block" : "hidden"
                }`}
              >
               
                <img className="moon w-36 h-36   " src={moonImage} alt="" />
              </div> */}
            </div>
            <div className="space-y-10 ">
              <div className="">
                <h1 className="text-c_Orange text-3xl  uppercase  font-black">
                  Profile
                </h1>
                <p
                  ref={profileContext}
                  className=" text-justify  pt-3  mx-auto indent-10 "
                >
                  Currently based in the Philippines, I am a full-stack
                  developer who specializes in web development. If not{" "}
                  <span className="opacity-80 text-c_Orange">coding</span>,
                  you'll usually find me reading{" "}
                  <span className="opacity-80 text-c_Orange">manga</span> and{" "}
                  <span className="opacity-80 text-c_Orange">manhwa</span> or
                  browsing
                  <span className="opacity-80 text-c_Orange">
                    {" "}
                    tech-related stuff
                  </span>{" "}
                  on the internet. If you have any cool web-related ideas, let's
                  make them happen! I love exploring and executing new things.
                  Recently, I've also taken an interest in studying UX, with the
                  goal of enhancing my skills in that area.
                </p>
              </div>
              <div className=" space-y-6">
                <h1 className="text-c_Orange text-3xl   uppercase  font-black">
                  Arsenal
                </h1>
                <div
                  ref={arsenalBox1}
                  className=" bg-[#1a1a1a] p-3 rounded-2xl flex justify-between"
                >
                  <div className="space-y-4">
                    <span className="flex items-center">
                      <SiJavascript className="text-[35px]" />
                      <p className="text-sm ml-2 ">Javascript(ES6+)</p>
                    </span>
                    <span className="flex items-center">
                      <GrReactjs className="text-[35px]" />
                      <p className="text-sm ml-2 ">React</p>
                    </span>
                    <span className="flex items-center">
                      <SiRedux className="text-[35px]" />
                      <p className="text-sm ml-2 ">Redux</p>
                    </span>
                    <span className="flex items-center">
                      <FaNodeJs className="text-[35px]" />
                      <p className="text-sm ml-2 ">NodeJs</p>
                    </span>
                  </div>
                  <div className="space-y-4 mr-6">
                    <span className="flex items-center">
                      <SiPhp className="text-[35px]" />
                      <p className="text-sm ml-2 ">Php</p>
                    </span>
                    <span className="flex items-center">
                      <SiLaravel className="text-[35px]" />
                      <p className="text-sm ml-2 ">Laravel</p>
                    </span>
                    <span className="flex items-center">
                      <DiYii className="text-[35px]" />
                      <p className="text-sm ml-2 ">Yii(1.1)</p>
                    </span>
                    <span className="flex items-center">
                      <SiJquery className="text-[35px]" />
                      <p className="text-sm ml-2 ">Jquery</p>
                    </span>
                  </div>
                </div>
                <div
                  ref={arsenalBox2}
                  className="bg-[#1a1a1a] p-3 rounded-2xl  flex justify-between "
                >
                  <div className="space-y-4 ">
                    <span className="flex items-center">
                      <SiMicrosoftsqlserver className="text-[35px]" />
                      <p className="text-sm ml-2 ">MsSQL</p>
                    </span>
                    <span className="flex items-center">
                      <SiMysql className="text-[35px]" />
                      <p className="text-sm ml-2 ">Mysql</p>
                    </span>
                    <span className="flex items-center">
                      <BsGit className="text-[35px]" />
                      <p className="text-sm ml-2 ">Git</p>
                    </span>
                    <span className="flex items-center  ">
                      <img className="w-[40px]" src={SvnLogo} alt="" />
                      <p className="text-sm ml-2 ">Tortoise SVN</p>
                    </span>
                  </div>
                  <div className="space-y-4 mr-3">
                    <span className="flex items-center">
                      <IoLogoCss3 className="text-[35px]" />
                      <p className="text-sm ml-2 ">Css</p>
                    </span>
                    <span className="flex items-center">
                      <SiTailwindcss className="text-[35px]" />
                      <p className="text-sm ml-2 ">Tailwind</p>
                    </span>
                    <span className="flex items-center">
                      <FaBootstrap className="text-[35px]" />
                      <p className="text-sm ml-2 ">Bootstrap</p>
                    </span>
                    <span className="flex items-center  ">
                      <BiDotsHorizontalRounded className="text-[35px] " />
                      <p className="text-sm ml-2 ">(etc)</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* experience */}

            <div ref={myExperienceRef} className=" h-[100vh] ">
              <div className="pt-14">
                <h1 className="text-c_Orange text-3xl  uppercase  font-black">
                  Experience
                </h1>
                <p
                  ref={myExperienceIntroRef}
                  className=" text-justify indent-10 pt-5"
                >
                  After graduating in 2022, I had the privilege of working with
                  this company, which enabled me to hone my skills and
                  experience the professional growth I needed. This company will
                  always have a special place in my heart.
                </p>
                <div ref={myExperienceBodyRef} className="">
                  <div className="">
                    <div className="pt-5">
                      <div className=" w-[200px] text-center">
                        <img
                          src={In1goLogo}
                          className="border-l border-c_Orange p-10 bg-c_White bg-opacity-[2%] mx-auto"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-10 pr-0 pt-2 pl-4 ">
                    <p className="font-bold text-xl">Sofware Developer</p>
                    <div className="text-[12px]">
                      <p className="text-c_Orange">In1Go Technologies Inc.</p>
                      <p className="">Aug 2022 - Present</p>
                    </div>

                    <div ref={myExperienceBody2Ref} className=" pt-5">
                      <div className=" flex-col items-center space-y-2 ">
                        <div className=" flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                          <span className="pl-2 w-full">
                            Assigned to handle multiple projects with diverse
                            business flows.
                          </span>
                        </div>

                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                          <span className="pl-2 w-full">
                            Maintained, enhanced, and managed a logistics web
                            application.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                          <span className="pl-2 w-full">
                            Implemented additional improvements and Efficiently
                            managed an HRIS web application.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                          <span className="pl-2 w-full">
                            In charge of and exposed to scalable API endpoints
                            for mobile and web projects.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                          <span className="pl-2 w-full">
                            Optimized database queries to improve application
                            performance.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                          <span className="pl-2  w-full">
                            Regularly resolved past and current issues and
                            efficiently addressed challenges for clients.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                          <span className="pl-2 w-full">
                            Gained valuable exposure to logistics operations and
                            became well-versed in the intricate details of the
                            business flow.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                          <span className="pl-2 w-full">
                            Developed solutions for clients' regular requests,
                            ensuring customer satisfaction as the assigned
                            software developer of the said systems.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                          <span className="pl-2 w-full">
                            Added enhancements to fleet-view monitoring features
                            for tracking, tracing, and real-time monitoring of
                            vehicle activities and shipment statuses, ensuring
                            efficient and timely delivery of shipments.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <GiImbricatedArrows className="text-c_Orange  w-[8%] text-[15px] inline" />
                          <span className="pl-2 w-full">
                            Maintained the reports system with detailed data and
                            charts to provide comprehensive insights for better
                            decision-making and easy export of thousands of
                            related report data.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* experience end */}
            {/* qoutes */}
            <div
              ref={qoutesRef}
              className="h-[100vh]  pt-[1080px] w-full flex items-center  p-3 "
            >
              <div className="text-4xl text-center font-bold">
                <p className="uppercase pt-7">
                  "Don't wait until you feel good enough to{" "}
                  <span className="text-c_Orange">start doing something</span>.
                  Ideas remain undefined unless they are{" "}
                  <span className="text-c_Orange">execute</span>d"
                </p>
              </div>
            </div>
            {/* qoutes */}
            {/* background */}
            <div className=" pb-10 pt-72">
              <h1
                ref={myStory}
                className="text-c_Orange text-3xl pb-5  uppercase  font-black  "
              >
                My Story
              </h1>
              <p ref={storyFirstParagraph} className="indent-10">
                I graduated with a Bachelor of Science in Computer Science in
                2022. My love for computers began with video games,yip! just
                like any normal kid. Back then, I didn't have access to gadgets
                and other resources due to my family's financial limitations.
                Nevertheless, I would always find a way to play games and surf
                the internet. I was even willing to skip meals and save up my
                daily allowance just to rent a computer for an hour or two every
                day. It's not a story I typically share since it's not worth
                sharing, but those days hold a special part in my life as they
                mark the beginning of my{" "}
                <span className="text-c_Orange">
                  Passion and Curiosity for technologies
                </span>
                .
              </p>
              <br />
              <p ref={storySecondParagraph} className="indent-10">
                I met programming when I started college. To be honest, I wasn't
                the sharpest one in the room when it came to programming. I
                didn't possess the ultra-mega-alpha-elon-zuckerberg level of
                logical thinking. I was just your average guy, not at the back,
                but not exactly a front-row student either.But I've always
                believed that there's something within me, something not so
                extraordinary but enough to make myself feel fulfilled and
                hopefully some people around me. And, damn, I absolutely love
                the art of creating something out of nothing, and{" "}
                <span className="text-c_Orange">Programming </span>
                has given me that quirk. That's why I{" "}
                <span className="text-c_Orange">Find joy in it</span>, even when
                I don't grasp or understand things on the first try. I kept at
                it, and before I knew it, it became part of my life.
              </p>
              <br />
              <p ref={storyThirdParagraph} className="indent-10">
                Okiii, you may have just wasted some time reading something
                seemingly pointless again. But I wanted to convey a random
                message i just made up: if you feel like you're lacking
                something in life, whether it's innate talent like intelligence
                or even resources, you can compensate for it with time and
                effort. And most importantly, be patient with the process. I'm
                far from being a wildly successful individual , I may even not
                become one lol! I'm just a random developer who's crafting
                random sentences to add more content to my personal site.
                Anyway, thank you for your time, and remember to be kind,
                especially to yourself. Forgive your mistakes, and{" "}
                <span className="text-c_Orange">
                  Strive for Personal Fulfillment!
                </span>
              </p>
            </div>
            {/* background */}
            {/* notice */}

            <div ref={noticeRef} className="h-[100vh] ">
              <div className="pt-10">
                <h1 className="text-c_Orange text-3xl pb-5 uppercase  font-black  ">
                  Notice
                </h1>

                <p ref={noticeIntroRef} className="indent-10">
                  The developer is still quite short on time ,this is only 40%
                  done, and some tabs are still disabled, Please stop laughing
                  at him. He might be doing someting important or definitly not.
                </p>
                {/*  ref={deadEndLogoRef} */}
                <div className=" pr-0 pt-10 pl-2 pb-32  ">
                  <div className="">
                    <div
                      ref={noticeBodyRef}
                      className="-ml-4 flex-col items-center space-y-2 "
                    >
                      <div className=" flex items-center">
                        <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                        <span className="pl-2 w-full">
                          The layout is not fully responsive yet for larger
                          screens than laptops.
                        </span>
                      </div>
                      <div className=" flex items-center">
                        <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                        <span className="pl-2 w-full">
                          Many animations and elements are not final.
                        </span>
                      </div>
                      <div className=" flex items-center">
                        <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                        <span className="pl-2 w-full">
                          Don't worry, this developer is working hard, fueled by
                          caffeine and the enthusiasm of an 8th-grader syndrome
                          on a gaming chair throne, to get it all fixed! So,
                          let's cheer and encourage him instead of laughing, as
                          we might be tempted to do. After all, he could be busy
                          saving the world from coding chaos or secretly
                          indulging in manga/manhwa. Keep calm and code on! 💻
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* notice ends */}
            <div className="mt-28 text-c_Orange text-center text-[12px] p-4">
              <span>
                Designed and Made with{" "}
                <span className="text-c_White">Passion and </span>
                <span className="text-c_White"> Love</span>
              </span>
              <span>
                <br />
                Prince Jairo Fortuna{" "}
                <div
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                >
                  <AiOutlineCopyright />
                </div>{" "}
                2023
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* for mobile */}
    </>
  );
};

export default IndexMobile;
