import { useRef, useEffect } from "react"; //useContext, useState

import In1goLogo from "../../../assets/1go-logo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { GiImbricatedArrows } from "react-icons/gi";

const Experience = (props) => {
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
      start: "top bottom",
      end: "top 20%",
      scrollContainer: window,
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          myExperienceIntroRefEl,
          { x: 200, y: 0, opacity: 0 },
          { x: 0, opacity: 1, duration: 2 }
        );

        gsap.fromTo(
          myExperienceBodyRefEl,
          { y: 50, opacity: 0 },
          { duration: 1, y: 0, x: 0, opacity: 1, delay: 0.6 }
        );

        gsap.fromTo(
          myExperienceBody2RefEl,
          { y: 50, opacity: 0 },
          { duration: 1, y: 0, x: 0, opacity: 1, delay: 1 }
        );
      },
    });
  }, [props.isAboutVisible]); //
  return (
    <>
      {/* experience */}
      <div ref={myExperienceRef} className=" h-[100vh] ">
        <h1 className="text-3xl font-semibold pb-2 ">Experience</h1>
        <p ref={myExperienceIntroRef} className="indent-10">
          After graduating in 2022, I had the privilege of working with this
          company, which enabled me to hone my skills and experience the
          professional growth I needed. This company will always have a special
          place in my heart.
        </p>
        <div ref={myExperienceBodyRef} className="flex ">
          <div className="">
            <div className="pt-10">
              <div className=" w-[200px] text-center">
                <img
                  src={In1goLogo}
                  className="border-l border-c_Orange p-10 bg-c_White bg-opacity-[2%] mx-auto"
                  alt=""
                />
              </div>
            </div>
            {/* <div className="pt-10">
                      <div className=" w-[200px] text-center">
                        <span className="pt-10 mx-auto">
                          <RiQuestionMark className="text-[80px]   mx-auto opacity-10" />
                        </span>
                      </div>
                    </div> */}
          </div>
          <div className="p-10 pt-14 pl-4  w-full ">
            <p className="font-bold text-xl">Sofware Developer</p>
            <div className="text-[12px]">
              <p className="text-c_Orange">In1Go Technologies Inc.</p>
              <p className="">Aug 2022 - Present</p>
            </div>
            <div ref={myExperienceBody2Ref} className="mt-10 pr-1">
              <div className="-ml-4 custom-scrollbar flex-col items-center space-y-2 overflow-y-auto max-h-[40vh]">
                <div className=" flex items-center">
                  <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                  <span className="pl-2 w-full">
                    Assigned to handle multiple projects with diverse business
                    flows.
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
                    Implemented additional improvements and Efficiently managed
                    an HRIS web application.
                  </span>
                </div>
                <div className="flex items-center">
                  <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                  <span className="pl-2 w-full">
                    In charge of and exposed to scalable API endpoints for
                    mobile and web projects.
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
                    Regularly resolved past and current issues and efficiently
                    addressed challenges for clients.
                  </span>
                </div>
                <div className="flex items-center">
                  <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                  <span className="pl-2 w-full">
                    Gained valuable exposure to logistics operations and became
                    well-versed in the intricate details of the business flow.
                  </span>
                </div>
                <div className="flex items-center">
                  <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                  <span className="pl-2 w-full">
                    Developed solutions for clients' regular requests, ensuring
                    customer satisfaction as the assigned software developer of
                    the said systems.
                  </span>
                </div>
                <div className="flex items-center">
                  <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline" />
                  <span className="pl-2 w-full">
                    Added enhancements to fleet-view monitoring features for
                    tracking, tracing, and real-time monitoring of vehicle
                    activities and shipment statuses, ensuring efficient and
                    timely delivery of shipments.
                  </span>
                </div>
                <div className="flex items-center">
                  <GiImbricatedArrows className="text-c_Orange  w-[8%] text-[15px] inline" />
                  <span className="pl-2 w-full">
                    Maintained the reports system with detailed data and charts
                    to provide comprehensive insights for better decision-making
                    and easy export of thousands of related report data.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* experience end */}
    </>
  );
};

export default Experience;
