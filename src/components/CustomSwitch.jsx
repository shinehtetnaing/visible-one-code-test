import "../custom.css";
import desktop from "../assets/images/desktop.png";
import mobile from "../assets/images/smartphone.png";

const CustomSwitch = ({ switchOn, onToggle }) => {
  return (
    <div className="switch relative" onClick={onToggle}>
      <div className={`h-8 rounded-full`}>
        <div
          className={`absolute w-8 h-8 rounded-full shadow ${
            switchOn ? "bg-white right-1" : "bg-white left-1"
          }`}
        />
      </div>
      <span className="absolute end-1/2 top-2 translate-x-1/2 flex text-white font-bold text-lg">
        {switchOn ? (
          <>
            <img src={desktop} alt="desktop" className="w-10 h-8 mr-3" />
            Desktop
          </>
        ) : (
          <>
            <img src={mobile} alt="mobile" className="w-5 h-8 mr-3" /> Mobile
          </>
        )}
      </span>
    </div>
  );
};

export default CustomSwitch;
