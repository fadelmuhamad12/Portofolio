import React from 'react'

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center">
      <form action="https://getform.io/f/26e27bb7-8e06-4a7a-97bc-7a604e005618" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea 
              name="message"
              rows="12"
              className="py-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Text Me"
           
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-100 duration-500">
              Let's Talk
            </button>
          </form>
    </div>
  )
}

export default ContactForm
