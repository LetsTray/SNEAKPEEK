import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";

const ShoppingBag = () => {
  return (
    <div className=" w-full">
      <div className=" block border-2 border-black">
        <div className=" flex gap-x-7 justify-start items-center mx-4 py-4">
          <CgProfile className=" size-14" />
          <div className=" block">
            <p className=" font-bold text-2xl">User</p>
            <p className=" text-gray-400">08XXXXXXXXXX</p>
          </div>
        </div>
        <div className=" border-b-2 border-black"></div>
        <div>
          <div className=" block mx-5 py-2 my-5">
            <p className=" uppercase font-medium text-xl">shopping bag</p>
            <div className=" border-b-2 border-gray-100 py-1"></div>
            <div className=" m-3 block">
              <div className=" flex items-center justify-between">
                <div className=" grid grid-cols-3 items-center justify-evenly text-center gap-4 bg-gray-100 px-3 py-1 rounded-lg">
                  <FaMinus className=" text-blue-500 text-sm" />
                  <p className=" text-base">0</p>
                  <FaPlus className=" text-blue-500 text-sm" />
                </div>
                <FaRegImage className=" text-gray-400 size-24" />
              </div>
            </div>

            {/*<div className=" flex justify-between mt-10">
              <p className=" uppercase font-medium text-xl">total</p>
              <p className=" uppercase font-medium text-xl">Rp X.XXX.XXX</p>
            </div>*/}
          </div>
        </div>
        <div className=" flex justify-between mx-5 py-2 my-5 items-end">
          <p className=" uppercase font-medium text-xl">total</p>
          <p className=" uppercase font-medium text-xl">Rp X.XXX.XXX</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
