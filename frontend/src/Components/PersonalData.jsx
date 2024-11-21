import React from "react";
import { CgProfile } from "react-icons/cg";

const PersonalData = () => {
  return (
    <div className=" w-full">
      <div className=" flex justify-center items-center">
        <div>
          <CgProfile className=" "/>
        </div>
        
        <div>
          <p className=" text-xl font-bold capitalize">
            change your personal biodata
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
