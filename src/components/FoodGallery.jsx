import MenuIcon from "../assets/Menuicon.png";
import anim1 from "../assets/anim-1.png";
import anim2 from "../assets/anim-2.png";
import anim3 from "../assets/anim-3.png";
import anim4 from "../assets/anim-4.png";
import anim5 from "../assets/anim-5.png";
import anim6 from "../assets/anim-6.png";

const FoodGallery = () => {
  return (
    <section className="w-full flex items-center flex-col justify-center gap-8 pb-20">
      <div className="flex items-center justify-center gap-2">
        <img src={MenuIcon} alt="menu" className="w-16 h-16 object-contain" />
        <h1 className="text-3xl font-bold text-center text-white lg:text-4xl xl:text-6xl">
          Food Gallery
        </h1>
        <img src={MenuIcon} alt="menu" className="w-16 h-16 object-contain" />
      </div>
      <div className="overflow-hidden w-full">
        <div
          className="w-full flex items-center gap-6 animate-scroll"
          style={{
            animation: "scroll 9s linear infinite",
          }}
        >
          <img src={anim1} className="w-28 h-28 lg:w-44 lg:h-44" alt="food1" />
          <img src={anim2} className="w-28 h-28 lg:w-44 lg:h-44" alt="food2" />
          <img src={anim3} className="w-28 h-28 lg:w-44 lg:h-44" alt="food3" />
          <img src={anim4} className="w-28 h-28 lg:w-44 lg:h-44" alt="food4" />
          <img src={anim5} className="w-28 h-28 lg:w-44 lg:h-44" alt="food5" />
          <img src={anim6} className="w-28 h-28 lg:w-44 lg:h-44" alt="food6" />
          <img src={anim1} className="w-28 h-28 lg:w-44 lg:h-44" alt="food1" />
          <img src={anim2} className="w-28 h-28 lg:w-44 lg:h-44" alt="food2" />
          <img src={anim1} className="w-28 h-28 lg:w-44 lg:h-44" alt="food1" />
          <img src={anim2} className="w-28 h-28 lg:w-44 lg:h-44" alt="food2" />
          <img src={anim3} className="w-28 h-28 lg:w-44 lg:h-44" alt="food3" />
          <img src={anim4} className="w-28 h-28 lg:w-44 lg:h-44" alt="food4" />
          <img src={anim5} className="w-28 h-28 lg:w-44 lg:h-44" alt="food5" />
          <img src={anim6} className="w-28 h-28 lg:w-44 lg:h-44" alt="food6" />
          <img src={anim1} className="w-28 h-28 lg:w-44 lg:h-44" alt="food1" />
          <img src={anim2} className="w-28 h-28 lg:w-44 lg:h-44" alt="food2" />
          <img src={anim3} className="w-28 h-28 lg:w-44 lg:h-44" alt="food3" />
          <img src={anim4} className="w-28 h-28 lg:w-44 lg:h-44" alt="food4" />
          <img src={anim5} className="w-28 h-28 lg:w-44 lg:h-44" alt="food5" />
          <img src={anim6} className="w-28 h-28 lg:w-44 lg:h-44" alt="food6" />
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
