import React, { useState } from "react";
import Modal from "react-modal";
import logo from "../assets/logo.png";
import { SlClose } from "react-icons/sl";
import axios from "axios"; // Import axios

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
  // Menangani state untuk input form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData
    );
    console.log("Response dari backend:", response.data);
    alert("Sign Up berhasil!");
    onRequestClose();
  } catch (error) {
    console.error("Error mengirim request:", error);
    alert(
      `Terjadi kesalahan: ${error.response ? error.response.data.message : error.message}`
    );
  }
};

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex justify-center items-center border border-black">
        <div className="px-28">
          <button className="absolute top-0 right-0 p-4">
            <SlClose
              onClick={onRequestClose}
              className="size-9 cursor-pointer"
            />
          </button>
          <div className="flex justify-center items-center pt-2">
            <div className="block justify-center items-center">
              <img
                src={logo}
                alt="Logo Sign In"
                className="justify-center items-center py-5"
              />
              <div className="flex justify-center items-center">
                <div className="block">
                  <h1 className="uppercase font-bold text-4xl">Sign In</h1>
                  <form onSubmit={handleSubmit} className="my-4">
                    <p className="capitalize text-gray-700 py-1">Nama</p>
                    <input
                      placeholder="Masukkan Nama Anda"
                      className="outline-none px-3 py-2 border border-black"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <p className="capitalize text-gray-700 py-1">Email</p>
                    <input
                      placeholder="Masukkan Email"
                      className="outline-none px-3 py-2 border border-black"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p className="capitalize text-gray-700 py-1">
                      Nomor Telepon
                    </p>
                    <input
                      placeholder="Masukkan Nomor Telepon"
                      className="outline-none px-3 py-2 border border-black"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <p className="capitalize text-gray-700 py-1">Password</p>
                    <input
                      placeholder="Masukkan Password"
                      className="outline-none px-3 py-2 border border-black"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      className="uppercase bg-black text-white px-7 py-2 font-bold my-5 rounded-3xl"
                    >
                      Sign Up
                    </button>
                  </form>
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
