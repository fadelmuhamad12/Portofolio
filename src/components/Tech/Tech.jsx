import React from 'react'
import css from '../../Assets/css.png';
import github from '../../Assets/github.png';
import html from '../../Assets/html.png';
import javascript from '../../Assets/javascript.png';
import reactimg from '../../Assets/react.png';
import tailwind from '../../Assets/tailwind.png';


const Tech = () => {

    const tech = [ 
        {
            id: 1,
            img:css,
            text:"CSS",
            style: "shadow-blue-500"
        },
        {
            id: 2,
            img:github,
            text:"Github",
            style: "shadow-white"
        },
        {
            id: 3,
            img:html,
            text:"HTML",
            style: "shadow-orange-500"
        },
        {
            id: 4,
            img:javascript,
            text:"JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 5,
            img:reactimg,
            text:"React Js",
            style: "shadow-sky-500"
        },
        {
            id: 1,
            img:tailwind,
            text:"Tailwind",
            style: "shadow-sky-500"
        },
    ]


  return (
    <div name="tech" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 fkex flex-col justify-center w-full h-full text-white'>
         
          <div>
              <p className='text-4xl font-bold border-b-4 inline p-2'>Tech</p>
              <p className='py-6 font-semibold p-6'>Im Familiar with</p>
          </div>
            
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
              {tech.map(({id, img, text, style})=> {
                  return (
                    <div key={id} className={ `shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style} `}>
                    <img src={img} className="w-20 mx-auto"/>
                    <p className='pt-2'>{text}</p>
                </div>

                  )
              })}

             
          </div>
      </div>
    </div>
  )
}

export default Tech
