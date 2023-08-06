const Item = ({ number, title }) => {
  const numberFormet = number < 10 ? `0${number}` : number;
  const bgGradient =
    number == 1
      ? "bg-gradient-to-r from-teal-300 to-cyan-400"
      : "bg-transparent";
  const textWhiteOrCyan = number == 1 ? "text-white" : "text-cyan-400";
  const textWhiteOrBlack = number == 1 ? "text-white" : "text-black";
  return (
    <div
      className={`flex items-center w-[600px] ${bgGradient} p-6 border-2 drop-shadow-lg mb-8`}
    >
      <span className={`text-3xl font-bold ${textWhiteOrCyan} mr-5`}>
        {numberFormet}
      </span>
      <span className={`text-lg ${textWhiteOrBlack}`}>{title}</span>
    </div>
  );
};

export default Item;
