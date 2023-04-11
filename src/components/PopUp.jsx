import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function PopUp({
  closeModal,
  candidateName,
  companyName,
  status,
  interviewDate,
  phase,
  note,
}) {
  return (
    <>
      <h3 className=" font-bold">{candidateName}</h3>

      <div className=" flex gap-12">
        <div className=" w-80 pt-3">
          <span className=" font-bold text-blue-400">Company</span>
          <h4 className=" font-light">{companyName}</h4>
          <span className="font-bold text-blue-400">Interview Date</span>
          <h4 className=" font-light">{interviewDate}</h4>
          <span className="font-bold text-blue-400">Phase</span>
          <h4 className=" font-light">{phase}</h4>
          <span className="font-bold text-blue-400">Status</span>
          <h4 className=" font-light">{status}</h4>
        </div>
        <div className="pt-3">
          <span className="font-bold text-blue-400">Notes</span>
          <p className=" font-light ">{note}</p>
        </div>
        {/* <button onClick={closeModal}>
          <AiOutlineCloseCircle />
        </button> */}
      </div>
    </>
  );
}
