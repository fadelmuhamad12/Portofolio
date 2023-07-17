import React from "react";
import { Link } from "react-scroll";

const NavListHamburger = (props) => {
  return (
    <>
      {props.onNavText && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {props.onLinks.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500"
              >
                <Link
                  onClick={() => setNavText(false)}
                  to={link}
                  smooth
                  duration={300}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavListHamburger;
