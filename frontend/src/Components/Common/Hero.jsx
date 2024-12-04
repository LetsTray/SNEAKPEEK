import React from "react";
import hero from "../../assets/images/hero.jpg"; // Make sure the image path is correct

const Hero = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen bg-cover bg-center text-white flex items-center justify-start"
        style={{ backgroundImage: `url(${hero})` }} // Set background image via inline style
      >
        <div className="ml-10 text-6xl">
          <p className="pb-3">
            <b>Your</b>
          </p>
          <p className="pb-3">
            <b>Gateway to</b>
          </p>
          <p className="pb-3">
            <b>Exclusive</b>
          </p>
          <p>
            <b>Sneakers.</b>
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center border border-black h-32 bg-black">
        <div className="flex text-6xl">
          <p className="text-neonGreen">
            <b>LOREM IPSUM</b>
          </p>
          <p className="text-white">
            <b>//</b>
          </p>
          <p className="text-gray-400">
            <b>LOREM IPSUM</b>
          </p>
          <p className="text-white">
            <b>//</b>
          </p>
          <p className="text-white">
            <b>LOREM IPSUM</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
