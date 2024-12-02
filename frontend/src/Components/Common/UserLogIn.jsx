import React, { useState } from "react";
import Modal from "react-modal";
import logo from "../assets/logo.png";
import { SlClose } from "react-icons/sl";
import axios from "axios"; // Import axios for making API requests

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
  const [formData, setFormData] = useState({
    email: "",
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
      "http://localhost:5000/api/auth/login",
      formData
    );
    // Store user token and other user data in localStorage
    localStorage.setItem("userToken", response.data.token);
    localStorage.setItem("userData", JSON.stringify(response.data.user)); // Assuming user data is returned
    alert("Login successful!");
    onRequestClose();
  } catch (error) {
    alert(error.response ? error.response.data.message : error.message);
  }
};

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex justify-center items-center border border-black">
        <div className="px-28 py-5">
          <button
            className="absolute top-0 right-0 p-4"
            onClick={onRequestClose}
          >
            <SlClose className="cursor-pointer" />
          </button>

          <div className="flex justify-center items-center pt-2">
            <div className="block justify-center items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-40 justify-center items-center"
              />
              <h1 className="uppercase font-bold text-4xl py-7">Log In</h1>
              <form onSubmit={handleSubmit} className="w-full">
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan Email"
                />
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan Password"
                />
                <button
                  type="submit"
                  className="uppercase bg-black text-white px-7 py-2 font-bold my-5 rounded-3xl w-full"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// Reusable Input Component
const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="capitalize text-gray-700 py-1 block">
      {label}
    </label>
    <input
      id={name}
      className="outline-none px-3 py-2 border border-black w-full"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default UserLogIn;
