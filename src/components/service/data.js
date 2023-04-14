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

export const getCompany = async () => {
  const url = "http://localhost:3333/api/companies";
  const res = await axios.get(url);
  return res;
};

export const postDetail = async (data) => {
  const url = "http://localhost:3333/api/reports";
  const res = await axios
    .post(url, data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
    });
};

export const getPopUp = async (id) => {
  const res = await axios.get(
    `http://localhost:3333/api/reports?candidateId=${id}`
  );
  return res.data;
};
export const getReport = async () => {
  const url = "http://localhost:3333/api/reports";
  const res = await axios.get(url);
  return res;
};

export const deletePost = async (id) => {
  const url = `http://localhost:3333/api/reports/${id}`;
  const res = await axios
    .delete(url)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
  return res;
};
