import React from "react";
import PersonalData from "../Components/PersonalData";

const Profile = () => {
  const profileContents = {
    personalData: "personal data",
    payment: "payment",
    bank: "bank account",
    address: "address list",
  };

  return (
    <div className=" w-full">
      <div className=" border border-black justify-center items-center m-10">
        <div>
          <div className=" flex justify-evenly items-center py-2 text-base uppercase bg-gray-100">
            <p className=" ">{profileContents.personalData}</p>
            <p className=" ">{profileContents.payment}</p>
            <p>{profileContents.bank}</p>
            <p>{profileContents.address}</p>
          </div>
        </div>

        <div>
          <PersonalData/>
        </div>

      </div>
    </div>
  );
};

export default Profile;
