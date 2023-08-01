import React from "react";
import { AiOutlineHtml5, AiOutlineTeam } from "react-icons/ai";
import { BiLogoJavascript, BiLogoReact, BiLogoGithub } from "react-icons/bi";
import { TbBrandCss3, TbBrandVscode } from "react-icons/tb";
import { HiArrowCircleRight,HiArrowCircleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../components/about.css";

const About = () => {
  return (
    <div className=" text-white flex flex-col mt-3 w-[90%] mx-auto mb-14 relative">
      <h2 className=" text-center text-white uppercase font-bold text-xl font-serif tracking-widest title">
        about me
      </h2>
      <p className=" text-center text-[#ffffffbe] py-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
        alias. Reiciendis eaque dolorum dolor natus. Nostrum eaque nesciunt
        minima, sunt, tenetur sed nihil at explicabo repudiandae est soluta?
        Ipsa, doloribus?
      </p>
      <div className=" flex mt-5 gap-3 ">
        {/* personal detail  */}
        <div className=" w-[50%] cursor-pointer">
          <h2 className=" uppercase font-bold tracking-wider ms-8 mb-5 title">
            personal details
          </h2>
          <div className=" flex justify-center gap-8 ">
            <div className=" flex flex-col gap-2 text-lg font-semibold capitalize text-[#ffffffbe]">
              <h2>Full Name</h2>
              <h2>age</h2>
              <h2>birthday</h2>
              <h2>email</h2>
              <h2>address</h2>
            </div>
            <div className=" flex flex-col gap-2 text-lg font-semibold text-[#ffffffbe] italic tracking-wider ">
              <h2 className=" inner-text capitalize">khaing wut yi win</h2>
              <h2 className=" inner-text">21</h2>
              <h2 className=" inner-text">17.12.2001</h2>
              <h2 className=" inner-text">khaingwutyiwin1712@gmail.com</h2>
              <h2 className=" inner-text capitalize">
                shwe pyi thar township , yangon , myanmar
              </h2>
            </div>
          </div>
        </div>
        {/* skill */}
        <div className=" w-[50%] cursor-pointer ">
          <h2 className=" uppercase font-bold tracking-wider text-center mb-5 title">
            skills
          </h2>
          <div className=" flex flex-wrap gap-10 w-full mx-10">
            <div className=" inner-item flex flex-col gap-2 justify-center items-center px-3 py-2 bg-black w-20 bg-opacity-10 rounded group">
              <h2 className=" text-2xl icon">
                <AiOutlineHtml5 />
              </h2>
              <h2 className=" uppercase text-[#ffffffbe] tracking-wider group-hover:text-white">
                html5
              </h2>
            </div>
            <div className=" inner-item flex flex-col gap-2 justify-center items-center px-3 py-2 bg-black w-20 bg-opacity-10 rounded group">
              <h2 className=" text-2xl icon">
                <TbBrandCss3 />
              </h2>
              <h2 className=" uppercase text-[#ffffffbe] tracking-wider group-hover:text-white">
                css
              </h2>
            </div>
            <div className=" inner-item flex flex-col gap-2 justify-center items-center px-3 py-2 bg-black w-20 bg-opacity-10 rounded group">
              <h2 className=" text-2xl icon">
                <BiLogoJavascript />
              </h2>
              <h2 className=" text-xs text-center uppercase text-[#ffffffbe] tracking-wider group-hover:text-white">
                java script
              </h2>
            </div>
            <div className=" inner-item flex flex-col gap-2 justify-center items-center px-3 py-2 bg-black w-20 bg-opacity-10 rounded group">
              <h2 className=" text-2xl icon">
                <BiLogoReact />
              </h2>
              <h2 className=" uppercase text-[#ffffffbe] tracking-wider group-hover:text-white">
                react
              </h2>
            </div>
            <div className=" inner-item flex flex-col gap-2 justify-center items-center px-3 py-2 bg-black w-20 bg-opacity-10 rounded group">
              <h2 className=" text-2xl icon">
                <BiLogoGithub />
              </h2>
              <h2 className=" uppercase text-[#ffffffbe] tracking-wider group-hover:text-white">
                github
              </h2>
            </div>
            <div className=" inner-item flex flex-col gap-2 justify-center items-center px-3 py-2 bg-black w-20 bg-opacity-10 rounded group">
              <h2 className=" text-2xl icon">
                <TbBrandVscode />
              </h2>
              <h2 className=" text-xs text-center uppercase text-[#ffffffbe] tracking-wider group-hover:text-white">
                vs code
              </h2>
            </div>
            <div className=" inner-item flex flex-col gap-2 justify-center items-center px-3 py-2 bg-black w-20 bg-opacity-10 rounded group">
              <h2 className=" text-2xl icon">
                <AiOutlineTeam />
              </h2>
              <h2 className=" text-xs text-center uppercase text-[#ffffffbe] tracking-wider group-hover:text-white">
                team work
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <btn className=" group fixed left-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-lg font-bold group-hover:text-orange-500">
            <HiArrowCircleLeft />
          </h2>
        </btn>
      </Link>
      <Link to={"/skill"}>
        <btn className=" group fixed right-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-xl font-bold group-hover:text-orange-500">
            <HiArrowCircleRight />
          </h2>
        </btn>
      </Link>
    </div>
  );
};

export default About;
