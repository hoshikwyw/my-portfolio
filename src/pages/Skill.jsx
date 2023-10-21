import React from "react";
import { Link } from "react-router-dom";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import "../components/skill.css";

const Skill = () => {
  return (
    <div className=" text-white flex flex-col mt-3 w-[90%] mx-auto mb-14 relative ">
      <h2 className=" w-full text-2xl uppercase text-center font-serif title tracking-widest">
        what i can do
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 cursor-pointer">
        <div className=" main-container ">
          <div className=" the-card ">
            <div className=" front rounded">
              <h2 className=" uppercase text-xl title font-semibold tracking-wider text-center my-2">
                responsive web design
              </h2>
              <p className=" break-all tracking-wider text-[#ffffffa4] p-6">
                Your website is the digital face of your business, and I'm here
                to make sure it leaves a lasting impression on every visitor, no
                matter the device they use. Contact me today to discuss your
                responsive web design needs and let me help you take your online
                presence to new heights.
              </p>
            </div>
            <div className=" back rounded group">
              <Link to={"/contact"}>
                <button className=" w-full h-full flex justify-center items-center font-bold font-sans text-2xl tracking-widest title group-hover:text-orange-500">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" main-container ">
          <div className=" the-card ">
            <div className=" front rounded">
              <h2 className=" uppercase text-xl title font-semibold tracking-wider text-center my-2">
                modern design layout
              </h2>
              <p className=" break-all tracking-wider text-[#ffffffa4] p-7">
                In a rapidly evolving digital landscape, modern design is a
                powerful tool to stand out from the crowd. Partner with me, and
                together, we will create a digital presence that captivates,
                engages, and leaves a lasting impact on your audience.
              </p>
            </div>
            <div className=" back rounded group">
              <Link to={"/contact"}>
                <button className=" w-full h-full flex justify-center items-center font-bold font-sans text-2xl tracking-widest title group-hover:text-orange-500">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" main-container ">
          <div className=" the-card ">
            <div className=" front rounded">
              <h2 className=" uppercase text-xl title font-semibold tracking-wider text-center my-2">
                communication
              </h2>
              <p className=" break-all tracking-wider text-[#ffffffa4] p-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                explicabo a soluta, numquam placeat odio suscipit consequatur
                alias commodi perspiciatis eligendi natus possimus itaque earum
                provident corrupti tenetur temporibus officia!
              </p>
            </div>
            <div className=" back rounded group">
              <Link to={"/contact"}>
                <button className=" w-full h-full flex justify-center items-center font-bold font-sans text-2xl tracking-widest title group-hover:text-orange-500">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/about"}>
        <btn className=" group fixed left-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-lg font-bold group-hover:text-orange-500">
            <HiArrowCircleLeft />
          </h2>
        </btn>
      </Link>
      <Link to={"/projects"}>
        <btn className=" group fixed right-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-xl font-bold group-hover:text-orange-500">
            <HiArrowCircleRight />
          </h2>
        </btn>
      </Link>
    </div>
  );
};

export default Skill;
