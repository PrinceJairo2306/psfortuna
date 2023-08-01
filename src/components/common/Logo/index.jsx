import logoImage from "../../../assets/FinalLogo-removebg.png"
const Logo = (props) => {
  return (
    <div className="w-14 absolute top-4 left-4 md:top-7 md:left-5 z-50">
      <img src={logoImage} alt="" />
    </div>
  );
};

export default Logo;
