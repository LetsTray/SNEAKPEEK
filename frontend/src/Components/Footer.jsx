import React from "react";
import whitelogo from "../assets/whitelogo.png";

const Footer = () => {
  const numberWords = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
  ];

  const links = Array.from({ length: 15 }, (_, index) => ({
    content: `Link ${numberWords[index]}`,
  }));


  return (
    <div className=" bg-black border border-black text-white block py-8 h-auto">
      <div className=" flex text-base px-12 pb-12">
        <img src={whitelogo} alt="" className=" flex size-14 w-24" />
        <div className=" flex mx-32">
          <div className=" grid grid-cols-3">
            {links.map((link, index) => (
              <p className=" my-3 mx-28">{link.content}</p>
            ))}
          </div>
        </div>
      </div>

      <p className=" flex justify-start px-12">
        &copy; 2024 MPPL. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
