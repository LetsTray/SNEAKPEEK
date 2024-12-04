import React from "react";
import placeimg from "../../assets/images/placeimg.png";
import zaky from "../../assets/images/zaky.jpg";

const Team = () => {
  return (
    <div className=" w-full my-14 block">
      <div className=" block mx-auto text-center">
        <p className=" text-5xl">
          <b>OUR TEAM</b>
        </p>
        <p className=" text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className=" flex justify-evenly items-center my-16">
        <div className=" text-center text-base block">
          <img src={placeimg} alt="" className=" mx-auto" />
          <p className=" mt-5">
            <b>Full name</b>
          </p>
          <p>Job title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed doeiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className=" text-center text-base block">
          <img
            src={zaky}
            alt=""
            className=" mx-auto object-cover w-20 h-20 rounded-full"
          />
          <p className=" mt-5">
            <b>Muhamad Zaky Ramadhan</b>
          </p>
          <p>backend developer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed doeiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className=" text-center text-base block">
          <img src={placeimg} alt="" className=" mx-auto" />
          <p className=" mt-5">
            <b>Full name</b>
          </p>
          <p>Job title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed doeiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className=" flex justify-evenly items-center my-16">
        <div className=" text-center text-base block">
          <img src={placeimg} alt="" className=" mx-auto" />
          <p className=" mt-5">
            <b>Full name</b>
          </p>
          <p>Job title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed doeiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className=" text-center text-base block">
          <img src={placeimg} alt="" className=" mx-auto" />
          <p className=" mt-5">
            <b>Full name</b>
          </p>
          <p>Job title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed doeiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
