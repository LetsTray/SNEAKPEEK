import React from "react";
import Modal from "react-modal";
import logo from "./assets/logo.png";


const LoginModal = ({ isOpen, onRequestClose }) => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        className=" w-96  bg-white"
        overlayClassName=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className=" flex justify-center items-center text-center border border-black p-10">
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
                  <button className=" uppercase px-10 py-2">log in</button>
                </div>
              </div>
              <div className=" flex justify-center items-center my-3">
                <div className=" bg-neonGreen border border-black justify-center items-center text-center rounded-3xl w-44 font-semibold">
                  <button className=" uppercase px-10 py-2">sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
