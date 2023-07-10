import React from "react";
import profile from "../../Assets/profil.png";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
      px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello, <br />
            I'm A Front End Developer
          </h2>
          <p className="text-gray-500 py-4">
            A final year hardworking student who is passionate about technology
            and I'm able to effectively self-manage during independent projects,
            as well as collaborate as part of a team. Passionate about Front-End
            Development and Familiar with JavaScript,React.Js, Tailwind Html and CSS, 
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-700">
              Portofolio
              <span className="group-hover:rotate-90 duration-500">
                <TbSquareRoundedArrowRightFilled size={30} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={profile} className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
