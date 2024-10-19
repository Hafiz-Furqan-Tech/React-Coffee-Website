import MenuIcon from "../assets/Menuicon.png";
import Product from "./Product";

const PriceList = () => {
  return (
    <section className=" w-full flex items-center justify-center flex-col">
      <div className="flex items-center justify-around">
        <img src={MenuIcon} alt="menu" className="size-16  object-contain" />
        <h1 className="text-white text-3xl font-bold text-center lg:text-4xl xl:text-6xl">
          Premium Brews
        </h1>
        <img src={MenuIcon} alt="menu" className="size-16 object-contain" />
      </div>
      <div className=" flex items-center justify-center flex-col w-full my-14">
        <Product />
      </div>
    </section>
  );
};

export default PriceList;
