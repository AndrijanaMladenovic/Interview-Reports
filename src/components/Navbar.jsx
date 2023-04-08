import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-blue-600 flex justify-around p-4 items-center">
      <Link to={"/"} className=" text-white ">
        <p>Bit Students</p>
      </Link>
      <button class=" bg-transparent hover:bg-white hover:text-blue-600 text-white  py-1 px-4 rounded border border-white">
        Admin
      </button>
    </div>
  );
}
