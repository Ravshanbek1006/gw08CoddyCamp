import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./module/NavBar";
import Footer from "./module/Footer";

export default function App() {
  console.log("ikkinchi o'quchini commiti");
  
  return (
    <div className="">
      <NavBar />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
