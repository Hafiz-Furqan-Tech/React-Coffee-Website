import { useLocation } from "react-router-dom";
import Menuicon from "../assets/Menuicon.png";
import bg_2 from "../assets/bg-2.png";

const Booking = () => {
  const URL = useLocation();

  return (
    <>
      <section
        className={`w-full flex items-center flex-col justify-center gap-8 ${
          URL.pathname == "/Contact" && "xl:pt-36 pt-20"
        }`}
      >
        <div className=" flex items-center justify-center flex-col w-full my-14 px-4 gap-6 lg:flex-row xl:w-[90%]">
          <div className="w-full max-w-[750px]  flex items-center justify-center border-4 border-[#E1BC8A] py-3 xl:py-7">
            <div className="bg-[#F3EFE6] w-[85%] flex flex-col items-center justify-center xl:w-[90%]">
              <div className="flex pt-4">
                <img
                  src={Menuicon}
                  alt="menu"
                  className="size-14  object-contain"
                />
                <h1 className="text-3xl font-bold text-center text-Black lg:text-4xl xl:text-5xl">
                  Book Table
                </h1>
                <img
                  src={Menuicon}
                  alt="menu"
                  className="size-14  object-contain"
                />
              </div>
              <form className="w-full px-3 py-4 flex items-center justify-center flex-col xl:px-6 xl:py-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-lg font-semibold outline-none py-2 px-1 mb-6 xl:mb-10 xl:text-xl"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-lg font-semibold outline-none py-2 px-1 mb-6 xl:mb-10 xl:text-xl"
                />
                <input
                  type="time"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-lg font-semibold outline-none py-2 px-1 mb-6 xl:mb-10 xl:text-xl"
                />
                <input
                  type="text"
                  placeholder="Select Deal"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-lg font-semibold outline-none py-2 px-1 mb-6 xl:mb-10 xl:text-xl"
                />
                <input
                  type="date"
                  className="w-full bg-transparent border-b-2 border-gray-600 text-lg font-semibold outline-none py-2 px-1 mb-6 xl:mb-10 xl:text-xl"
                />
                <button className="bg-[#E1BC8A] px-5 py-2">Reserve Now</button>
              </form>
            </div>
          </div>

          <div>
            <img src={bg_2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
