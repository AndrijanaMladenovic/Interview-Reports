import React from "react";
import { useState } from "react";
import { postDetail } from "../../service/data";
import { useEffect } from "react";

export default function ReportDetail({
  companyName,
  selectedName,
  setPhase,
  activeId,
}) {
  const [formState, setFormState] = useState({
    interviewDate: "",
    phase: "",
    status: "",
    notes: "",
    interviewDateError: "",
  });

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();

    if (selectedDate > today) {
      setFormState({
        ...formState,
        interviewDateError: "The selected date cannot be in the future.",
      });
    } else {
      setFormState({
        ...formState,
        interviewDateError: "",
        interviewDate: event.target.value,
      });
    }
  };

  const handlePhaseChange = (event) => {
    setFormState({ ...formState, phase: event.target.value });
  };

  const handleStatusChange = (event) => {
    setFormState({ ...formState, status: event.target.value });
  };

  const handleNotesChange = (event) => {
    setFormState({ ...formState, notes: event.target.value });
  };
  const handlePhaseSubmit = () => {
    if (
      formState.interviewDate === "" ||
      formState.phase === "" ||
      formState.status === "" ||
      formState.notes === ""
    ) {
      alert("Please fill in all fields before submitting.");
    } else {
      submitData();
    }
  };

  const submitData = () => {
    const { interviewDate, phase, status, notes } = formState;
    const data = {
      candidateId: activeId,
      candidateName: selectedName,
      interviewDate: interviewDate,
      companyName: companyName,
      phase: phase,
      status: status,
      note: notes,
    };
    postDetail(data);
  };

  return (
    <>
      <div className="flex pt-9 align-middle justify-center gap-28">
        <div className=" border-r-2 px-4 flex flex-col gap-6">
          <div className=" ">
            <span>1</span>
            <p>Select Candidate</p>
          </div>
          <div>
            <span>2</span>
            <p>Select Company</p>
          </div>
          <div>
            <span>3</span>
            <p className="font-bold">Fill Report Details</p>
          </div>
          <span className=" text-gray-400 font-bold">Name:</span>
          <p>{selectedName}</p>
          <span className=" text-gray-400 font-bold">Company:</span>
          <p>{companyName}</p>
        </div>
        <div className="flex flex-col items-center gap-9 ">
          <div className="flex gap-9">
            <div>
              <label
                htmlFor="date"
                className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                value={formState.interviewDate}
                onChange={handleDateChange}
                type="date"
                className=" w-32 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formState.interviewDateError && (
                <p className="text-red-500">{formState.interviewDateError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phase"
                className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phase
              </label>
              <select
                value={formState.phase}
                onChange={handlePhaseChange}
                className=" w-32 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">-</option>
                <option value="cv">cv</option>
                <option value="hr">hr</option>
                <option value="tech">tech</option>
                <option value="final">final</option>
              </select>
              {formState.phase === "" && (
                <p className="text-red-500">Please select a phase</p>
              )}
            </div>
            <div>
              <label
                htmlFor="status"
                className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Status
              </label>
              <select
                value={formState.status}
                onChange={handleStatusChange}
                className=" w-32 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">-</option>
                <option value="passed">passed</option>
                <option value="declined">declined</option>
              </select>
              {formState.status === "" && (
                <p className="text-red-500">Please select a status</p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="status"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Notes
            </label>
            <textarea
              value={formState.notes}
              onChange={handleNotesChange}
              cols="30"
              rows="10"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            {formState.notes === "" && (
              <p className=" text-red-500">Please select a notes</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-8 ml-60">
        <button
          className="bg-gray-600  w-14 h-8 rounded border text-white"
          onClick={() => setPhase(2)}>
          Back
        </button>
        <button
          className={`btn ${
            formState.interviewDate === "" ||
            formState.phase === "" ||
            formState.status === "" ||
            formState.notes === ""
              ? "bg-red-500 text-white w-14 h-8 rounded border"
              : " w-14 h-8  bg-blue-500 text-white rounded border "
          }`}
          onClick={handlePhaseSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
