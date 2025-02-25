import React from 'react';
import { Navbarmenu } from "../mok.data/data";
import { GiAerialSignal } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";

export const Navbar = () => {
  return ( 
    <nav>
      <div className="container flex item-center justify-between items-center py-8">
        {/* login section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <GiAerialSignal />
          <p>coder</p>
          <p className="text-2xl flex items-center gap-2 font-bold uppercase">gym</p>
        </div>

        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {Navbarmenu.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* icons section */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <FaSearch className="text-2xl" />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <PiShoppingCartThin className="text-2xl" />
          </button>
          <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
            Login
          </button>
        </div>
      </div>

      {/* mobile hamburger menu section */}
      <div className="md:hidden">
        <menu className="text-4xl"></menu>
      </div>
    </nav>
  );
};

export default Navbar;
