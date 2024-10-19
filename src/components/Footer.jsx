import logo from "../assets/logo-service.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="w-full flex items-center flex-col justify-center gap-8">
      <div className="flex">
        <img src={logo} alt="" />
      </div>
      <div className=" flex items-center justify-center flex-col w-full px-4 gap-6">
        <h1 className="text-4xl font-bold text-[#E1BC8A] text-center">
          STAY CAFFINATED
        </h1>
        <p className="text-lg font-semibold text-gray-300 text-center">
          With Exclusive Offers and Updates!
        </p>
        <p className="text-2xl font-semibold text-white">Follow us on</p>
        <div className="flex items-center justify-around w-full gap-8 pb-8 text-[#E1BC8A] text-2xl lg:text-4xl lg:justify-center">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <MdEmail />
        </div>
        <p className="text-center font-semibold text-lg text-white pb-10">
          2024 All Rights Reserved by Caffine Corner{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
