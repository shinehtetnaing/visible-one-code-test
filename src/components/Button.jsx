const Button = ({ text }) => {
  return (
    <button className="rounded-full py-6 px-12 uppercase font-bold text-xl text-white bg-gradient-to-r from-teal-300 to-cyan-400">
      {text}
    </button>
  );
};

export default Button;
