import React from "react";
import whitelogo from "../assets/whitelogo.png";

const Footer = () => {
  return (
    <div className=" bg-black border border-black text-white block py-8 h-auto">
      <div className=" flex text-base px-12 pb-12">
        <img src={whitelogo} alt="" className=" flex size-14 w-24" />
        <div className=" flex mx-32">
        <div className=" flex-col mx-28">

            <p>
            <b>Column One</b>
          </p>
          <p className="my-3">Link One</p>
          <p className="my-3">Link Two</p>
          <p className="my-3">Link Three</p>
          <p className="my-3">Link Four</p>
          <p className="my-3">Link Five</p>
        </div>

        <div className=" flex-col mx-28">
          <p>
            <b>Column Two</b>
          </p>
          <p className="my-3">Link Six</p>
          <p className="my-3">Link Seven</p>
          <p className="my-3">Link Eight</p>
          <p className="my-3">Link Nine</p>
          <p className="my-3">Link Ten</p>
        </div>

        <div className=" flex-col mx-28">
          <p>
            <b>Column Three</b>
          </p>
          <p className="my-3">Link Eleven</p>
          <p className="my-3">Link Twelve</p>
          <p className="my-3">Link Thirteen</p>
          <p className="my-3">Link Fourteen</p>
          <p className="my-3">Link Fifteen</p>
          </div>
          </div>
      </div>

      <p className=" flex justify-start px-12">
        &copy; 2024 MPPL. All rights reserved.
      </p>

      {/*<div>
        <p className=" flex justify-start">
          &copy; 2024 MPPL. All rights reserved.
        </p>
      </div>*/}
    </div>
  );
};

export default Footer;
