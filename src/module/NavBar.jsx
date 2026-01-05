import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import Btn from "../components/Btn";
// import logo from ""
export default function NavBar() {
  return (
    <div className="bg-transparent px-20 py-5 flex justify-between w-full absolute top-0 left-0">
      <div className=" flex gap-12 items-center">
        <div>
          <img src="src/assets/images/logo.png" alt="logo" />
        </div>
        <ul className="flex gap-10 font-bold">
          <li>
            <NavLink to={"/"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Courses</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Events</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Contacts</NavLink>
          </li>
        </ul>
      </div>
      <div className=" flex gap-2">
        <Btn title = "Get consultation" />
        <button className="px-10 py-5 flex justify-center items-center gap-2 rounded-lg">
          {" "}
          <IoPersonOutline />
          Log in / Register
        </button>
      </div>
    </div>
  );
}
