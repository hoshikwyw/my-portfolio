import React from "react";
import { Link } from "react-router-dom";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import "../components/skill.css";

const Skill = () => {
  return (
    <div className=" text-white flex flex-col mt-3 w-[90%] mx-auto mb-14 relative h-[95%] ">
      <h2 className=" w-full text-2xl uppercase text-center font-serif title tracking-widest">
        what i can do
      </h2>
      <p className=" text-center text-[#ffffffbe] py-4">
      I am confident that I can provide you with the high-quality front-end development services you need to achieve your goals. Please contact me today to discuss your project in more detail.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 cursor-pointer">
        <div className=" main-container ">
          <div className=" the-card ">
            <div className=" front rounded">
              <h2 className=" uppercase text-xl title font-semibold tracking-wider text-center my-2">
                responsive web design
              </h2>
              <p className=" break-all tracking-wider text-[#ffffffa4] p-6">
              I can ensure that your website looks great on all devices, from desktops to smartphones. I will use responsive design principles to create a website that adapts to different screen sizes and resolutions.
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
              Custom Website Design
              </h2>
              <p className=" break-all tracking-wider text-[#ffffffa4] p-7">
              I can create a custom website that is tailored to your specific needs and goals. I will work with you to develop a design that is both visually appealing and user-friendly.
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
              Front-End Development
              </h2>
              <p className=" break-all tracking-wider text-[#ffffffa4] p-7">
              I can develop the front-end of your website using the latest HTML, CSS, and JavaScript technologies. I will write clean, maintainable, and well-documented code that is easy to update and extend.
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
