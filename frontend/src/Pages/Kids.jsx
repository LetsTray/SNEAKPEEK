import React from 'react'
import { BsFilterSquare } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Kids = () => {
  const products = Array.from({ length: 6 }, (_, index) => ({
    name: "Product name",
    variant: "Variant",
    price: "$55",
  }));

  return (
    <div className=" w-full">
      <div className=" mx-7 my-7">
        <div className=" text-xl">
          <p>
            Home / <b>Kids</b>
          </p>
        </div>

        <div className=" my-8 text-6xl font-bold">
          <p>KIDS</p>
        </div>

        <div className=" flex my-10 justify-between items-center">
          <div className="flex text-gray-500 text-xl">
            <p>12 Products</p>
          </div>
          <div className=" flex items-center gap-2 text-xl">
            <p>Show Filter</p> <BsFilterSquare className=" size-5" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-16">
          {products.map((product, index) => (
            <Link to={`/kids/${index}`} key={index}>
              <div className=" flex border border-black justify-center">
                <div className=" block p-4">
                  <div className=" bg-gray-200 px-40 py-44 flex justify-center items-center">
                    <FaRegImage className=" size-16 text-gray-300" />
                  </div>
                  <div className=" justify-center items-center text-center">
                    <div className=" py-2">
                      <p className=" text-2xl font-bold">{product.name}</p>
                      <p className=" text-base font-medium">
                        {product.variant}
                      </p>
                    </div>

                    <div className=" py-2">
                      <p className=" font-semibold text-xl">{product.price}</p>
                    </div>
                  </div>

                  <div>
                    <button className=" font-medium justify-center items-center text-center border border-black px-36 py-1 bg-neonGreen shadow-bottom-left">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kids
