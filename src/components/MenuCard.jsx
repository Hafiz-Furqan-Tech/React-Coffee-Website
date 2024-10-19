import left from "../assets/object-left.png";
import right from "../assets/object-right.png";

const MenuCard = ({ text }) => {
  return (
    <>
      <div className="w-full">
        {text.map((item, index) => (
          <div
            key={index}
            className="w-full h-56 flex items-center justify-center border-4 border-[#E1BC8A] my-5"
          >
            <div className="bg-[#F3EFE6] h-[85%] w-[85%] flex relative items-center justify-center">
              <img src={left} className="absolute top-1 left-1" />
              <h1 className="text-3xl font-bold text-center xl:text-4xl">
                {item}
              </h1>
              <img src={right} className=" absolute bottom-2 right-2" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="w-full py-6 flex items-center justify-center border-4 border-[#E1BC8A]">
          <div className="bg-[#F3EFE6] w-[90%] flex relative items-center justify-center flex-col gap-8 py-16">
            <img src={left} className="absolute top-0 left-0" />
            <img src={right} className=" absolute bottom-0 right-0" />
            <div>
              <h1 className="border-b-[3px] font-bold text-2xl border-[#E1BC8A] text-center pb-3">
                01: Espresso $14.4
              </h1>
              <p className="font-semibold text-gray-600 pt-6 text-center">
                A bold and concentrated coffee experience, brewed to perfection
                with a rich and intense flavor profile.
              </p>
            </div>
            <div>
              <h1 className="border-b-[3px] font-bold text-2xl border-[#E1BC8A] text-center pb-3">
                02: Cappuccino $14.4
              </h1>
              <p className="font-semibold text-gray-600 pt-6 text-center">
                A classic combination of espresso, steamed milk, and velvety
                milk foam, creating a harmonious balance of flavors and
                textures.
              </p>
            </div>
            <div>
              <h1 className="border-b-[3px] font-bold text-2xl border-[#E1BC8A] text-center pb-3">
                03: Latte $14.4
              </h1>
              <p className="font-semibold text-gray-600 pt-6 text-center">
                Indulge in a creamy and comforting blend of espresso and steamed
                milk, topped with a delicate layer of foam for a smooth and
                satisfying sip.
              </p>
            </div>
            <div>
              <h1 className="border-b-[3px] font-bold text-2xl border-[#E1BC8A] text-center pb-3">
                04: Macchiato $14.4
              </h1>
              <p className="font-semibold text-gray-600 pt-6 text-center">
                Discover the art of contrast with a shot of espresso "stained"
                with a dollop of frothy milk, delivering a bold espresso taste
                with a hint of creamy sweetness
              </p>
            </div>
            <div>
              <h1 className="border-b-[3px] font-bold text-2xl border-[#E1BC8A] text-center pb-3">
                05: Black Coffee $14.4
              </h1>
              <p className="font-semibold text-gray-600 pt-6 text-center">
                Pure and unadulterated, this traditional favorite showcases the
                full-bodied flavor and aroma of carefully brewed coffee beans,
                served without milk or sweeteners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
