import hero from "../assets/images/hero.png";
import responsive from "../assets/images/responsive.png";
import wordpress from "../assets/images/wordpress.png";
import shoppingCart from "../assets/images/shopping-cart.png";
import laptop from "../assets/images/laptop.png";
import screen from "../assets/images/devwp.visibleone.net_tripprohk.png";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[637px] mb-52"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute bottom-0 left-0 h-[637px] w-full bg-black opacity-60"></div>
      <div className="absolute inset-0 text-white max-w-7xl mx-auto">
        <h1 className="text-6xl text-center font-light mt-16 mb-8">
          TRIPPRO - AN ECOMMERCE SOLUTION
        </h1>
        <p className="text-lg text-center mb-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <div className="flex justify-center text-2xl">
          <div className="flex items-center space-x-4 px-5 border-r-4">
            <span className="font-bold">Built for:</span>
            <img src={responsive} alt="responsive" className="w-16 h-14" />
          </div>
          <div className="flex items-center space-x-4 px-5 border-r-4">
            <div className="flex flex-col">
              <span>Technologies:</span>
              <span className="font-bold">Wordpress</span>
            </div>
            <img src={wordpress} alt="wordpress" className="w-16 h-14" />
          </div>
          <div className="flex items-center space-x-4 px-5">
            <div className="flex flex-col">
              <span>Industry:</span>
              <span className="font-bold">Ecommerce</span>
            </div>
            <img src={shoppingCart} alt="shopping-cart" className="w-16 h-14" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[50%] w-[650px]">
        <img src={laptop} alt="Laptop" className="h-[420px]" />
      </div>
      <div className="absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[64%] w-[494px]">
        <img src={screen} alt="screen" className="h-[360px]" />
      </div>
    </div>
  );
};

export default Hero;
