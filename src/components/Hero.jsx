import img from "../assets/hero1.png";
import since from "../assets/Since.png";
import since2 from "../assets/Since (2).png";

const Hero = () => {
  return (
    <>
      <section
        className="min-h-screen max-w-full bg-cover bg-center text-white mt-[50px] flex items-center justify-around flex-col py-16"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-5xl font-bold text-center xl:text-6xl">
          <h1 className="inline-block">Caffeine Corner</h1>
          <div className="w-[75%] h-1 bg-[#E1BC8A] mx-auto mt-2"></div>
          <div className="w-[75%] h-1 bg-[#E1BC8A] mx-auto mt-2"></div>
        </div>
        <div className="w-full font-semibold flex flex-col items-center gap-8 px-5 mt-7 xl:mt-0 xl:px-36">
          <p className="text-center xl:text-2xl">
            Welcome to Caffeine Corner, where every sip is a moment of pure
            bliss. Immerse yourself in the rich aromas & flavors of our
            handcrafted coffee.
          </p>
          <p className="text-center xl:text-lg">
            From the smooth & velvety lattes to the bold & robust espressos, our
            expertly roasted beans are carefully sourced to deliver an
            unparalleled coffee experience.
          </p>
          <button className="bg-[#36332D] font-bold text-white px-2 py-3 border-4 border-[#E1BC8A] xl:text-lg">
            Discover Our Menu
          </button>
        </div>
      </section>
      <div className="w-full relative py-20 flex items-center justify-center">
        <img
          src={since2}
          alt="since2"
          className="absolute size-24 top-10 xl:size-32"
        />
        <img
          src={since}
          alt="since"
          className="bg-cover bg-center w-[90%] border-4 border-[#E1BC8A]"
        />
      </div>
    </>
  );
};

export default Hero;
