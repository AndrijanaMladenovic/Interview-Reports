import React, { useState } from "react";
import { getCandidates } from "../../service/data";
import { useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Candidate({
  setPhase,
  selectedName,
  setName,
  setActiveId,
  activeId,
}) {
  const [items, setItems] = useState([]);
  const [active, setIsActive] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const getFetch = async () => {
      const res = await getCandidates();
      setItems(res.data);
    };
    getFetch();
  }, []);
  const handlePhaseCandidate = () => {
    if (selectedId !== null) {
      setPhase(2);
    } else {
      setPhase(1);
    }
  };
  const filteredItems = items?.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  const handleActiveCandidate = (id, name) => {
    setActiveId(id);
    setSelectedId(id);
    setName(name);
    setIsActive(true);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <form className=" w-64 self-end  m-8">
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
        <div className="flex align-middle justify-center gap-28 ">
          <div className="border-r-2 px-4 flex flex-col gap-6">
            <div className=" ">
              <span>1</span>
              <p className="font-bold">Select Candidate</p>
            </div>
            <div>
              <span>2</span>
              <p>Select Company</p>
            </div>
            <div>
              <span>3</span>
              <p>Fill Report Details</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 justify-items-center">
            {items
              ? filteredItems.map((item) => {
                  const isSelected = item.id === selectedId;
                  return (
                    <div
                      key={item.id}
                      id={item.id}
                      className={`w-72 flex flex-col justify-center items-center p-4 cursor-pointer ${
                        isSelected ? "selected border border-blue-500" : ""
                      }`}
                      onClick={() => handleActiveCandidate(item.id, item.name)}>
                      <img src={item.avatar} alt="" className=" w-24" />
                      <p className=" font-bold">{item.name}</p>
                      <p className=" font-light">{item.email}</p>
                    </div>
                  );
                })
              : ""}
            <button
              className={
                active === true
                  ? "bg-blue-500 text-white w-14 h-8 absolute top-full rounded border"
                  : "bg-red-500 text-white w-14 h-8 absolute top-full rounded border"
              }
              onClick={handlePhaseCandidate}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
