import axios from "axios";

export const getCandidates = async () => {
  const url = "http://localhost:3333/api/candidates";
  const res = await axios.get(url);

  return res;
};

export const getCandidateReport = async (id) => {
  const res = await axios.get(`http://localhost:3333/api/candidates/${id}`);
  return res.data;
};

export const getGridInfo = async (id) => {
  const res = await axios.get(
    `http://localhost:3333/api/reports?candidateId=${id}`
  );
  return res.data;
};
