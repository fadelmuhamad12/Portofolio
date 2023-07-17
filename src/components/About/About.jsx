import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 ">About</p>
        </div>
        <p className="text-xl mt- text-justify px-5 xl:px-0 md:px-0">
          A final year hardworking student who is passionate about technology
          and I'm able to effectively self-manage during independent projects,
          as well as collaborate as part of a team. Passionate about Front-End
          Development and Familiar with JavaScript,React.Js, Tailwind Html and
          CSS,
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
