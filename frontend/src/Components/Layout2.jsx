import React from "react";
import nbimage from "../assets/nbimage.png";
import { useState } from "react";

const Layout2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseClick = () => setIsOpen(!isOpen);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className=" bg-white flex items-center justify-around p-8">
      <div className=" block">
        <div className=" text-8xl">
          <p>
            <b>LOREM IPSUM</b>
          </p>
          <p>
            <b>LOREM IPSUM</b>
          </p>
          <p>
            <b>LOREM IPSUM</b>
          </p>
        </div>

        <div className=" mt-8 text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Duis aute irure dolor inreprehenderit in voluptate velit esse
            cillum,
            <br />
            excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        <button
          className= {`border border-black text-xl px-6 py-1 bg-neonGreen mt-24 shadow-bottom-left
          ${isOpen? "bg-[#F4FFCA]" : isHovered ? "bg-[#E7FF8A]" : "bg-neonGreen"}
          `}

          onClick={handleMouseClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Shop
        </button>
      </div>

      <img src={nbimage} alt="" className=" w-2/5" />
    </div>
  );
};

export default Layout2;
