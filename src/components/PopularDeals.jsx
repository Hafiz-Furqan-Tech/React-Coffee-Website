import MenuIcon from "../assets/Menuicon.png";
import img4 from "../assets/Image-4.png";
import img5 from "../assets/Image-5.png";

const PopularDeals = () => {
  return (
    <section className="w-full flex items-center flex-col justify-center gap-8">
      <div className="flex">
        <img src={MenuIcon} alt="menu" className="size-16  object-contain" />
        <h1 className="text-3xl font-bold text-center text-white lg:text-4xl xl:text-6xl">
          Popular Deals
        </h1>
        <img src={MenuIcon} alt="menu" className="size-16  object-contain" />
      </div>

      <div className=" flex items-center justify-center flex-col w-full my-14 px-4 gap-6 lg:flex-row">
        <div className="w-full max-w-[600px] flex items-center justify-center border-4 py-4 border-[#E1BC8A]">
          <div className="bg-[#F3EFE6] w-[90%] flex  items-center justify-center flex-col">
            <img src={img4} className="h-[250px] max-h-[300px] w-full " />
            <h1 className="text-3xl font-bold text-center text-[#E1BC8A]">
              Morning Delight
            </h1>
            <ol className="flex items-start justify-center flex-col gap-2 list-disc py-5 text-lg text-gray-600 font-semibold pl-6">
              <li>Coffee + Pastry Combo. </li>
              <li> Perfect Start to Your Day.</li>
              <li>Discounted BreakFast Pear.</li>
            </ol>
            <h3 className="text-black font-bold text-2xl">$ 10.99</h3>
          </div>
        </div>
        <div className="w-full max-w-[600px] flex items-center justify-center border-4 py-4 border-[#E1BC8A]">
          <div className="bg-[#F3EFE6] w-[90%] flex  items-center justify-center flex-col">
            <img src={img5} className="h-[250px] max-h-[300px] w-full" />
            <h1 className="text-3xl font-bold text-center text-[#E1BC8A]">
              Happy Hour Spacial
            </h1>
            <ol className="flex items-start justify-center flex-col gap-2 list-disc py-5 text-lg text-gray-600 font-semibold pl-6">
              <li>BOGO Beverages. </li>
              <li> Double the Refreshment.</li>
              <li>Limited-Time Offer.</li>
            </ol>
            <h3 className="text-black font-bold text-2xl">$ 10.99</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDeals;
