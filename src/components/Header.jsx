import header from "../assets/images/header.png";

const Header = () => {
  return (
    <nav className="mt-[-5px]">
      <img src={header} alt="header" className="w-screen drop-shadow-md" />
    </nav>
  );
};

export default Header;
