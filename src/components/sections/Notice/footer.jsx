import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="text-c_Orange text-center text-[12px] p-4">
        <span>
          Designed and Made with{" "}
          <span className="text-c_White">Passion and </span>
          <span className="text-c_White"> Love</span>
        </span>
        <span>
          <br />
          Prince Jairo Fortuna{" "}
          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
            <AiOutlineCopyright />
          </div>{" "}
          2023
        </span>
      </div>
    </>
  );
};

export default Footer;
