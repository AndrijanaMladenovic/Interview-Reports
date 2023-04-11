import React, { useState } from "react";
import { getCandidates } from "./service/data";
import { useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const res = await getCandidates();
      setItems(res.data);
    };
    getData();
  }, []);
  const filteredItems = items?.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <form className="flex relative -right-3/4">
        <div className=" relative">
          <i className=" absolute left-11 translate-y-24 text-lg">
            <BiSearchAlt2 />
          </i>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            id="simple-search"
            className=" m-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="grid grid-cols-3 gap-5 justify-items-center ">
        {items ? (
          filteredItems.map((item) => {
            return (
              <div
                className=" flex flex-col justify-center items-center"
                onClick={() => {
                  navigate(`/${item.id}`);
                }}>
                <img src={item.avatar} alt="" className=" w-24" />
                <p className=" font-bold">{item.name}</p>
                <p className=" font-light">{item.email}</p>
              </div>
            );
          })
        ) : (
          <p>Not found</p>
        )}
      </div>
    </>
  );
}
