import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { GiFrogPrince } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { GiImbricatedArrows } from "react-icons/gi";

const IntroQoutes = (props) => {
  const overlayRef = useRef(null); // Create a ref for the overlay element
  const frogAnimateRef = useRef(null);

  useEffect(() => {
    const frogAnimateEl = frogAnimateRef.current;
    gsap.to(frogAnimateEl, {
      y: 40, // Final value of y after the animation
      duration: 1,
      ease: "power4.out",
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Make the animation reverse on each repeat to create a bounce effect
    });
  }, []);

  useEffect(() => {
    // Get the overlay element using the ref
    const overlay = overlayRef.current;

    // Check if the overlay exists before proceeding with the animation
    if (overlay) {
      window.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);

        gsap.to(overlay, {
          "--x": `${x}%`,
          "--y": `${y}%`,
          duration: 0.3,
          ease: "sine.out",
        });
      });
    }
  }, [frogAnimateRef]);

  return (
    <>
      <div className="hidden md:flex absolute z-50 ">
        <div className={props.isAboutVisible ? "" : "hidden"}>
          <div className="overflow-hidden">
            <div className="bg-c_Black w-screen ">
              <div
                className={`${
                  props.isMenuOpen ? "hidden" : ""
                } bg-c_Black flex items-center justify-center`}
              >
                <div className="hidden md:block text-c_White absolute bottom-[5%] left-5">
                  <p className="text-c_Orange ">Notice:</p>
                  <div className=" flex-col items-center space-y-2 ">
                    <div className=" flex items-center">
                      <GiImbricatedArrows className="text-c_Orange w-[8%] text-[15px] inline " />
                      <span className="pl-2 text-[10px]">
                        Bigger Screens than laptop are not yet <br /> supported.
                        The dev is quite short on time right now.
                      </span>
                    </div>
                  </div>
                  <p className=" "></p>
                </div>

                <div className="w-screen flex justify-center items-center h-screen px-70 font-poppins ">
                  <div className="md:w-3/4 lg:w-5/6  flex justify-center items-center">
                    <div className=" text-c_White px-8  max-w-sm text-center space-y-6 font-extrabold text-3xl   md:max-w-4xl md:text-5xl lg:max-w-max lg:text-6xl  flex flex-col ">
                      <div
                        ref={frogAnimateRef}
                        className="absolute bottom-20 right-9"
                      >
                        <GiFrogPrince className="hidden md:block text-c_Orange text-[50px]" />
                      </div>

                      <span className="leading-tight ">
                        The most{" "}
                        <span className="">Knowledgeable Experience </span>
                        is the
                        <span className="text-c_Orange"> Experience</span> that
                        has
                        <span className="text-c_Orange"> Failure</span>.
                      </span>
                      <span className="leading-tight">
                        Not the{" "}
                        <span className="text-c_Orange">Experience</span> full
                        of <span className="text-c_Orange">Perfection </span>
                        and Immediate{" "}
                        <span className="animate-pulse">Success</span>.
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  ref={overlayRef}
                  className=" overlay px-6 font-poppins bg-c_White hidden md:block"
                >
                  <div
                    onClick={props.onClickHandler}
                    className="absolute bottom-4 right-11"
                  >
                    <GiFrogPrince className=" text-[50px] text-black  z-[2]  " />
                    <p className="relative top-0 -left-2 ">click me</p>
                  </div>
                  <div className=" text-black absolute bottom-[32px] left-[40px]">
                    <p className="text-c_Orange ">Notice:</p>
                    <div className=" flex-col items-center space-y-2 ">
                      <div className=" flex items-center">
                        <GiImbricatedArrows className=" text-black w-[8%] text-[15px] inline " />
                        <span className="pl-2 text-[10px]">
                          Bigger Screens than laptop are not yet <br />{" "}
                          supported. The dev is quite short on time right now.
                        </span>
                      </div>
                    </div>
                    <p className=" "></p>
                  </div>

                  <div className="w-screen pt-6 flex justify-center items-center h-screen px-70 font-poppins ">
                    <div className="md:w-3/4 lg:w-5/6 justify-center items-center">
                      <div className="text-c_black px-8  max-w-sm text-center space-y-6 font-extrabold text-4xl   md:max-w-4xl md:text-5xl lg:max-w-max lg:text-6xl  flex flex-col ">
                        <span className="leading-tight">
                          The most Knowledgeable Experience is the
                          <span className="text-c_Black"> Experience</span> that
                          has
                          <span className="text-c_Black"> Failure</span>.
                        </span>
                        <span className="leading-tight">
                          Not the{" "}
                          <span className="text-c_Black">Experience</span> full
                          of <span className="text-c_Black">Perfection </span>
                          and Immediate{" "}
                          <span
                            onClick={props.onClickHandler}
                            className="text-green-900 "
                          >
                            Success
                          </span>
                          .
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <span className="text-c_Orange text-4xl px-12 bottom-12 absolute w-full flex justify-between animate-bounce">
            <MdOutlineKeyboardDoubleArrowDown />
            <MdOutlineKeyboardDoubleArrowDown />
          </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroQoutes;
