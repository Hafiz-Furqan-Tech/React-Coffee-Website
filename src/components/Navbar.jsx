import { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 h-20 w-full bg-[#36332D] flex items-center justify-between px-2 py-6 gap-10 lg:px-10 z-[1060] xl:py-12">
      <div className="z-[1060]">
        <img src={Logo} alt="logo" className="h-[80%] w-full" />
      </div>
      <div className="z-[1060] lg:hidden text-white">
        <IoMdMenu className="text-4xl " onClick={handleToggle} />
      </div>
      <ul
        className={`${open ? "translate-x-0" : "-translate-x-full"}
        inset-0 fixed flex  bg-[#36332d] text-white items-center justify-center flex-col gap-10 text-xl font-bold transition-all duration-300 ease-in-out md:right-[65%] lg:hidden`}
      >
        <li>
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              `${isActive ? "text-[#E1BC8A]" : "text-white"}`
            }
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-[#E1BC8A]" : "text-white"
            }
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Menu"
            className={({ isActive }) =>
              isActive ? "text-[#E1BC8A]" : "text-white"
            }
            onClick={() => setOpen(false)}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-[#E1BC8A]" : "text-white"
            }
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        <button className="px-4 py-3 bg-gray-800 border-4 border-yellow-600">
          Have a Coffee
        </button>
      </ul>

      <ul className="hidden items-center gap-10 text-white text-2xl font-bold lg:flex">
        <li>
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive ? "text-[#E1BC8A]" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-[#E1BC8A]" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Menu"
            className={({ isActive }) =>
              isActive ? "text-[#E1BC8A]" : "text-white"
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-[#E1BC8A]" : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button className="hidden px-3 py-2 text-slate-50 font-semibold bg-gray-800 border-2 border-yellow-600 lg:block">
        Have a Coffee
      </button>
    </nav>
  );
};

export default Navbar;
