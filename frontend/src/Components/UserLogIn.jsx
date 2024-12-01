import React from "react";
import Modal from "react-modal";
import logo from "../assets/logo.png";
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

const UserLogIn = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className=" flex justify-center items-center border border-black">
        <div className=" px-28 py-5">
          <button className="absolute top-0 right-0 p-4">
            <SlClose
              onClick={onRequestClose}
              className=" size-9 cursor-pointer"
            />
          </button>
          <div className=" flex justify-center items-center pt-2">
            <div className=" block justify-center items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-40 justify-center items-center"
              />
              <h1 className=" uppercase font-bold text-4xl py-7">log in</h1>
              <div className=" block">
                <div className=" my-4">
                  <p className=" capitalize text-gray-700 py-2">nama</p>
                  <input
                    placeholder="Masukkan Nama Anda"
                    type="text"
                    className=" outline-none text-gray-700 border border-black px-3 py-2"
                  />
                </div>
                <div className=" my-4">
                  <p className=" capitalize text-gray-700 py-2">password</p>
                  <input
                    placeholder="Masukkan Password"
                    type="password"
                    className=" outline-none text-gray-700 border border-black px-3 py-2 "
                  />
                </div>
              </div>
              <button className=" uppercase bg-black text-white px-7 py-2 font-bold my-5 rounded-3xl">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserLogIn;
