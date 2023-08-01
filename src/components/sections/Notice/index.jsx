import { useRef, useEffect, useContext, useState } from "react";

import { BsFillSignDeadEndFill } from "react-icons/bs";
import { GiImbricatedArrows } from "react-icons/gi";

import Footer from "./footer";

const Notice = (props) => {
  const noticeRef = useRef(null);
  const noticeIntroRef = useRef(null);
  const deadEndLogoRef = useRef(null);
  const noticeBodyRef = useRef(null);

  useEffect(() => {
    const noticeRefEl = noticeRef.current;
    const noticeIntroRefEl = noticeIntroRef.current;
    const deadEndLogoRefEl = deadEndLogoRef.current;
    const noticeBodyRefEl = noticeBodyRef.current;

    ScrollTrigger.create({
      trigger: noticeRefEl,
      start: "top bottom",
      end: "top 20%",
      scrollContainer: window,
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          noticeIntroRefEl,
          { x: 200, y: 0, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );

        gsap.fromTo(
          deadEndLogoRefEl,
          { y: 50, opacity: 0 },
          { duration: 1, y: 0, x: 0, opacity: 1, delay: 1.0 }
        );

        gsap.fromTo(
          noticeBodyRefEl,
          { y: 50, opacity: 0 },
          { duration: 1, y: 0, x: 0, opacity: 1, delay: 1.4 }
        );
      },
    });
  }, [props.isAboutVisible]);
  return (
    <>
      <div ref={noticeRef} className="h-[100vh] ">
        <div className="pt-36">
          <h1 className="uppercase text-3xl font-semibold pb-5  ">Notice</h1>
          <p ref={noticeIntroRef} className="indent-10">
            The developer is still quite short on time ,this is only 40% done,
            and some tabs are still disabled, Please stop laughing at him. He
            might be doing someting important or definitly not.
          </p>

          <div className="p-20 pt-10 pl-12   flex">
            <div ref={deadEndLogoRef} className="text-8xl pt-16 w-[30%]">
              <BsFillSignDeadEndFill className="text-c_Orange " />
            </div>
            <div className="w-full flex flex-col">
              <div
                ref={noticeBodyRef}
                className="-ml-4 flex-col items-center space-y-2 "
              >
                <div className=" flex items-center">
                  <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                  <span className="pl-2 w-full">
                    The layout is not fully responsive yet for larger screens
                    than laptops.
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
                    caffeine and the enthusiasm of an 8th-grader syndrome on a
                    gaming chair throne, to get it all fixed! So, let's cheer
                    and encourage him instead of laughing, as we might be
                    tempted to do. After all, he could be busy saving the world
                    from coding chaos or secretly indulging in manga/manhwa.
                    Keep calm and code on! 💻
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Notice;
