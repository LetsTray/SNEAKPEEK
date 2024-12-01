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


const UserSignIn = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className=" flex justify-center items-center border border-black">
        <div className=" px-28">
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
                className=" justify-center items-center py-5"
              />
              <div className=" flex justify-center items-center">
                <div className=" block">
                  <h1 className=" uppercase font-bold text-4xl">Sign In</h1>
                  <div className=" my-4">
                    <p className=" capitalize text-gray-700 py-1">nama</p>
                    <input
                      placeholder="Masukkan Nama Anda"
                      className=" outline-none px-3 py-2 border border-black"
                      type="text"
                    />
                    <p className=" capitalize text-gray-700 py-1">email</p>
                    <input
                      placeholder="Masukkan Email"
                      className=" outline-none px-3 py-2 border border-black"
                      type="email"
                    />
                    <p className=" capitalize text-gray-700 py-1">
                      nomor telepon
                    </p>
                    <input
                      placeholder="Masukkan Nomor Telepon"
                      className=" outline-none px-3 py-2 border border-black"
                      type="number"
                    />
                    <p className=" capitalize text-gray-700 py-1">Password</p>
                    <input
                      placeholder="Masukkan Password"
                      className=" outline-none px-3 py-2 border border-black"
                      type="password"
                    />
                  </div>
                  <button className=" uppercase bg-black text-white px-7 py-2 font-bold my-5 rounded-3xl">
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

export default UserSignIn;
