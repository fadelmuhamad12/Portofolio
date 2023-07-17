import React from "react";
import profile from "../../Assets/profil.png";
import HomeProfile from "./HomeProfile";
import HomeText from "./HomeText";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <HomeText />
        </div>
        <HomeProfile profile={profile} />
      </div>
    </div>
  );
};

export default Home;
