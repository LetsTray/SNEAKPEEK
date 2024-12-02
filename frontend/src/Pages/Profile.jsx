import React, { useState, useEffect } from "react";
import PersonalData from "../Components/Common/PersonalData";
import ShoppingBag from "../Components/Common/ShoppingBag";
import Payments from "../Components/Common/Payments";
import AddressList from "../Components/Common/AddressList";
import BankAcc from "../Components/Common/BankAcc";

const Profile = () => {
  const profileContents = {
    personalData: "personal data",
    payment: "payment",
    bank: "bank account",
    address: "address list",
  };

  const [isPersonalDataOpen, setIsPersonalDataOpen] = useState(true);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isBankOpen, setIsBankOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  // Store user data from localStorage
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    // Only attempt to parse if the item exists and is not null
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData); // If valid, set the user data
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
      }
    } else {
      console.log("No user data found in localStorage.");
    }
  }, []);

  const handlePersonalDataClick = () => {
    setIsPersonalDataOpen(true);
    setIsPaymentOpen(false);
    setIsBankOpen(false);
    setIsAddressOpen(false);
  };

  const handlePaymentClick = () => {
    setIsPersonalDataOpen(false);
    setIsPaymentOpen(true);
    setIsBankOpen(false);
    setIsAddressOpen(false);
  };

  const handleBankClick = () => {
    setIsPersonalDataOpen(false);
    setIsPaymentOpen(false);
    setIsBankOpen(true);
    setIsAddressOpen(false);
  };

  const handleAddressClick = () => {
    setIsPersonalDataOpen(false);
    setIsPaymentOpen(false);
    setIsBankOpen(false);
    setIsAddressOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-start gap-x-5">
      <div className="w-1/3 my-10 ml-5">
        <ShoppingBag />
      </div>

      <div className="w-2/3 border-2 border-black justify-center items-center my-10 mr-5">
        <div>
          <div className="flex justify-center items-center text-base uppercase border-b-2 border-black h-9">
            <div className="w-1/4">
              <p
                onClick={handlePersonalDataClick}
                className={`cursor-pointer border-b-2 border-r-2 border-black h-9 items-center flex justify-center bg-gray-200 ${
                  isPersonalDataOpen ? "bg-neonGreen" : ""
                }`}
              >
                {profileContents.personalData}
              </p>
            </div>
            <div className="w-1/4">
              <p
                onClick={handlePaymentClick}
                className={`cursor-pointer border-b-2 border-r-2 border-black h-9 items-center flex justify-center bg-gray-200 ${
                  isPaymentOpen ? "bg-neonGreen" : ""
                }`}
              >
                {profileContents.payment}
              </p>
            </div>
            <div className="w-1/4">
              <p
                onClick={handleAddressClick}
                className={`cursor-pointer border-b-2 border-r-2 border-black h-9 items-center flex justify-center bg-gray-200 ${
                  isAddressOpen ? "bg-neonGreen" : ""
                }`}
              >
                {profileContents.address}
              </p>
            </div>
            <div className="w-1/4">
              <p
                onClick={handleBankClick}
                className={`cursor-pointer border-b-2 border-black h-9 items-center flex justify-center bg-gray-200 ${
                  isBankOpen ? "bg-neonGreen" : ""
                }`}
              >
                {profileContents.bank}
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* Check if user data is available */}
          {userData ? (
            <>
              {isPersonalDataOpen && <PersonalData userData={userData} />}
              {isPaymentOpen && <Payments />}
              {isBankOpen && <BankAcc />}
              {isAddressOpen && <AddressList />}
            </>
          ) : (
            <p>Please log in to view your profile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
