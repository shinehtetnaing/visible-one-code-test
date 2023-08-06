import React from "react";

const ColoredText = ({ firstWord, secondWord, line }) => {
  const coloredLine = line == "true" ? "bg-[#2DC4EA]" : "bg-transparent";

  return (
    <div className="relative flex items-center text-4xl font-bold uppercase mb-10">
      <span className="text-black">{firstWord}</span>
      <span className="relative text-[#2DC4EA] ml-2">{secondWord}</span>
      <span className={`absolute w-40 h-1 ${coloredLine} bottom-[-15px]`} />
    </div>
  );
};

export default ColoredText;
