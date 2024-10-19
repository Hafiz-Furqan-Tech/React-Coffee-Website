import chef1 from "../assets/chef-1.png";
import chef2 from "../assets/chef-2.png";
import chef3 from "../assets/chef-3.png";
import chef4 from "../assets/chef-4.png";

const Chef = () => {
  const chefDetails = [
    {
      img: chef1,
      name: "Chef Leo",
      product: "Head Chef",
    },
    {
      img: chef2,
      name: "Chef Luca",
      product: "Pastry Chef",
    },
    {
      img: chef3,
      name: "Chef Mia",
      product: "Souce Chef",
    },
    {
      img: chef4,
      name: "Chef George",
      product: "Barista Chef",
    },
  ];

  return (
    <div className="lg:w-full lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-10 xl:grid-cols-4 xl:grid-rows-1">
      {chefDetails.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full flex items-center justify-center border-4 border-[#E1BC8A] my-5"
          >
            <div className="bg-[#F3EFE6] w-[85%] flex flex-col items-center justify-center my-4">
              <img src={item.img} alt={item.name} />
              <h1 className="text-2xl font-bold text-center"> {item.name} </h1>
              <p className="text-lg font-semibold text-gray-400">
                {item.product}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chef;
