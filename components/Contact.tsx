import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="component-base">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>
      <div className="text-4xl font-semibold text-center">
        <h4>I have got just what you need.</h4>
        <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
      </div>

      <div></div>
    </div>
  );
}

export default Contact;
