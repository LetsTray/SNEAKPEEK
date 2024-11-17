import React from "react";
import { useParams } from "react-router-dom";
import { RiDropdownList, RiStarSFill } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const ProductDetail = () => {
    
  const { id } = useParams();

  const product = {
    name: "Product name",
    rating: "(3.5 stars) 10 reviews",
    price: "$55",
    quantity: "1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    shipping:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  const placeHolders = Array.from({ length: 4 }, (_, index) => ({}));

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className=" w-full">
      <div className=" mx-7 my-7">
        <div className=" text-xl my-5">
          <p>
            Home / Brand / <b>Brand</b>
          </p>
        </div>

        <div className=" flex justify-evenly gap-8">
          {/*<div>
            <div className=" grid grid-cols-1 gap-4">
              {placeHolders.map((placeholder, index) => (
                <div key={index} className=" flex">
                  <div className="flex justify-center items-center w-full bg-gray-200 px-8 py-10">
                    <FaRegImage className="text-gray-300 size-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" bg-gray-200 px-60 py-64">
            <FaRegImage className=" text-gray-300 size-20" />
          </div>*/}

          <div className=" block">
            <div className=" text-5xl font-bold">
              <p>{product.name}</p>
            </div>
            <div className=" text-gray-400 text-sm my-2">
              <p>{product.rating}</p>
            </div>
            <div className=" text-2xl font-bold my-3">
              <p>{product.price}</p>
            </div>
            <div className=" text-base text-justify my-2">
              <p>{product.description}</p>
            </div>
            <div>
              <p>Variant</p>
              <div
                className=" border border-black text-left "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p>
                  Select{" "}
                  {!isOpen ? (
                    <FiChevronDown className=" text-lg" />
                  ) : (
                    <FiChevronUp className=" text-lg" />
                  )}
                </p>
              </div>
            </div>
            <div>
              <p>{product.quantity}</p>
            </div>
            <div>
              <p>{product.details}</p>
            </div>
            <div>
              <p>{product.shipping}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
