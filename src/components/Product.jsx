import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Product = () => {
  const products = [
    {
      img: img1,
      name: "MOCHA DELIGHT",
      price: "$14.99",
    },
    {
      img: img2,
      name: "JAVA BLISS",
      price: "$14.99",
    },
    {
      img: img3,
      name: "EXPRESSO EUPHORIA",
      price: "$14.99",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-10">
      {products.map((item, index) => (
        <div
          key={index}
          className="text-white flex items-center flex-col gap-3"
        >
          <img src={item.img} alt={item.name} className="object-cover" />
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <p className="text-lg font-semibold text-[#E1BC8As]">{item.price}</p>
          <button className="bg-[#E1BC8A] px-5 py-2">Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
