import React from 'react'

const SocialList = (props) => {
  return (
    <div>
      {props.list.map(({ id, child, href }) => {
          return (
            <li key={id}className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-500 ">
              <a
                href={href}
                className="flex justify-between items--center w-full text-white"
              >
                <>{child}</>
              </a>
            </li>
          );
        })}
    </div>
  )
}

export default SocialList
