import rightArrow from "../assets/images/arrow-pointing-to-right.png";
import arrow from "../assets/images/keyboard-left-arrow-button.png";
import CustomSwitch from "./CustomSwitch";
import desktop from "../assets/images/desktop-img-cp.png";
import iphone from "../assets/images/iphone.png";
import tripproMobile from "../assets/images/trippro.com-iPhone.png";
import tripproDesktop from "../assets/images/trippro.com-1.png";
import { useState } from "react";

const SwitchSection = () => {
  const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn((prevState) => !prevState);
  };

  return (
    <div className="flex justify-between bg-gradient-to-r from-cyan-400 to-teal-300">
      <div className="w-1/2">
        {switchOn ? (
          <div className="relative">
            <img
              src={desktop}
              alt="desktop"
              className="relative w-[550px] h-[590px] mx-auto"
            />
            <img
              src={tripproDesktop}
              alt="desktop"
              className="absolute top-12 left-1/2 translate-x-[-50%] w-[485px] h-[378px]"
            />
          </div>
        ) : (
          <div className="relative">
            <img
              src={iphone}
              alt="iphone"
              className="relative w-1/2 h-[590px] mx-auto"
            />
            <img
              src={tripproMobile}
              alt="mobile"
              className="absolute top-11 left-1/2 translate-x-[-50%] w-[333px] h-[500px]"
            />
          </div>
        )}
      </div>
      <div className="w-1/2">
        <h1 className="text-white font-bold text-4xl mt-20 mb-12">
          Their Old Website & Problems
        </h1>
        <ul className="max-w-xl mb-10">
          <li className="flex items-baseline text-white mb-3">
            <img src={rightArrow} alt="arrow-right" className="w-5 h-3 mr-3" />
            <span className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </span>
          </li>
          <li className="flex items-baseline text-white mb-3">
            <img src={rightArrow} alt="arrow-right" className="w-5 h-3 mr-3" />
            <span className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </span>
          </li>
          <li className="flex items-baseline text-white mb-3">
            <img src={rightArrow} alt="arrow-right" className="w-5 h-3 mr-3" />
            <span className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </span>
          </li>
        </ul>
        <div className="flex space-x-5 mb-10">
          <button>
            <img src={arrow} alt="left-arrow" className="w-3 h-4" />
          </button>
          <button>
            <img src={arrow} alt="left-arrow" className="w-3 h-4 rotate-180" />
          </button>
        </div>
        <CustomSwitch switchOn={switchOn} onToggle={toggleSwitch} />
      </div>
    </div>
  );
};

export default SwitchSection;
