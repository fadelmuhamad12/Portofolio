import React from 'react'
import { Link } from 'react-scroll'


const NavBarList = (props) => {
  return (
   <>
     <ul className="hidden md:flex">
        {props.list.map(({id, link})=> {
          return(
            <li key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-120 duration-200">
            <Link to={link} smooth duration={300}>{link}</Link>
          </li>
          )
        })}
  
        </ul>
   </>
  )
}

export default NavBarList
