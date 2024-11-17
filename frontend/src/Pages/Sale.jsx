import React from 'react'
import { BsFilterSquare } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";

const Sale = () => {
  const products = Array.from({ length: 12 }, (_, index) => ({
    name: "Product name",
    variant: "Variant",
    price: "$55",
  }));

  return (
    <div className=" w-full">
      <div className=" mx-7 my-7">
        <div className=" text-xl">
          <p>
            Home / <b>Brands</b>
          </p>
        </div>

        <div className=" my-8 text-6xl">
          <h1 className=" font-bold ">ALL BRANDS</h1>
        </div>

        <div className=" flex justify-between items-center my-10">
          <div className="flex text-gray-500 text-xl">
            <p>12 Products</p>
          </div>
          <div className=" flex items-center gap-2 text-xl">
            <p>Show Filter</p> <BsFilterSquare className=" size-5" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-10 gap-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className=" flex border border-black justify-center"
            >
              <div className=" block p-3">
                <div className=" bg-gray-200 px-28 py-32 flex justify-center items-center">
                  <FaRegImage className=" size-16 text-gray-300 " />
                </div>
                <div className=" justify-center items-center text-center">
                  <div className=" py-2">
                    <p className=" text-xl font-bold">{product.name}</p>
                    <p className=" text-sm font-medium">{product.variant}</p>
                  </div>

                  <div className=" py-2">
                    <p className=" font-semibold text-base">{product.price}</p>
                  </div>
                </div>

                <div>
                  <button className=" font-medium justify-center items-center text-center border border-black px-24 py-1 bg-neonGreen shadow-bottom-left">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex justify-center items-center mt-10">
          <button className=" justify-center items-center text-center border border-black text-xl px-6 py-1 bg-neonGreen shadow-bottom-left">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale
