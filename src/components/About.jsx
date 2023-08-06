import ColoredText from "./ColoredText";
import Button from "./Button";
import tablet from "../assets/images/tablet.png";

const About = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl pt-36 mx-auto mb-20">
      <div>
        <ColoredText firstWord="about" secondWord="trippro" line="true" />
        <p className="max-w-2xl text-lg mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita
        </p>
        <Button text="tour to website" />
      </div>
      <div>
        <img src={tablet} alt="Tablet" className="w-80 h-[450px]" />
      </div>
    </div>
  );
};

export default About;
