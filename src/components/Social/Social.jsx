import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {

    // const links = [
    //     {
    //         id:1,
    //         child: (
    //             <>
    //              LinkedIn <FaLinkedin size={30} />
    //             </>
    //         ),
    //         href: 'https://linkedIn.com',
    //         style: "rounded-tr-md"
    //     },
    //     {
    //         id:2,
    //         child: (
    //             <>
    //              LinkedIn <FaGithub size={30} />
    //             </>
    //         ),
    //         href: 'https://github.com/fadelmuhamad12',
    //         style: "rounded-tr-md"
    //     },
    //     {
    //         id:3,
    //         child: (
    //             <>
    //              LinkedIn <HiOutlineMail size={30} />
    //             </>
    //         ),
    //         href: 'mailto:fadelmuhamad12.fm@gmail.com',
    //         style: "rounded-tr-md"
    //     },
    //     {
    //         id:3,
    //         child: (
    //             <>
    //              Cv <BsFillPersonLinesFill size={30} />
    //             </>
    //         ),
    //         href: '/CV-Fadel Muhamad Prianto.pdf',
    //         style: "rounded-tr-md",
    //         download: true
    //     },
    // ]



  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-500 ">
          <a
            href="https://linkedin.com/in/fadel-muhamad-prianto"
            className="flex justify-between items--center w-full text-white"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-500 ">
          <a
            href="https://github.com/fadelmuhamad12"
            className="flex justify-between items--center w-full text-white"
          >
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-500 ">
          <a
            href="mailto:fadelmuhamad12.fm@gmail.com"
            className="flex justify-between items--center w-full text-white"
          >
            <>
              Email <HiOutlineMail size={30} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-500 ">
          <a
            href="/CV-Fadel Muhamad Prianto.pdf"
            className="flex justify-between items--center w-full text-white"
            download={true}
          >
            <>
              CV <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Social;
