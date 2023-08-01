import { useContext, useEffect, useRef } from "react";
import { MenuContext } from "../../../store/MenuContext";

const CurtainEffect = (props) => {
  const lastCurtainRef = useRef(null);
  const { isLastCurtainDone, setIsLastCurtainDone } = useContext(MenuContext);
  useEffect(() => {
    const handleTransitionEnd = () => {
      // Transition end event handling
      setIsLastCurtainDone((prevState) => !prevState);
    
    };
    
    const lastCurtain = lastCurtainRef.current;
    lastCurtain.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      lastCurtain.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);


  return (
    <div className="overflow-x-hidden text-white">
      <div
        className={`z-40 fixed inset-x-0 top-0 h-1/4 transition-all duration-300 ease-in-out delay-150 ${
          props.isMenuOpen ? "" : "translate-x-full"
        }`}
        style={{ backgroundColor: "rgb(30,30,30)" }}
      ></div>
      <div
        className={`z-40 fixed inset-x-0 top-1/4 h-1/4 transition-all duration-300 ease-in-out delay-200 ${
          props.isMenuOpen ? "" : "translate-x-full"
        }`}
        style={{ backgroundColor: "rgb(30,30,30)" }}
      ></div>
      <div
        className={`z-40 fixed inset-x-0 top-2/4 h-1/4 transition-all duration-300 ease-in-out delay-300 ${
          props.isMenuOpen ? "" : "translate-x-full"
        }`}
        style={{ backgroundColor: "rgb(30,30,30)" }}
      ></div>
      <div
        ref={lastCurtainRef}
        className={`z-40 fixed inset-x-0 top-3/4 h-1/4 transition-all duration-300 ease-in-out delay-500 ${
          props.isMenuOpen ? "" : "translate-x-full"
        }`}
        style={{ backgroundColor: "rgb(30,30,30)" }}
      ></div>
    </div>
  );
};

export default CurtainEffect;
