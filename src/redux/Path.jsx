import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skill from "../pages/Skill";

const Path = () => {
  return (
    <div className=" h-screen bg-white bg-opacity-10 w-[90%] mx-auto pb-8 backdrop-filter backdrop-blur-md rounded shadow relative ">
      <div className="">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/skill" element={<Skill />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Path;
