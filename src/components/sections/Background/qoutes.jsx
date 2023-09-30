import { useRef, useEffect, useContext, useState } from "react";

import SplitType from "split-type";
const SelftQoutes = (props) => {
  const qoutesDiv = useRef(null);
  const qoutes = new SplitType("#qoutes");

  useEffect(() => {
    const qoutesElement = qoutesDiv.current;
    const qoutes = new SplitType(qoutesElement.querySelector("#qoutes"));

    ScrollTrigger.create({
      trigger: qoutesElement,
      start: "top bottom",

      scrub: 1,

      onEnter: () => {
        gsap.from(qoutes.chars, {
          opacity: 0,
          y: 80,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.1,
        });
        gsap.to(qoutes.chars, {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.1,
        });
      },
    });
  }, [props.isAboutVisible, qoutesDiv]);
  return (
    <>
      <div ref={qoutesDiv} className=" h-[100vh] p-3  pb-0">
        <div className="text-6xl 2xl:text-[90px] pt-20 flex items-center text-center font-bold">
          <p id="qoutes" className="qoutes uppercase ">
            "Don't wait until you feel good enough to{" "}
            <span className="text-c_Orange">start doing something</span>. Ideas
            remain undefined unless they are executed."
          </p>
          <p className="text-right font-light text-[12px] opacity-50"></p>
        </div>
      </div>
    </>
  );
};

export default SelftQoutes;
