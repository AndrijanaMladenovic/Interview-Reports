import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCandidateReport } from "./service/data";
import moment from "moment";

export default function CandidateDetails() {
  const { id } = useParams();
  const [items, setItems] = useState();
  const getData = async () => {
    const data = await getCandidateReport(id);
    setItems(data);
  };
  useEffect(() => {
    getData();
  }, [id]);
  console.log(items);

  if (items) {
    return (
      <div className=" flex gap-14 align-middle justify-center m-10 items-center">
        <div>
          <img src={items.avatar} className=" w-36" />
        </div>
        <div>
          <span className=" font-bold text-gray-400">Name:</span>
          <p className=" font-light">{items.name}</p>
          <span className=" font-bold text-gray-400">Email:</span>
          <p className=" font-light">{items.email}</p>
        </div>
        <div>
          <span className=" font-bold text-gray-400">Date of birth:</span>
          <p className=" font-light">
            {moment(items.birthday).format("DD.MM.YYYY")}
          </p>
          <span className=" font-bold text-gray-400">Education:</span>
          <p className=" font-light">{items.education}</p>
        </div>
      </div>
    );
  } else {
    return " ";
  }
}
