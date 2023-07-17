import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import SocialList from "./SocialList";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedIn.com/in/fadel-muhamad-prianto",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/fadelmuhamad12",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:fadelmuhamad12.fm@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Cv <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CV-Fadel Muhamad Prianto.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <SocialList list={links}/>
      </ul>
    </div>
  );
};

export default Social;
