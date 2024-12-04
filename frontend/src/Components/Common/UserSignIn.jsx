import React, { useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/images/logo.png";
import { SlClose } from "react-icons/sl";
import axios from "axios";

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
      console.log("Response from backend:", response.data);
      alert("Sign Up successful!");
      onRequestClose();
    } catch (error) {
      console.error("Error submitting request:", error);
      alert(
        `Error: ${error.response ? error.response.data.message : error.message}`
      );
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex justify-center items-center border border-black">
        <div className="px-28">
          <button
            className="absolute top-0 right-0 p-4"
            onClick={onRequestClose}
          >
            <SlClose className="cursor-pointer" />
          </button>

          <div className="flex justify-center items-center pt-2">
            <div className="text-center">
              <img src={logo} alt="Logo Sign In" className="py-5" />
              <h1 className="uppercase font-bold text-4xl py-4">Sign Up</h1>

              <form onSubmit={handleSubmit}>
                <InputField
                  label="Nama"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan Nama Anda"
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan Email"
                />
                <InputField
                  label="Nomor Telepon"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Masukkan Nomor Telepon"
                />
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukkan Password"
                />
                <button
                  type="submit"
                  className="uppercase bg-black text-white px-7 py-2 font-bold my-5 rounded-3xl w-full"
                >
                  Sign Up
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
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="capitalize text-gray-700 py-1">
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

export default UserSignIn;
