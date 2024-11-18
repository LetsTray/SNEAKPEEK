import React from "react";
import { useParams } from "react-router-dom";
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    shipping:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

  const placeHolders = Array.from({ length: 4 }, (_, index) => ({}));

  const [isOpen, setIsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleShippingClick = () => setIsShippingOpen(!isShippingOpen);

  const handleDetailsClick = () => setIsDetailsOpen(!isDetailsOpen);

  return (
    <div className=" w-full">
      <div className=" mx-7 my-7">
        <div className=" ">
          <div className=" block">
            <div className=" my-6">
              <p className=" text-xl">
                Home / Brands /<b>Brand</b>
              </p>
            </div>

            <div className=" flex justify-between">
              <div className=" ">
                <div className="grid grid-cols-1 gap-4">
                  {placeHolders.map((placeholder, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 px-6 py-8 flex justify-center items-center"
                    >
                      <FaRegImage className="text-gray-300 size-5" />
                    </div>
                  ))}
                </div>
              </div>

              <div className=" ">
                <div className="flex-shrink-0 bg-gray-200 px-52 py-60">
                  <FaRegImage className="text-gray-300 size-20" />
                </div>
              </div>

              <div className=" max-w-2xl">
                <p className="text-5xl font-bold">{product.name}</p>
                <p className="text-gray-400 text-sm my-2">{product.rating}</p>
                <p className="text-2xl font-bold my-3">{product.price}</p>
                <p className=" text-justify my-4">{product.description}</p>

                <div className="">
                  <div>
                    <p className=" font-semibold text-base">Variant</p>
                  </div>
                  <div
                    className=" border-black border my-3"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <p className=" text-base p-2 flex items-center justify-between">
                      Select
                      {!isOpen ? <FiChevronDown /> : <FiChevronUp />}
                    </p>

                    {isOpen && (
                      <div className=" absolute">
                        <ul className=" justify-center items-center bg-white p-0 my-2 text-base text-left border border-black w-44">
                          <li className=" px-2 py-1 hover:bg-gray-200">
                            Option one
                          </li>
                          <li className=" px-2 py-1 hover:bg-gray-200">
                            Option two
                          </li>
                          <li className=" px-2 py-1 hover:bg-gray-200">
                            Option three
                          </li>
                          <li className=" px-2 py-1 hover:bg-gray-200">
                            Option four
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className=" my-4">
                  <p className=" font-semibold text-base">Quantity</p>
                  <input
                    placeholder=" "
                    type=""
                    className=" border border-black outline-none p-2 w-16 my-2"
                  ></input>
                </div>

                <div className=" block">
                  <div className=" flex text-center items-center justify-center border border-black bg-neonGreen my-3">
                    <button className=" py-2">Add to Cart</button>
                  </div>
                  <div className=" flex text-center items-center justify-center border border-black bg-white my-3">
                    <button className=" py-2">Buy Now</button>
                  </div>
                </div>

                <div className=" flex justify-center my-5">
                  <p className=" text-sm">Free shipping over $50</p>
                </div>

                <div
                  className=" border-black  my-3"
                  onClick={handleDetailsClick}
                >
                  <hr className=" border-t-1 border-black my-2" />
                  <p className=" text-base flex items-center justify-between font-semibold">
                    Details
                    {!isDetailsOpen ? <FiChevronDown /> : <FiChevronUp />}
                  </p>

                  {isDetailsOpen && (
                    <p className=" text-justify my-5">{product.detail}</p>
                  )}
                </div>

                <div
                  className=" my-3"
                  onClick={handleShippingClick}
                >
                  <hr className=" border-t-1 border-black my-2" />
                  <p className=" text-base flex items-center justify-between font-semibold">
                    Shipping
                    {!isShippingOpen ? <FiChevronDown /> : <FiChevronUp />}
                  </p>

                  {isShippingOpen && (
                    <p className=" text-justify my-5">{product.shipping}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
