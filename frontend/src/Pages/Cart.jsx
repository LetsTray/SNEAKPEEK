import React from "react";
import Footer from "../Components/Footer";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Cart = () => {
  const [count, setCount] = React.useState(0);
  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className=" w-full">
      <div className=" m-12">
        <div className=" block">
          <div className=" flex justify-between items-center mx-10">
            <p className=" uppercase font-medium">product</p>
            <div className=" flex gap-x-32">
              <p className=" uppercase font-medium">price</p>
              <p className=" uppercase font-medium">quantity</p>
              <p className=" uppercase font-medium">unit price</p>
            </div>
          </div>
          <div className=" border-b-2 my-5 border-gray-100"></div>
          <div className=" flex items-center justify-between mx-10">
            <div className=" flex items-center gap-24">
              <IoCloseCircleOutline className=" text-red-500" />
              <FaRegImage className=" size-24 text-gray-400" />
              <p className=" capitalize">product name</p>
            </div>
            <div className=" flex items-center gap-28">
              <p>Rp x.xxx.xxx</p>
              <div className=" grid grid-cols-3 items-center justify-evenly text-center gap-4 bg-gray-100 px-3 py-1 rounded-lg">
                <FaMinus
                  className=" text-blue-500 text-sm"
                  onClick={handleMinusClick}
                />
                <p className=" text-base">{count}</p>
                <FaPlus
                  className=" text-blue-500 text-sm"
                  onClick={handlePlusClick}
                />
              </div>
              <p>Rp x.xxx.xxx</p>
            </div>
          </div>
          <div className=" border-b-2 my-5 border-gray-100"></div>
          <div className=" flex justify-between mx-8">
            <div className=" block">
              <p className=" uppercase font-medium m-3">promo</p>
              <div className=" flex">
                <div className=" justify-between border border-black ">
                  <input
                    type="text"
                    placeholder="Voucher code"
                    className=" justify-start px-2 py-2 outline-none h-9"
                  ></input>

                  <button className=" h-9 px-2 bg-neonGreen border-l border-black font-medium">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
            <div className=" block justify-center items-center my-9">
              <div className=" flex justify-between">
                <div className=" flex gap-28">
                  <div className=" block">
                    <p className=" my-3 capitalize">subtotal</p>
                    <p className=" my-3 capitalize">shipping fee</p>
                    <p className=" my-3 capitalize">coupon</p>
                  </div>
                  <div className=" block text-right">
                    <p className=" my-3">Rp x.xxx.xxx</p>
                    <p className=" my-3">Rp xxx.xxx</p>
                    <p className=" my-3">No</p>
                  </div>
                </div>
              </div>
              <div className=" border-b-2 border-gray-100"></div>
              <div className=" my-3 flex justify-between">
                <p className=" font-medium text-xl uppercase">total</p>
                <p className=" font-medium text-xl">Rp x.xxx.xxx</p>
              </div>
              <button className=" capitalize text-center bg-neonGreen h-9 border border-black w-72 font-medium shadow-bottom-left">
                check out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
