import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full bg-white shadow-md p-4 flex justify-around items-center fixed z-50">
        <h1 className="text-4xl font-bold text-blue-700">
          <a href="#">
            AquaLuxe <span className="text-zinc-500">Jewelry</span>{" "}
          </a>
        </h1>
        <button
          className="text-blue-700 md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul
          className={`text-center md:flex md:space-x-6 absolute md:static bg-white w-full left-0 top-16 md:top-0 md:w-auto md:flex-row transition-all ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-2 bg-blue-600 rounded-3xl text-white cursor-pointer font-bold ease-in-out duration-300">
            Home
          </li>
          <li className="p-2 rounded-3xl hover:bg-blue-600 hover:text-white cursor-pointer font-bold ease-in-out duration-300">
            Shop
          </li>
          <li className="p-2 rounded-3xl hover:bg-blue-600 hover:text-white cursor-pointer font-bold ease-in-out duration-300">
            Offers
          </li>
          <li className="p-2 rounded-3xl hover:bg-blue-600 hover:text-white cursor-pointer font-bold ease-in-out duration-300">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
