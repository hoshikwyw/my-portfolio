import React from "react";
import mypfp from "../assets/pfpImg.png";
import pfbg from "../assets/pfbg.png";
import {  HiArrowCircleRight } from "react-icons/hi";
import "../components/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" text-white flex justify-center items-center w-[90%] gap-[10%] mx-auto mb-14 relative">
      <div className=" relative flex justify-center w-[40%]  ">
        <img
          className=" absolute z-10 w-full h-full rotate-45 opacity-80 bg-pfp "
          src={pfbg}
          alt=""
        />
        <img
          className=" h-[350px] z-40 drop-shadow-xl brightness-125 "
          src={mypfp}
          alt=""
        />
      </div>
      {/* #ffffffd7  #ffffffb6 */}
      <div className=" w-[60%] h-full flex flex-col items-center gap-16 cursor-pointer ">
        <div className=" flex flex-col justify-center items-center gap-5 ">
          <h2 className=" w-full font-bold uppercase tracking-widest text-center text-4xl mb-5 text-[#ffffffd7] hover:text-white title">
            welcome to my portfolio website
          </h2>
          <div className=" font-bold text-2xl tracking-widest font-serif vibrate-1">
            <p> I'm a Frontend developer</p>

            {/* <p className=" ">React developer</p> */}
          </div>
        </div>
        <div className=" w-full flex gap-5 justify-center">
          <button className=" heartbeat item title font-bold flex items-center gap-5 px-3 py-1 bg-slate-500 rounded hover:text-orange-500">
            My Resume
          </button>
          <button className=" heartbeat item title font-bold flex items-center gap-5 px-3 py-1 bg-slate-500 rounded hover:text-orange-500">
            Contact Me
          </button>
        </div>
      </div>
      <Link to={"/about"}>
        <btn className=" group fixed right-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-xl font-bold group-hover:text-orange-500">
            <HiArrowCircleRight />
          </h2>
        </btn>
      </Link>
    </div>
  );
};

export default Home;
