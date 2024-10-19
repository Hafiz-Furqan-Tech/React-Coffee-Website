import { useLocation } from "react-router-dom";
import MenuIcon from "../assets/Menuicon.png";
import MenuCard from "./MenuCard";

const Menu = () => {
  const URL = useLocation();
  return (
    <section
      className={`w-full flex items-center flex-col justify-center gap-8 ${
        URL.pathname == "/Menu" && "xl:pt-36 pt-20"
      }`}
    >
      <div className="flex">
        <img src={MenuIcon} alt="menu" className="size-16  object-contain" />
        <h1 className="text-3xl font-bold text-center text-white lg:text-4xl xl:text-6xl">
          OUR MENU
        </h1>
        <img src={MenuIcon} alt="menu" className="size-16  object-contain" />
      </div>
      <div className=" flex relative items-center justify-center flex-col w-full  my-14 px-4 gap-6 lg:flex-row">
        <MenuCard text={["COFFEE", "TEA", "PASTRIES", "BEVERAGES"]} />
      </div>
    </section>
  );
};

export default Menu;
