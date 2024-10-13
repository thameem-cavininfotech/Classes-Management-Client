import axios from "axios";
import { CLASS } from "../constants/crudUrl";
export const GetAllClass = async () => {
  return await axios.get(`${CLASS}/classes`);
};
export const GetClassById = async (id) => {
    return await axios.get(`${CLASS}/${id}`);
  };

export const DeleteClass = async (id) => {
  return await axios.delete(`${CLASS}/${id}`);
};
