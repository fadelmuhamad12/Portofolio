import React from "react";
import stream from "../../Assets/f2k.png";
import travel from "../../Assets/GoTravel.png";

const Portofolio = () => {
  const porto = [
    {
      id: 1,
      src: stream,
    },
    {
      id: 2,
      src: travel,
    },
  ];

  return (
    <div
      name="portofolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Portofolio</p>
          <p className="text-2xl font-semibold py-3">
            Check My Latest Work Right Here
          </p>
        </div>

        <div
        
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"
        >
          {porto.map(({ id, src }) => {
            return (
              <div  id={id} className="shadow-md shadow-gray-600">
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
      </div>
    </div>
  );
};

export default Portofolio;
