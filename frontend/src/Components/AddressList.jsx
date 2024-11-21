import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const AddressList = () => {
  return (
    <div className=" w-full">
      <div className=" block m-10">
        <div className=" border border-gray-600 flex items-center">
          <input
            placeholder="Tulis Nama Alamat / Kota / Kecamatan / Tujuan Pengiriman"
            type="text"
            className=" outline-none py-3 px-3 w-full text-lg h-12"
          ></input>
          <div className=" border-l border-gray-600 h-10 "></div>
          <CiSearch className=" w-11 size-8 mx-2" />
        </div>
        <div className=" flex justify-end items-end">
          <button className=" flex items-center gap-2 bg-neonGreen border border-black py-2 px-3 font-medium rounded-2xl mt-10">
            <FaPlus className=" size-3" />
            Tambah Alamat Baru
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressList;
