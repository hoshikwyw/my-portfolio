import React from "react";
import Path from "./redux/Path";
import "./App.css";
import "./app.js";

const App = () => {
  return (
    <div className=" relative">
      <div className=" bg-[#0D0D0D] bg-cover bg-no-repeat bg-blend-screen h-fit bg-scroll">
        <div className="wrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className=" w-full flex justify-center items-center h-screen">
          <Path />
        </div>
      </div>
    </div>
  );
};

// bg-[url(https://i.pinimg.com/736x/27/3b/85/273b858d82394e76437759e11e30af4e.jpg)]

export default App;
