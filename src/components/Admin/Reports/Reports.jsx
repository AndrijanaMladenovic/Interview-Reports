import React, { useState } from "react";
import { getPopUp } from "../../service/data";
import Modal from "react-modal";
import { useEffect } from "react";
import { getReport } from "../../service/data";
import { AiFillDelete, AiFillEye, AiOutlineCloseCircle } from "react-icons/ai";
import moment from "moment";
import { deletePost } from "../../service/data";
import PopUp from "../../PopUp";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Reports() {
  const [item, setItems] = useState([]);
  const [id, setId] = useState(null);
  const [items, setItem] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [query, setQuery] = useState("");

  const getReports = async () => {
    const data = await getPopUp(id);
    setItems(data);
  };

  useEffect(() => {
    const getFetch = async () => {
      const res = await getReport();
      setItem(res.data);
    };
    getFetch();
  }, []);

  const filterCompanyAndCandName = items?.filter((name) => {
    return (
      name.candidateName.toLowerCase().includes(query.toLowerCase()) ||
      name.companyName.toLowerCase().includes(query.toLowerCase())
    );
  });

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = (id) => {
    setId(id);

    deletePost(id);
  };

  useEffect(() => {
    getReports();
  }, [id]);
  if (items) {
    return (
      <div className="flex flex-col items-center">
        <form className=" w-64 self-end  m-8">
          <div className=" relative">
            <i className=" absolute left-3 ">
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
        <div className="flex flex-col gap-5 items-center">
          {filterCompanyAndCandName.map((item, index) => {
            return (
              <div
                className=" flex gap-7  border border-gray-400 w-96 content-center p-3 items-center"
                key={index}>
                <div>
                  <h4 className="text-center">{item.companyName}</h4>
                  <h6 className="text-center font-light text-grey-400">
                    Company
                  </h6>
                </div>
                <div>
                  <h4 className="text-center">{item.candidateName}</h4>
                  <h6 className="text-center font-light text-grey-400">
                    Candidate
                  </h6>
                </div>
                <div>
                  <h4 className="text-center">
                    {moment(item.interviewDate).format("DD.MM.YYYY")}
                  </h4>
                  <h6 className="text-center font-light text-grey-400">
                    Interview Date
                  </h6>
                </div>
                <div>
                  <AiFillEye
                    onClick={() => {
                      setModalIsOpen(true);
                      setModalContent(
                        <PopUp
                          setModalIsOpen={setModalIsOpen}
                          closeModal={closeModal}
                          candidateName={item.candidateName}
                          companyName={item.companyName}
                          status={item.status}
                          interviewDate={moment(item.interviewDate).format(
                            "DD.MM.YYYY."
                          )}
                          phase={item.phase}
                          note={item.note}
                        />
                      );
                    }}
                  />
                </div>
                <div>
                  <AiFillDelete onClick={() => handleDelete(item.id)} />
                </div>
              </div>
            );
          })}
          <Modal
            overlayClassName="overlay"
            className="popup"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="">
            {modalContent}
            <div className="close_btn" onClick={() => setModalIsOpen(false)}>
              <AiOutlineCloseCircle />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
