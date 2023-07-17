import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBarList from "./NavBarList";
import NavListHamburger from "./NavListHamburger";

const NavBar = () => {
  const [navText, setNavText] = useState(false);

    const links = [
      {
        id: 1,
        link: "Home",
      },
      {
        id: 2,
        link: "about",
      },
      {
        id: 3,
        link: "tech",
      },
      {
        id: 4,
        link: "portofolio",
      },
      {
        id: 5,
        link: "contact",
      },
    ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl ml-2">...</h1>
      </div>
      <NavBarList list={links}/>
      <div
        onClick={() => setNavText(!navText)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navText ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <NavListHamburger onNavText={navText} onLinks={links}/>

   
    </div>
  );
};

export default NavBar;
