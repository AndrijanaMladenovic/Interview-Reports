import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getGridInfo } from "./service/data";
import { useEffect } from "react";
import moment from "moment";
import { AiFillEye } from "react-icons/ai";

export default function Grid() {
  const [items, setItems] = useState();
  const { id } = useParams();

  const getReports = async () => {
    const data = await getGridInfo(id);
    setItems(data);
  };
  useEffect(() => {
    getReports();
  }, [id]);

  if (items) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Company
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Interview Date
              </th>
              <th scope="col" className="px-6 py-3 text-center" colSpan={2}>
                Status
              </th>
            </tr>
          </thead>

          {items.map((item, index) => {
            return (
              <tbody key={`tb- ${index}`}>
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={`tr- ${index}`}>
                  <td key={`td1- ${index}`} className="px-6 py-3 text-center">
                    {item.companyName}
                  </td>
                  <td key={`td2- ${index}`} className="px-6 py-3 text-center">
                    {moment(item.interviewDate).format("DD.MM.YYYY.")}
                  </td>
                  <td key={`td3- ${index}`} className="px-6 py-3 text-center">
                    {item.status}
                  </td>
                  <td key={`td4- ${index}`} className="px-6 py-3 text-center">
                    <p key={`p- ${index}`}>
                      <AiFillEye />
                    </p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
