import React from "react";
import { BsInstagram, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" text-white flex justify-end gap-5 fixed bottom-0 right-20 py-5">
      <a href="#" className=" group relative hover:text-blue-800 hover:scale-125">
        <BsFacebook className=" " />
        <span className=" text-white absolute hidden -top-7 -right-7 px-3 py-1 text-[10px] group-hover:block">
          Facebook
        </span>
      </a>
      <a href="#" className=" group relative hover:text-red-800 hover:scale-125">
        <BsInstagram />
        <span className=" text-white absolute hidden -top-7 -right-7 px-3 py-1 text-[10px] group-hover:block">
          Instagram
        </span>
      </a>
      <a href="#" className=" group relative hover:scale-125">
        <BsGithub />
        <span className=" text-white absolute hidden -top-7 -right-7 px-3 py-1 text-[10px] group-hover:block">
          Github
        </span>
      </a>
      <a href="#" className=" group relative hover:text-blue-800 hover:scale-125">
        <BsTwitter />
        <span className=" text-white absolute hidden -top-7 -right-7 px-3 py-1 text-[10px] group-hover:block">
          Twitter
        </span>
      </a>
    </div>
  );
};

export default Footer;
