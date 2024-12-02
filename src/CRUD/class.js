import axios from "axios";
import { CLASS } from "../constants/crudUrl";
export const getAllClass = async () => {
  return await axios.get(`${CLASS}/classes`);
};
export const getClassById = async (id) => {
  return await axios.get(`${CLASS}/${id}`);
};
export const createClass = async (data) => {
  return await axios.post(`${CLASS}/create`,data);
};
export const deleteClass = async (id) => {
  return await axios.delete(`${CLASS}/${id}`);
};
