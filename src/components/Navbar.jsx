import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-blue-600 flex  p-4 items-center justify-around">
      <Link to={"/"} className=" text-white ">
        <p>Bit Students</p>
      </Link>
      <div className="flex gap-5">
        <button className=" bg-transparent hover:bg-white hover:text-blue-600 text-white  py-1 px-4 rounded border border-white">
          <Link to={"/create.report"}>Create Report</Link>
        </button>
        <button className=" bg-transparent hover:bg-white hover:text-blue-600 text-white  py-1 px-4 rounded border border-white">
          <Link to={"/reports"}>Reports</Link>
        </button>
      </div>
    </div>
  );
}
