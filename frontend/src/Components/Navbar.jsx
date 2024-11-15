import React from "react";
import logo from "../assets/logo.png";
import { NavLink, replace, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  {/*const toggleOpen = () => setIsOpen(!isOpen);*/}
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className=" flex w-full bg-white p-0 justify-between items-center z-20 border border-black h-16">
      <NavLink to="/">
        <img src={logo} alt="" className=" w-20 ml-7" />
      </NavLink>
      <ul className=" flex list-none p-0 text-base">
        <NavLink to="/newArrivals">
          <li className="inline-block mx-5" >NEW ARRIVALS</li>
        </NavLink>
        <NavLink to="/mens">
          <li className=" inline-block mx-5">MENS</li>
        </NavLink>
        <NavLink to="/womens">
          <li className=" inline-block mx-5">WOMENS</li>
        </NavLink>
        <NavLink to="/kids">
          <li className=" inline-block mx-5">KIDS</li>
        </NavLink>

        <NavLink to="/brands">
          <div className=" relative " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li
              className=" mx-5 flex items-center justify-center gap-2"
            >
              BRANDS
              {!isOpen ? (
                <FiChevronDown className=" text-lg" />
              ) : (
                <FiChevronUp className=" text-lg" />
              )}
            </li>

            {isOpen && (
              <div className=" absolute">
                <ul className=" justify-center items-center bg-white p-0 my-2 text-base text-left border border-black w-40">
                  <NavLink to="/brands/adidas"><li className=" px-2 py-1 hover:bg-gray-200">ADIDAS</li></NavLink>
                  <NavLink to="/brands/converse"><li className=" px-2 py-1 hover:bg-gray-200">CONVERSE</li></NavLink>
                  <NavLink to="/brands/newbalance"><li className=" px-2 py-1 hover:bg-gray-200">NEW BALANCE</li></NavLink>
                  <NavLink to="/brands/nike"><li className=" px-2 py-1 hover:bg-gray-200">NIKE</li></NavLink>
                </ul>
              </div>
            )}
          </div>
        </NavLink>

        <NavLink to="/sale">
          <li className=" inline-block mx-5">SALE</li>
        </NavLink>
      </ul>
      <div className=" flex items-center border border-black h-12 w-[400px] justify-between p-2">
        <input
          className="search-input_text outline-none w-full"
          type="text"
          placeholder="Search..."
        />
        <CiSearch className=" w-11 size-8" />
      </div>
      <div className=" bg-black flex gap-5 items-center p-4">
        <RiShoppingBag4Line className=" text-white size-8" />
        <MdOutlineAccountCircle className=" text-white size-8" />
      </div>
    </div>
  );
}

export default Navbar;
