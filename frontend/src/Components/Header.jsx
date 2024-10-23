import React from 'react'
import closeBtn from "../assets/closebtn.svg";

const Header = () => {
  return (
      <div className=" w-full bg-neonGreen flex flex-row items-center p-2.5 gap-4 h-11 justify-between">
        <div className=" text-xl">
          <marquee>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enimad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utaliquip ex ea commodo consequat. Duis aute irure dolor
            inreprehenderit in voluptate velit esse cillum dolore eu fugiat
            nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt
            inculpa qui officia deserunt mollit anim id est laborum.
          </marquee>
        </div>
        <div className=" w-16">
          <img src={closeBtn} alt="" />
        </div>
      </div>
  );
}

export default Header
