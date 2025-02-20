import Menuicon from "../assets/Menuicon.png";
import Chef from "./Chef";

const Chefs = () => {
  return (
    <section className="w-full flex items-center flex-col justify-center gap-8">
      <div className="flex">
        <img src={Menuicon} alt="menu" className="size-16  object-contain" />
        <h1 className="text-3xl font-bold text-center text-white lg:text-5xl xl:text-6xl">
          OUR CHEFS
        </h1>
        <img src={Menuicon} alt="menu" className="size-16  object-contain" />
      </div>
      <div className=" flex items-center justify-center flex-col w-full my-14 px-4">
        <Chef />
      </div>
    </section>
  );
};

export default Chefs;
