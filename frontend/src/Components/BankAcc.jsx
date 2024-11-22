import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const BankAcc = () => {
  return (
    <div className=" w-full">
      <div className=" block m-10">
        <p className=" capitalize text-3xl font-medium">
          you can use a maximum of 3 bank accounts.
        </p>
        <div className=" block my-10">
          <div className=" flex items-center justify-between">
            <div className=" items-center flex gap-5">
              <div className=" border border-blue-900 bg-blue-900 w-28 h-9"></div>
              <div className=" block">
                <p className=" uppercase font-bold text-xl">pt. bank example</p>
                <p className=" text-gray-500 text-sm">01234567890</p>
                <p className=" text-gray-500 text-sm">a.n USERNAME</p>
              </div>
            </div>
            <FaRegTrashAlt className=" size-7" />
          </div>
          <div className=" border-b-2 my-5"></div>
        </div>

        <button className=" capitalize bg-neonGreen border border-black py-2 px-6 font-medium rounded-2xl mt-10">
          add new bank account
        </button>
      </div>
    </div>
  );
};

export default BankAcc;
