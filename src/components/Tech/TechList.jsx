import React from "react";

const TechList = (props) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
      {props.list.map(({ id, img, text, style }) => {
        return (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style} `}
          >
            <img src={img} className="w-20 mx-auto" />
            <p className="pt-2">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TechList;
