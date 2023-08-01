import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex px-10 py-5 w-full justify-between">
      <div className=" uppercase text-[#ffffffa6] font-semibold hover:text-white">
        <Link to={'/'} >
        <button className=" text-lg inner-text" style={{ fontFamily: "Dancing Script" }}>
          Khaing Wut Yi Win
        </button>
        </Link>
      </div>
      <div className=" flex gap-5">
        <NavLink to={"/"}>
          <button className=" uppercase text-[#ffffffa6] font-semibold hover:text-orange-600 hover:animate-bounce">
            Home
          </button>
        </NavLink>
        <NavLink to={"/about"}>
          <button className=" uppercase text-[#ffffffbe] font-semibold hover:text-orange-600 hover:animate-bounce">
            About
          </button>
        </NavLink>
        <NavLink to={"/skill"}>
          <button className=" uppercase text-[#ffffffbe] font-semibold hover:text-orange-600 hover:animate-bounce">
            services
          </button>
        </NavLink>
        <NavLink to={"/projects"}>
          <button className=" uppercase text-[#ffffffbe] font-semibold hover:text-orange-600 hover:animate-bounce">
            Projects
          </button>
        </NavLink>
        <NavLink to={"/contact"}>
          <button className=" uppercase text-[#ffffffbe] font-semibold hover:text-orange-600 hover:animate-bounce">
            contact me
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
