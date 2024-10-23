import React from 'react'
import whitelogo from '../assets/whitelogo.png'

const Footer = () => {
  return (
    <div className=" bg-black border border-black text-white block px-3 py-8 h-auto">
      <div className=" flex text-base items-center justify-around">
        <img src={whitelogo} alt="" className=" w-24" />
        <div className=" flex-col ">
          <p>
            <b>Column One</b>
          </p>
          <p className="my-1">Link One</p>
          <p className="my-1">Link Two</p>
          <p className="my-1">Link Three</p>
          <p className="my-1">Link Four</p>
          <p className="my-1">Link Five</p>
        </div>

        <div className=" flex-col">
          <p>
            <b>Column Two</b>
          </p>
          <p className="my-1">Link Six</p>
          <p className="my-1">Link Seven</p>
          <p className="my-1">Link Eight</p>
          <p className="my-1">Link Nine</p>
          <p className="my-1">Link Ten</p>
        </div>

        <div className=" flex-col">
          <p>
            <b>Column Three</b>
          </p>
          <p className="my-1">Link Eleven</p>
          <p className="my-1">Link Twelve</p>
          <p className="my-1">Link Thirteen</p>
          <p className="my-1">Link Fourteen</p>
          <p className="my-1">Link Fifteen</p>
        </div>
      </div>

      <div className=" pl-28">
        <p>&copy; 2024 MPPL. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer
