import React, { useState } from "react";
import { useEffect } from "react";
import { getCompany } from "../../service/data";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Company({
  selectedName,
  setPhase,
  companyName,
  setCompanyName,
}) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [activeCompanyId, setActiveCompanyId] = useState(null);
  const [active, setIsActive] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getCompany();
      setItems(res.data);
    };
    getData();
  }, []);

  const filteredItems = items?.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  const handleClick = (companyId, name) => {
    setActiveCompanyId(companyId);
    setSelectedCompany(true);
    setCompanyName(name);
    setIsActive(true);
  };

  const handlePhaseCompany = () => {
    if (selectedCompany === true) {
      setPhase(3);
    } else {
      setPhase(2);
    }
  };

  return (
    <>
      <div className="">
        <form className=" sticky w-64 m-8 left-full">
          <div className=" relative">
            <i className=" absolute left-3">
              <BiSearchAlt2 />
            </i>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              type="text"
              id="simple-search"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </form>
        <div className="flex align-middle justify-evenly gap-16">
          <div className=" border-r-2 px-4 flex flex-col gap-6">
            <div className=" ">
              <span>1</span>
              <p>Select Candidate</p>
            </div>
            <div>
              <span>2</span>
              <p className="font-bold">Select Company</p>
            </div>
            <div>
              <span>3</span>
              <p>Fill Report Details</p>
            </div>
            <span className=" text-gray-400 font-bold">Name:</span>
            <p>{selectedName}</p>
          </div>
          <ul className="flex flex-col gap-8 mr-60">
            {items
              ? filteredItems.map((item) => {
                  const isActive = item.id === activeCompanyId;
                  return (
                    <p
                      onClick={() => {
                        handleClick(item.id, item.name);
                      }}
                      className={`border border-grey-500 p-5 w-48 text-center px-5 ${
                        isActive ? "border-blue-500 p-5 w-48 text-center" : ""
                      }`}
                      key={item.id}>
                      {item.name}
                    </p>
                  );
                })
              : ""}{" "}
          </ul>
        </div>
        <div className="flex justify-evenly mt-8 ml-60">
          <button
            className="bg-gray-600  w-14 h-8 rounded border text-white"
            onClick={() => setPhase(1)}>
            Back
          </button>
          <button
            className={
              active === true
                ? "bg-blue-500 text-white w-14 h-8 rounded border"
                : "bg-red-500 text-white w-14 h-8 rounded border"
            }
            onClick={handlePhaseCompany}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
