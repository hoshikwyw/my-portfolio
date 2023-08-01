import React from "react";
import Path from "./redux/Path";
import "./App.css";
import "./app.js";

const App = () => {
  return (
    <div className=" h-screen relative">
      <div id="ambient" className=" overflow-hidden absolute w-full h-full">
        {/* Raindrops will be appended here  */}
      </div>
      <div className=" bg-[url(https://i.pinimg.com/736x/27/3b/85/273b858d82394e76437759e11e30af4e.jpg)] bg-cover bg-no-repeat h-screen">
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
        <div className=" w-full h-full flex justify-center items-center  ">
          <Path />
        </div>
      </div>
    </div>
  );
};

export default App;
