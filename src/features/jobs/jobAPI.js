import axios from "../../utils/axios";

export const createJob = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};

export const getJobs = async () => {
  try {
    const response = await axios.get("/jobs");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getJob = async (id) => {
  try {
    const response = await axios.get(`/jobs/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateJob = async (id, data) => {
  try {
    const response = await axios.put(`/jobs/${id}`, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteJob = async (id) => {
  try {
    const response = await axios.delete(`/jobs/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
