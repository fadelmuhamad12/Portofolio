import React from "react";
import stream from "../../Assets/f2k.png";
import travel from "../../Assets/GoTravel.png";
import PortoList from "./PortoList";

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
        <PortoList list={porto}/>
      </div>
    </div>
  );
};

export default Portofolio;
