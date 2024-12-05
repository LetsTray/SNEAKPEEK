import React from "react";
import { CgProfile } from "react-icons/cg";

const PersonalData = ({ userData }) => {
  // Use the user data passed as props
  const biodata = {
    name: userData ? userData.name : "Name",
    dob: userData ? userData.dob : "Date Of Birth",
    gender: userData ? userData.gender : "Gender",
  };

  const contact = {
    email: userData ? userData.email : "Email",
    phone: userData ? userData.phone : "Phone Number",
  };

  return (
    <div className="w-full">
      <div className="flex justify-evenly items-center rounded my-4">
        <div>
          <CgProfile className="size-36" />
        </div>

        <div className="h-96 border-l border-gray-600 border-2 mx-4"></div>

        <div className="block my-10">
          <div>
            <p className="text-3xl font-bold capitalize my-6">
              Change your personal biodata
            </p>
            <div className="justify-between gap-x-10 flex text-gray-500">
              <div className="grid grid-cols-1 text-lg">
                <p className="py-2">{biodata.name}</p>
                <p className="py-2">{biodata.dob}</p>
                <p className="py-2">{biodata.gender}</p>
              </div>
              <div className="grid grid-cols-1 text-lg">
                <input
                  placeholder="User Name"
                  type="text"
                  className="py-2 outline-none"
                  defaultValue={biodata.name}
                />
                <input
                  placeholder="Date Of Birth"
                  type="text"
                  className="py-2 outline-none"
                  defaultValue={biodata.dob}
                />
                <input
                  placeholder="Gender"
                  type="text"
                  className="py-2 outline-none"
                  defaultValue={biodata.gender}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-3xl font-bold capitalize my-6">Change contact</p>
            <div className="justify-between gap-x-10 flex text-gray-500">
              <div className="grid grid-cols-1 text-lg">
                <p className="py-2">{contact.email}</p>
                <p className="py-2">{contact.phone}</p>
              </div>
              <div className="grid grid-cols-1 text-lg">
                <input
                  placeholder="Username@example.com"
                  type="email"
                  className="py-2 outline-none"
                  defaultValue={contact.email}
                />
                <input
                  placeholder="Phone Number"
                  type="number"
                  className="py-2 outline-none"
                  defaultValue={contact.phone}
                />
              </div>
            </div>
          </div>

          <button className=" capitalize font-semibold text-xl py-2 px-3 bg-neonGreen text-black border border-black rounded-xl flex justify-end">log out</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
