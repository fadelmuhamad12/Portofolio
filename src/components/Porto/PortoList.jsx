import React from "react";

const PortoList = (props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
      {props.list.map(({ id, src }) => {
        return (
          <div id={id} className="shadow-md shadow-gray-600">
            <img
              src={src}
              alt=""
              className="rounded-md duration-500 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-2 m-4 duration-500 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-2 m-4 duration-500 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortoList;
