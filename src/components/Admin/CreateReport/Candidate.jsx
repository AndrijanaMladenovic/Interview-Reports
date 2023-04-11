import React, { useState } from "react";
import { getCandidates } from "../../service/data";
import { useEffect } from "react";

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

  useEffect(() => {
    const getFetch = async () => {
      const res = await getCandidates();
      setItems(res.data);
    };
    getFetch();
  }, []);

  const handleActiveCandidate = (id, name) => {
    setActiveId(id);
    setSelectedId(id);
    setName(name);
    setIsActive(true);
  };

  const handlePhaseCandidate = () => {
    if (activeId !== null) {
      setPhase(2);
    } else {
      setPhase(1);
    }
  };

  return (
    <div className="flex pt-9 align-middle justify-center gap-28">
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
      <div className="grid grid-cols-3 gap-5 justify-items-center ">
        {items
          ? items.map((item) => {
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
  );
}
