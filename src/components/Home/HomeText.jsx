import React from 'react'
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";

const HomeText = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold sm:text-5xl text-white mt-32 lg:mt-0 md:mt-0  ">
            Hello, <br />
            I'm A Front End Developer
          </h2>
          <p className="text-gray-500 py-4">
            A final year hardworking student who is passionate about technology
            and I'm able to effectively self-manage during independent projects,
            as well as collaborate as part of a team. Passionate about Front-End
            Development and Familiar with JavaScript,React.Js, Tailwind Html and
            CSS,
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
  )
}

export default HomeText
