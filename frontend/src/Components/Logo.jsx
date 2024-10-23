import React from "react";
import nike from "../assets/nike.jpg";
import adidas from "../assets/adidas.jpg";
import newbalance from "../assets/newbalance.jpg";
import converse from "../assets/converse.jpg";

const Logo = () => {
  return (
    <div className=" w-full bg-white">
      <div className=" flex justify-center items-center text-center p-8 text-xl">
        <p>
          <b>Used by the world's most average companies.</b>
        </p>
      </div>

      <div className=" flex justify-around items-center py-2 px-1 border border-black">
        <img src={nike} className=" w-48" />
        <img src={adidas} className=" w-48" />
        <img src={newbalance} className=" w-60" />
        <img src={converse} className=" w-48" />
      </div>
    </div>
  );
};

export default Logo;
