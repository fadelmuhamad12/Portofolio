import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-500 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div pb-8>
          <p className="text-4xl font-bold inline border-b-4">Contact</p>
          <p className="py-4">Submit the form to get in touch with me</p>
        </div>
          <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
