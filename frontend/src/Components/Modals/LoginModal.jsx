import React, { useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/images/Logo.png";
import { SlClose } from "react-icons/sl";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    background: "white",
    border: "none",
    width: "500px",
    height: "600px",

    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const LoginModal = ({
  isOpen,
  onRequestClose,
  handleOpenUserLogIn,
  handleOpenUserSignIn,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className=" flex items-center justify-center border border-black">
        <button className="absolute top-0 right-0 p-4">
          <SlClose
            onClick={onRequestClose}
            className=" size-9 cursor-pointer"
          />
        </button>
        <div className=" flex justify-center items-center text-center py-12 px-20">
          <div className=" justify-center items-center block">
            <div className=" flex justify-center items-center my-8">
              <img src={logo} className=" w-40 justify-center items-center " />
            </div>
            <h2 className=" uppercase font-extrabold text-2xl mt-11">
              sneakpeek.id
            </h2>
            <p className=" text-base font-medium my-3">
              Dapatkan potongan Rp 150.000* untuk <br /> pembelian pertamamu!
            </p>
            <div className=" mt-14">
              <div className=" flex justify-center items-center my-3">
                <div className=" bg-neonGreen border border-black justify-center items-center text-center rounded-3xl w-44 font-semibold">
                  <button
                    className=" uppercase px-10 py-2"
                    onClick={() => {
                      onRequestClose(); // Close LoginModal
                      handleOpenUserLogIn(); // Open UserLogIn
                    }}
                  >
                    log in
                  </button>
                </div>
              </div>
              <div className=" flex justify-center items-center my-3">
                <div className=" bg-neonGreen border border-black justify-center items-center text-center rounded-3xl w-44 font-semibold">
                  <button
                    className=" uppercase px-10 py-2"
                    onClick={() => {
                      onRequestClose(); // Close LoginModal
                      handleOpenUserSignIn(); // Open UserSignIn
                    }}
                  >
                    sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
