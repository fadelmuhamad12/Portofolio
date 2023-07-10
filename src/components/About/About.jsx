import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, at
          quaerat! Harum corrupti, deleniti consequatur non ipsum fugit magni
          ipsam labore quibusdam quaerat, quam minima provident a veniam eum
          rerum.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nemo quaerat iste repellendus culpa fugit minima aliquam possimus
          ratione dolore, rem illum, tempora repellat pariatur qui laboriosam
          est iusto facere vitae dignissimos assumenda vero esse. Voluptas optio
          ab corporis enim ut! Quod amet voluptas beatae voluptatibus tempore
          quasi dolores molestiae?
        </p>
      </div>
    </div>
  );
};

export default About;
