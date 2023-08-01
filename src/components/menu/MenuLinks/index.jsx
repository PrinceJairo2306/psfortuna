import { useState } from "react";
import { GiPlainCircle } from "react-icons/gi";

const links = (props) => {
  const [isHoveringAbout, setIsHovering] = useState(false);
  const [isHoveringProjects, setIsHoveringProjects] = useState(false);
  const [isHoveringExperience, setIsHoveringExperience] = useState(false);
  const [isHoveringContacts, setIsHoveringContacts] = useState(false);
  const [isHoveringBlogs, setIsHoveringBlogs] = useState(false);

  const handleMouseOverAbout = () => {
    setIsHovering(true);
  };

  const handleMouseOutAbout = () => {
    setIsHovering(false);
  };

  const handleMouseOverProjects = () => {
    setIsHoveringProjects(true);
  };

  const handleMouseOutProjects = () => {
    setIsHoveringProjects(false);
  };

  const handleMouseOverExperience = () => {
    setIsHoveringExperience(true);
  };

  const handleMouseOutExperience = () => {
    setIsHoveringExperience(false);
  };
  const handleMouseOverContacts = () => {
    setIsHoveringContacts(true);
  };

  const handleMouseOutContacts = () => {
    setIsHoveringContacts(false);
  };
  const handleMouseOverBlogs = () => {
    setIsHoveringBlogs(true);
  };

  const handleMouseOutBlogs = () => {
    setIsHoveringBlogs(false);
  };
  return (
    <div
      className={`z-40 fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 text-center ${
        props.isMenuOpen ? "text-c_Orange" : "hidden text-black"
      }`}
    >
      <div className="font-black ">
        <div
          className={`p-10 text-3xl md:text-4xl 2xl:text-6xl mx-auto menu-titles font-poppins   text-center space-y-6 md:space-y-12 `}
        >
          <div className={`opacity-60  ${props.isMenuOpen ? "about" : ""}`}>
            <div className="flex items-center justify-center">
              <div className="relative">
                {isHoveringAbout && (
                  <div className="absolute left-[-40px] top-[50%] transform translate-y-[-50%]">
                    <GiPlainCircle className="text-xl md:text-xl " />
                  </div>
                )}
                <span
                  onMouseOver={handleMouseOverAbout}
                  onMouseOut={handleMouseOutAbout}
                  className="hover:text-c_White hover:font-black"
                >
                  {props.ismenuFinishedOpenning && "about"}
                </span>
              </div>
            </div>
          </div>

          <div
            className={`opacity-60  ${props.isMenuOpen ? "experience" : ""}`}
          >
            <div className="flex items-center justify-center">
              <div className="relative">
                {isHoveringExperience && (
                  <div className="absolute left-[-40px] top-[50%] transform translate-y-[-50%]">
                    <GiPlainCircle className="text-xl " />
                  </div>
                )}
                <span
                  onMouseOver={handleMouseOverExperience}
                  onMouseOut={handleMouseOutExperience}
                  className="hover:text-c_White  hover:font-black"
                >
                  {props.ismenuFinishedOpenning && "experience"}
                </span>
              </div>
            </div>
          </div>

          <div className={`opacity-60  ${props.isMenuOpen ? "blogs" : ""}`}>
            <div className="flex items-center justify-center">
              <div className="relative">
                {isHoveringBlogs && (
                  <div className="absolute left-[-40px] top-[50%] transform translate-y-[-50%]">
                    <GiPlainCircle className="text-xl " />
                  </div>
                )}
                <span
                  onMouseOver={handleMouseOverBlogs}
                  onMouseOut={handleMouseOutBlogs}
                  className="hover:text-c_White  hover:font-black"
                >
                  {props.ismenuFinishedOpenning && "background"}
                </span>
              </div>
            </div>
          </div>

          <div className={`opacity-60  ${props.isMenuOpen ? "contact" : ""}`}>
            <div className="flex  items-center justify-center">
              <div className="relative">
                {isHoveringContacts && (
                  <div className="absolute left-[-40px] top-[50%] transform translate-y-[-50%]">
                    <GiPlainCircle className="text-xl " />
                  </div>
                )}
                <span
                  onMouseOver={handleMouseOverContacts}
                  onMouseOut={handleMouseOutContacts}
                  className="hover:text-c_White opacity-10 hover:font-black"
                >
                  {props.ismenuFinishedOpenning && "certificates"}
                </span>
              </div>
            </div>
          </div>

          <div className={`opacity-60  ${props.isMenuOpen ? "projects" : ""}`}>
            <div className="flex items-center justify-center">
              <div className="relative">
                {isHoveringProjects && (
                  <div className=" absolute left-[-40px] top-[50%] transform translate-y-[-50%]">
                    <GiPlainCircle className="text-xl " />
                  </div>
                )}
                <span
                  onMouseOver={handleMouseOverProjects}
                  onMouseOut={handleMouseOutProjects}
                  className="hover:text-c_White opacity-10  hover:font-black"
                >
                  {props.ismenuFinishedOpenning && "projects"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default links;