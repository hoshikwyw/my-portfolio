import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import food from "../assets/food.png";
import contact from "../assets/contact.png";
import dashboard from "../assets/dashboard.png";
import edu from "../assets/edu.png";
import meter from "../assets/meter.png";
import tic from "../assets/tic.png";
import portfolio from "../assets/portfolio.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../components/styles.css";
import { Link } from "react-router-dom";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";


import { EffectCoverflow, Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div className=" text-white flex flex-col mt-3 w-[90%] mx-auto mb-14 relative">
      <h2 className=" w-full text-2xl uppercase text-center font-serif title tracking-widest">
        my projects
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className=" h-full flex flex-col gap-2 justify-center items-center">
            <img src={food} alt="" />
            <h2 className=" font-semibold uppercase text-lg">Food Blog</h2>
            <div className=" w-[70%] flex justify-evenly items-center mt-3">
              <a href="https://my-food-blog-1712.netlify.app/">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Demo
                </button>
              </a>
              <a href="https://github.com/hoshikwyw/Food-Blog">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Github
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" h-full flex flex-col gap-2 justify-center items-center">
            <img src={portfolio} alt="" />
            <h2 className=" font-semibold uppercase text-lg">Team portfolio</h2>
            <div className=" w-[70%] flex justify-evenly items-center mt-3">
              <a href="https://team-portfolio-c.netlify.app/">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Demo
                </button>
              </a>
              <a href="https://github.com/hoshikwyw/team-C-portfolio">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Github
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full flex flex-col gap-2 justify-center items-center">
            <img src={edu} alt="" />
            <h2 className=" font-semibold uppercase text-lg">Edu vibe</h2>
            <div className=" w-[70%] flex justify-evenly items-center mt-3">
              <a href="https://edu-pro-site-c.netlify.app/">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Demo
                </button>
              </a>
              <a href="https://github.com/hoshikwyw/Edu-Pro">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Github
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full flex flex-col gap-2 justify-center items-center">
            <img src={dashboard} alt="" />
            <h2 className=" font-semibold uppercase text-lg">
              Edu vibe's dashboard
            </h2>
            <div className=" w-[70%] flex justify-evenly items-center mt-3">
              <a href="https://edu-pro-dashboard-c.netlify.app/">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Demo
                </button>
              </a>
              <a href="https://github.com/hoshikwyw/Edu_Pro_Dashboard">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Github
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full flex flex-col gap-2 justify-center items-center">
            <img src={tic} alt="" />
            <h2 className=" font-semibold uppercase text-lg">
              tic-tac-toe game
            </h2>
            <div className=" w-[70%] flex justify-evenly items-center mt-3">
              <a href="https://tic-tac-toe-053.netlify.app/">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Demo
                </button>
              </a>
              <a href="https://github.com/hoshikwyw/tic-tac-toe-game">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Github
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full flex flex-col gap-2 justify-center items-center">
            <img src={meter} alt="" />
            <h2 className=" font-semibold uppercase text-lg">
              Meter-bill calculator
            </h2>
            <div className=" w-[70%] flex justify-evenly items-center mt-3">
              <a href="https://meterbill-calculating-6def80.netlify.app/">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Demo
                </button>
              </a>
              <a href="https://github.com/hoshikwyw/meter-bill-calculate">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Github
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full flex flex-col gap-2 justify-center items-center">
            <img src={contact} alt="" />
            <h2 className=" font-semibold uppercase text-lg">Contact app</h2>
            <div className=" w-[70%] flex justify-evenly items-center mt-3">
              <a href="https://contact-app-c.netlify.app/">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Demo
                </button>
              </a>
              <a href="https://github.com/hoshikwyw/Contact-web">
                <button className=" border border-[#fff] px-3 py-1 rounded text-sm card-button hover:text-orange-500 hover:bg-slate-500 hover:bg-opacity-30">
                  Github
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Link to={"/skill"}>
        <btn className=" group fixed left-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-lg font-bold group-hover:text-orange-500">
            <HiArrowCircleLeft />
          </h2>
        </btn>
      </Link>
      <Link to={"/contact"}>
        <btn className=" group fixed right-0 top-1/2 flex justify-center items-center hover:bg-slate-300 w-10 h-8 rounded">
          <h2 className=" text-xl font-bold group-hover:text-orange-500">
            <HiArrowCircleRight />
          </h2>
        </btn>
      </Link>
    </div>
  );
};

export default Projects;
