import React from "react";
import Card1 from '../assets/Card1.png';
import Card2 from '../assets/Card2.png';
import Card3 from '../assets/Card3.png';


const Layout = () => {
  return (
    <div className=" w-full bg-white">
      <div className=" p-8">
        <div className=" flex justify-center items-center text-center text-6xl">
          <p>
            <b>LOREM IPSUM LOREM</b>
          </p>
        </div>
        <div className=" flex justify-center items-center text-center text-xl">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="flex justify-evenly items-center border border-black pt-14 pb-14">
        <img src={Card1} className=" border border-black" alt="" />
        <img src={Card2} className=" border border-black" alt="" />
        <img src={Card3} className=" border border-black" alt="" />
      </div>
    </div>
  );
};

export default Layout;
