import React from "react";
import { useState } from "react";

const Cta = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className=" flex text-white border border-neonPurple bg-neonPurple h-64 items-center justify-around">
      <p className=" text-5xl">
        <b>
          Medium length heading
          <br />
          goes here
        </b>
      </p>
      <div className=" block text-base">
        <p className=" my-3">
          <b>Subscribe</b>
        </p>
        <p className=" my-3">
          Join our newsletter to stay up to date on features and releases.
        </p>
        <div className=" flex gap-4">
          <input
            placeholder="Enter your email"
            type=""
            className=" outline-none p-2 w-96 text-black"
          />
          <button
            className={`bg-neonPurple text-white px-6 border border-white ${
              isOpen ? "hover:bg-white hover:text-neonPurple" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Subscribe
          </button>
        </div>
        <p className=" mt-4 text-xs">
          By subscribing you agree with our <u>Privacy Policy</u> and profide
          consent to receive updates <br /> from our company.
        </p>
      </div>
    </div>
  );
};

export default Cta;
