import React from "react";
import nbimage from "../assets/nbimage.png";
import { useState } from "react";

const Layout2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseClick = () => setIsOpen(!isOpen);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const placeholders = Array.from({ length: 3 }, (_, index) => ({
    content: "lorem ipsum",
  }));

  return (
    <div className=" bg-white flex items-center justify-around p-8">
      <div className=" block">
        <div className="grid grid-cols-1">
          {placeholders.map((item, index) => (
            <div className=" text-8xl">
              <p className=" uppercase font-bold">{item.content}</p>
            </div>
          ))}
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
          className={`border border-black text-xl px-6 py-1 bg-neonGreen mt-24 shadow-bottom-left ${
            isOpen
              ? "hover:bg-[#F4FFCA]"
              : isHovered
              ? "hover:bg-[#E7FF8A]"
              : "hover:bg-neonGreen"
          }`}
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
