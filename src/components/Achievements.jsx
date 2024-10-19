import MenuIcon from "../assets/MenuIcon.png";
import bg from "../assets/Image.png";
import { useLocation } from "react-router-dom";

const Achievements = () => {
  const URL = useLocation();
  return (
    <section
      className={`w-full flex items-center flex-col justify-center gap-8 ${
        URL.pathname == "/About" && "xl:pt-36 pt-20"
      }`}
    >
      <div className=" flex items-center justify-center flex-col w-full my-14 px-4 gap-6">
        <div className="flex  relative items-center justify-center pt-4  md:px-16">
          <img
            src={MenuIcon}
            alt="menu"
            className="size-14  object-contain absolute top-0 left-0"
          />
          <h1 className="text-3xl font-bold text-center text-slate-100 lg:text-4xl xl:text-6xl">
            OUR ACHIEVEMENTS
          </h1>
          <img
            src={MenuIcon}
            alt="menu"
            className="size-14  object-contain absolute top-0 right-0"
          />
        </div>
        <div className="w-full flex items-center flex-col justify-center gap-14 lg:flex-row xl:pt-10 xl:gap-x-30">
          <div className=" flex items-center justify-center flex-col gap-4">
            <h1 className="text-[#E1BC8A] font-bold text-6xl">25+</h1>
            <p className="text-2xl font-semibold text-gray-300">
              Years of Experience
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col gap-4">
            <h1 className="text-[#E1BC8A] font-bold text-6xl">1000+</h1>
            <p className="text-2xl font-semibold text-gray-300">
              Services Completed
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col gap-4">
            <h1 className="text-[#E1BC8A] font-bold text-6xl">21</h1>
            <p className="text-2xl font-semibold text-gray-300">
              Experienced Staff
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col gap-4">
            <h1 className="text-[#E1BC8A] font-bold text-6xl">1200+</h1>
            <p className="text-2xl font-semibold text-gray-300">
              Happy Customers
            </p>
          </div>
        </div>
        <div className="w-full h-56 flex items-center justify-center border-4 border-[#E1BC8A] my-10 lg:h-96 xl:h-96 xl:w-[70%]">
          <div className="bg-[#F3EFE6] h-[85%] w-[85%] flex  items-center justify-center lg:w-[95%]">
            <img src={bg} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
