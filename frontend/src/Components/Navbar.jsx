import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.svg";
import bagIcon from "../assets/bag.svg";
import accIcon from "../assets/acc.svg";
import { NavLink, replace, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className=" flex w-full bg-white p-0 justify-between items-center z-20 border border-black h-20">
      <NavLink to="/">
        <img src={logo} alt="" className=" w-20 ml-7" />
      </NavLink>
      <ul className=" flex list-none p-0 text-base">
        <NavLink to="/newArrivals">
          <li className="inline-block mx-5">NEW ARRIVALS</li>
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
        <NavLink>
          <li className=" inline-block mx-5">BRANDS</li>
        </NavLink>
        <NavLink>
          <li className=" inline-block mx-5">SALE</li>
        </NavLink>
      </ul>
      <div className=" flex items-center border border-black h-12 w-[400px] justify-between p-2">
        <input
          className="search-input_text outline-none"
          type="text"
          placeholder="Search..."
        />
        <img src={searchIcon} alt="" className=" w-7" />
      </div>
      <div className=" bg-black flex gap-5 items-center p-6">
        <img src={bagIcon} className=" w-8" alt="" />
        <img src={accIcon} className=" w-8" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
