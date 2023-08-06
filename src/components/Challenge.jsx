import challenge from "../assets/images/challenge.png";
import Button from "./Button";
import ColoredText from "./ColoredText";
import FetchedItems from "./FetchedItems";

const Challenge = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto mb-20">
      <div>
        <img src={challenge} alt="Challenge" className="w-[650px] h-[550px]" />
      </div>
      <div>
        <ColoredText firstWord="our" secondWord="challenges" />
        <FetchedItems />
        <Button text="view more" />
      </div>
    </div>
  );
};

export default Challenge;
