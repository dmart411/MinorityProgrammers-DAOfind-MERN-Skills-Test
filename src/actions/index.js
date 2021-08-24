import { ADD_DAO } from "./types";

export const addDao = (dao) => {
  return {
    type: ADD_DAO,
    payload: dao,
  };
};
