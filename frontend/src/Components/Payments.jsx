import React from "react";

const Payments = () => {
  const payments = ["gopay", "dana", "kartu kredit / debit", "debit instan"];

  return (
    <div className=" w-full">
      <div className=" block m-10">
        <p className=" capitalize text-5xl">
          <b>hi!</b> user, <br />
          <b>manage your payments.</b>
        </p>
        <div className=" my-11">
          {payments.map((payment, index) => (
            <div key={index}>
              <p className="  font-medium uppercase">{payment}</p>
              <div className=" border-b-2 border-gray-300 my-5"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;
