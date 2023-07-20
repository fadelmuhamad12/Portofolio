import React from "react";
import { Link } from "react-scroll";

const PortoList = (props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 px-auto sm:px-0">
      {props.list.map(({ id, src, title, link, github }) => {
        return (
          <div id={id} className="shadow-md shadow-gray-600">
            <img
              src={src}
              alt="Gambar"
              className="rounded-md duration-500 hover:scale-110"
            />
            <div className="flex items-center justify-center">
              <a href={link}>
                <button className="w-1/2 px-6 py-4 m-4 duration-500 hover:scale-105">
                  Demo
                </button>
              </a>

              <p className="text-center font-bold">{title}</p>
              <a href={github}>
                <button className="w-1/2 px-6 py-2 m-4 duration-500 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortoList;
